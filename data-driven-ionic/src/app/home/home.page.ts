import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validadores } from 'src/utils/validadores';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  paginaFomr: number = 1;
  paginaValida: boolean = false;

  formulario: FormGroup = this.formBuilder.group(
    {
      nome: new FormControl('Daniel', [Validators.required, Validadores.validarNome]),
      sobrenome: new FormControl('Rovetta', [Validators.required, Validadores.validarNome]),
      idade: new FormControl('23', [Validators.required]),
      dataNascimento: new FormControl('2000-06-12', [Validators.required, Validadores.validarDataNascimento]),
      nomeMae: new FormControl('Andressa', [Validators.required, Validadores.validarNome]),
      nomePai: new FormControl('Luiz', [Validators.required, Validadores.validarNome]),
      cpf: new FormControl('14463876745', [Validators.required, Validadores.validarCpf]),
      rg: new FormControl('4041783', [Validators.required, Validadores.validarRg]),

      usuario: new FormControl('', [Validators.required, Validadores.validarNome]),
    }
  )
  constructor(private formBuilder: FormBuilder) { }

  validarPaginaFormulario() {
    if (this.paginaFomr == 1) {
      if (this.formulario.get('nome')?.valid &&
        this.formulario.get('sobrenome')?.valid &&
        this.formulario.get('idade')?.valid &&
        this.formulario.get('dataNascimento')?.valid &&
        this.formulario.get('nomeMae')?.valid &&
        this.formulario.get('nomePai')?.valid &&
        this.formulario.get('cpf')?.valid &&
        this.formulario.get('rg')?.valid) {
        return true
      }
    }
    return false
  }

  formatarCpf() {
    let cpf = this.formulario.value.cpf as string;
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    this.formulario.value.cpf = cpf
  }

  formatarRg() {
    let rg = this.formulario.value.rg as string;
    rg = rg.replace(/\D/g, "")
    rg = rg.replace(/(\d{1})(\d)/, "$1.$2")
    rg = rg.replace(/(\d{3})(\d)/, "$1.$2")
    this.formulario.value.rg = rg
  }

  proximaPagina() {
    this.paginaFomr++;

    if (this.paginaFomr > 4) {
      this.paginaFomr = 1;
    }
  }

}
