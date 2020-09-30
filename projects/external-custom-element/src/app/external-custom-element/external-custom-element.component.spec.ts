import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalCustomElementComponent } from './external-custom-element.component';

describe('ExternalCustomElementComponent', () => {
  let component: ExternalCustomElementComponent;
  let fixture: ComponentFixture<ExternalCustomElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalCustomElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalCustomElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
