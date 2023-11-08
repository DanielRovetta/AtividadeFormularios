import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosCaracteristicasComponent } from './form-dados-caracteristicas.component';

describe('FormDadosCaracteristicasComponent', () => {
  let component: FormDadosCaracteristicasComponent;
  let fixture: ComponentFixture<FormDadosCaracteristicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDadosCaracteristicasComponent]
    });
    fixture = TestBed.createComponent(FormDadosCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
