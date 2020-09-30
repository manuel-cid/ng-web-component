import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './external-custom-element.component.html',
  styleUrls: ['./external-custom-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ExternalCustomElementComponent { }
