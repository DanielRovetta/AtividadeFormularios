import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDadosPessoaisComponent } from './form-dados-pessoais/form-dados-pessoais.component';
import { FormComponent } from './form.component';
import { FormDadosCadastraisComponent } from './form-dados-cadastrais/form-dados-cadastrais.component';
import { FormDadosEnderecoComponent } from './form-dados-endereco/form-dados-endereco.component';
import { FormDadosCaracteristicasComponent } from './form-dados-caracteristicas/form-dados-caracteristicas.component';

const routes: Routes = [
    {
        path: 'formulario', component: FormComponent, children: [
            { path: 'dados-pessoais', component: FormDadosPessoaisComponent },
            { path: 'dados-cadastrais', component: FormDadosCadastraisComponent },
            { path: 'dados-endereco', component: FormDadosEnderecoComponent },
            { path: 'dados-caracteristicas', component: FormDadosCaracteristicasComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FormRoutingModule { }