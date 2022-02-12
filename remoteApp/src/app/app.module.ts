import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedHeaderComponent } from './shared-header/shared-header.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [AppComponent, SharedHeaderComponent, Page2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
