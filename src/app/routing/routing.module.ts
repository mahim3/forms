import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { LoginComponent } from '../login/login.component';
import { FormdetailComponent } from '../formdetail/formdetail.component';
import { AuthGuard } from '../auth.guard';

const route: Routes=[
  {path:'form',canActivate:[AuthGuard],component:FormComponent,},
  {path:'login',component:LoginComponent},
  {path:'form/:slug/:ab',component:FormdetailComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }

export const routingComponent = [FormComponent, LoginComponent, FormdetailComponent];
