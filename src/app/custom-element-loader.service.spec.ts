import { TestBed } from '@angular/core/testing';

import { CustomElementLoaderService } from './custom-element-loader.service';

describe('CustomElementLoaderService', () => {
  let service: CustomElementLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomElementLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
