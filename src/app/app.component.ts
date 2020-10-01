import { Component } from '@angular/core';

import { CustomElementLoaderService } from './custom-element-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ng-web-component';

  tag = 'external-custom-element';
  url = 'assets/external-custom-element.js';
  asdf = false;

  constructor(private loader: CustomElementLoaderService) { }

  loadExternal(): void {
    this.asdf = true;
    // this.loader.load();

    // const component = document.createElement(this.tag);

    // const content = document.getElementById('content');
    // content.appendChild(component);
  }

}
