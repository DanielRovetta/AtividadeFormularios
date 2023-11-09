import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { FormDadosPessoaisComponent } from './form/form-dados-pessoais/form-dados-pessoais.component';
import { FormDadosCadastraisComponent } from './form/form-dados-cadastrais/form-dados-cadastrais.component';
import { FormDadosEnderecoComponent } from './form/form-dados-endereco/form-dados-endereco.component';
import { FormDadosCaracteristicasComponent } from './form/form-dados-caracteristicas/form-dados-caracteristicas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    FormDadosPessoaisComponent,
    FormDadosCadastraisComponent,
    FormDadosEnderecoComponent,
    FormDadosCaracteristicasComponent
  ],
  imports: [
    AppRoutingModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
