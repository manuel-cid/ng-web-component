import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { ExternalCustomElementComponent } from './external-custom-element/external-custom-element.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ExternalCustomElementComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) { }

  ngDoBootstrap(appRef: ApplicationRef): void {
    // Convert `ExternalWebCmpComponent` to a custom element.
    const cmp = createCustomElement(ExternalCustomElementComponent, { injector: this.injector });
    // Register the custom element with the browser.
    customElements.define('external-custom-element', cmp);
  }

}
