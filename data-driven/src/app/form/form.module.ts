import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormDadosCadastraisComponent } from './form-dados-cadastrais/form-dados-cadastrais.component';
import { FormDadosEnderecoComponent } from './form-dados-endereco/form-dados-endereco.component';
import { FormDadosCaracteristicasComponent } from './form-dados-caracteristicas/form-dados-caracteristicas.component';



@NgModule({
  declarations: [
    FormComponent,
    FormDadosCadastraisComponent,
    FormDadosEnderecoComponent,
    FormDadosCaracteristicasComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule { }
