import { Component } from '@angular/core';

import { CustomElementLoaderService } from './custom-element-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ng-web-component';

  constructor(private loader: CustomElementLoaderService) { }

  loadExternal(): void {
    this.loader.load();

    const component = document.createElement('external-custom-element');

    const content = document.getElementById('content');
    content.appendChild(component);
  }

}
