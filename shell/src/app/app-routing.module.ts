import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'page1',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        type: 'module',
        exposedModule: './Page1Module',
      }).then((m) => m.Page1Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
