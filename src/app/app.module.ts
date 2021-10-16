import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClienteComponent } from './components/cliente/cliente.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginClienteComponent } from './components/login-cliente/login-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    DashboardComponent,
    NavComponent,
    LoginClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
