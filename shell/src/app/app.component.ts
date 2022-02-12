import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  @ViewChild('sharedHeaderRef') sharedHeaderHost!: HTMLDivElement;

  constructor(private vcref: ViewContainerRef) {}

  async ngOnInit() {
    const { SharedHeaderComponent } = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
      exposedModule: './SharedHeaderComponent',
    });
    const compRef = this.vcref.createComponent(SharedHeaderComponent);
  }
}
