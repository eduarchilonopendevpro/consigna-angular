import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearResponsableComponent } from './crear-responsable.component';

describe('CrearResponsableComponent', () => {
  let component: CrearResponsableComponent;
  let fixture: ComponentFixture<CrearResponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearResponsableComponent]
    });
    fixture = TestBed.createComponent(CrearResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
