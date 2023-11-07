import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDadosPessoaisComponent } from './form-dados-pessoais/form-dados-pessoais.component';
import { FormComponent } from './form.component';

const routes: Routes = [
    {
        path: 'formulario', component: FormComponent, children: [
            { path: 'dados-pessoais', component: FormDadosPessoaisComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FormRoutingModule { }