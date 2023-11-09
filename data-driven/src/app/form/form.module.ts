import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormDadosCadastraisComponent } from './form-dados-cadastrais/form-dados-cadastrais.component';
import { FormDadosEnderecoComponent } from './form-dados-endereco/form-dados-endereco.component';
import { FormDadosCaracteristicasComponent } from './form-dados-caracteristicas/form-dados-caracteristicas.component';
import { FormDadosPessoaisComponent } from './form-dados-pessoais/form-dados-pessoais.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    FormComponent,
    FormDadosPessoaisComponent,
    FormDadosCadastraisComponent,
    FormDadosEnderecoComponent,
    FormDadosCaracteristicasComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    FormRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
