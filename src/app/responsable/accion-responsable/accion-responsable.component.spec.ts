import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionResponsableComponent } from './accion-responsable.component';

describe('AccionResponsableComponent', () => {
  let component: AccionResponsableComponent;
  let fixture: ComponentFixture<AccionResponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccionResponsableComponent]
    });
    fixture = TestBed.createComponent(AccionResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
