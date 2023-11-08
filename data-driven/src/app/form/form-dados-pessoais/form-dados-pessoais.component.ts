import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { Validadores } from 'src/app/utils/validadores';

@Component({
  selector: 'app-form-dados-pessoais',
  templateUrl: './form-dados-pessoais.component.html',
  styleUrls: ['./form-dados-pessoais.component.scss']
})
export class FormDadosPessoaisComponent {

  dadosPessoaisForm: FormGroup = this.formBuilder.group(
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
    console.log(this.dadosPessoaisForm.valid);
  }
}


@Pipe({ name: 'cpf' })
export class CpfPipe implements PipeTransform {
  transform(value: string | number): string {
    let valorFormatado = value + '';

    valorFormatado = valorFormatado
      .padStart(11, '0')                  // item 1
      .substr(0, 11)                      // item 2
      .replace(/[^0-9]/, '')              // item 3
      .replace(                           // item 4
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        '$1.$2.$3-$4'
      );

    return valorFormatado;
  }
}
