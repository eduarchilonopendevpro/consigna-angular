import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaResponsablesComponent } from './lista-responsables.component';

describe('ListaResponsablesComponent', () => {
  let component: ListaResponsablesComponent;
  let fixture: ComponentFixture<ListaResponsablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaResponsablesComponent]
    });
    fixture = TestBed.createComponent(ListaResponsablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
