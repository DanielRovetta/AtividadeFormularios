import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validadores } from 'src/utils/validadores';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formulario: FormGroup = this.formBuilder.group(
    {
      nome: new FormControl('', [Validators.required, Validadores.validarNome]),
      sobrenome: new FormControl('', [Validators.required, Validadores.validarNome]),
      idade: new FormControl('', [Validators.required]),
      dataNascimento: new FormControl('', [Validators.required, Validadores.validarDataNascimento]),
      nomeMae: new FormControl('', [Validators.required, Validadores.validarNome]),
      nomePai: new FormControl('', [Validators.required, Validadores.validarNome]),
      cpf: new FormControl('', [Validators.required, Validadores.validarCpf]),
      rg: new FormControl('', [Validators.required])
    }
  )
  constructor(private formBuilder: FormBuilder) { }

  validarFormulario() {
    console.log(this.formulario.valid);
  }

}
