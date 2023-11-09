import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormModule } from './form/form.module';

const routes: Routes = [{ path: 'formulario/', component: FormModule }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
