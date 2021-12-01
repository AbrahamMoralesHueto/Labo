import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginClienteComponent } from './components/login-cliente/login-cliente.component';
import { ViewRecepComponent } from './components/view-recep/view-recep.component';

const routes: Routes = [
  {
    path:'', redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'login', component: LoginClienteComponent
  },
  {
    path: 'recep', component: ViewRecepComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
