import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosPessoaisComponent } from './form-dados-pessoais.component';

describe('FormDadosPessoaisComponent', () => {
  let component: FormDadosPessoaisComponent;
  let fixture: ComponentFixture<FormDadosPessoaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDadosPessoaisComponent]
    });
    fixture = TestBed.createComponent(FormDadosPessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
