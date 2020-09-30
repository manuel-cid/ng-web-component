import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomElementLoaderService {

  private loaded = false;

  constructor() { }

  load(): void {
    if (this.loaded) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'assets/main.js';
    document.body.appendChild(script);
    this.loaded = true;
  }

}
