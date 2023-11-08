import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosEnderecoComponent } from './form-dados-endereco.component';

describe('FormDadosEnderecoComponent', () => {
  let component: FormDadosEnderecoComponent;
  let fixture: ComponentFixture<FormDadosEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDadosEnderecoComponent]
    });
    fixture = TestBed.createComponent(FormDadosEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
