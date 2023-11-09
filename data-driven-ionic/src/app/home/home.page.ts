import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validadores } from 'src/utils/validadores';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  paginaForm: number = 1;
  paginaValida: boolean = false;

  formulario: FormGroup = this.formBuilder.group(
    {
      nome: new FormControl('', [Validators.required, Validadores.validarNome]),
      sobrenome: new FormControl('', [Validators.required, Validadores.validarNome]),
      idade: new FormControl('', [Validators.required]),
      dataNascimento: new FormControl('', [Validators.required, Validadores.validarDataNascimento]),
      nomeMae: new FormControl('', [Validators.required, Validadores.validarNome]),
      cpf: new FormControl('', [Validators.required, Validadores.validarCpf]),
      rg: new FormControl('', [Validators.required, Validadores.validarRg]),

      nomePai: new FormControl('', [Validators.required, Validadores.validarNome]),

      usuario: new FormControl('', [Validators.required, Validadores.validarNome]),
      email: new FormControl('', [Validators.required, Validadores.validarEmail]),
      senha: new FormControl('', [Validators.required]),
      ddd: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required]),

      rua: new FormControl('', [Validators.required, Validadores.validarNome]),
      bairro: new FormControl('', [Validators.required, Validadores.validarNome]),
      numero: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required, Validadores.validarNome]),
      logradouro: new FormControl(''),
      estado: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required, Validadores.validarCep]),
      pontoReferencia: new FormControl(''),

      altura: new FormControl('', [Validators.required]),
      peso: new FormControl('', [Validators.required]),
      tipoSanguineo: new FormControl('', [Validators.required]),
      cor: new FormControl('', [Validators.required]),
      signo: new FormControl('', [Validators.required, Validadores.validarNome]),
      animal: new FormControl('', [Validators.required]),
    }
  )
  constructor(private formBuilder: FormBuilder) { }

  validarPaginaFormulario() {
    if (this.paginaForm == 1) {
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
    if (this.paginaForm == 2) {
      if (this.formulario.get('usuario')?.valid &&
        this.formulario.get('email')?.valid &&
        this.formulario.get('senha')?.valid &&
        this.formulario.get('ddd')?.valid &&
        this.formulario.get('celular')?.valid &&
        this.formulario.get('nomePai')?.valid) {
        return true
      }
    }
    if (this.paginaForm == 3) {
      if (this.formulario.get('rua')?.valid &&
        this.formulario.get('bairro')?.valid &&
        this.formulario.get('numero')?.valid &&
        this.formulario.get('cidade')?.valid &&
        this.formulario.get('logradouro')?.valid &&
        this.formulario.get('estado')?.valid &&
        this.formulario.get('cep')?.valid &&
        this.formulario.get('pontoReferencia')?.valid) {
        return true
      }
    }
    if (this.paginaForm == 4) {
      if (this.formulario.get('altura')?.valid &&
        this.formulario.get('peso')?.valid &&
        this.formulario.get('tipoSanguineo')?.valid &&
        this.formulario.get('cor')?.valid &&
        this.formulario.get('signo')?.valid &&
        this.formulario.get('animal')?.valid) {
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

  formatarCep() {
    let cep = this.formulario.value.cep as string;
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/(\d{5})(\d)/, "$1-$2")
    this.formulario.value.cep = cep
  }

  formatarDdd() {
    let ddd = this.formulario.value.ddd as string;
    ddd = ddd.replace(/\D/g, "")
    ddd = "(" + ddd + ")"
    this.formulario.value.ddd = ddd
  }

  formatarCelular() {
    let celular = this.formulario.value.celular as string;
    celular = celular.replace(/\D/g, "")
    celular = celular.replace(/(\d{5})(\d)/, "$1-$2")
    this.formulario.value.celular = celular
  }

  proximaPagina() {
    if (this.paginaForm < 5) {
      this.paginaForm++;
    }
  }

  voltarPagina() {
    if (this.paginaForm > 1) {
      this.paginaForm--;
    }
  }

  resetForm() {
    this.formulario.reset(true);
    this.paginaForm = 1;
  }

}
