import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginClienteComponent } from './components/login-cliente/login-cliente.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'login-cliente', component: LoginClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
