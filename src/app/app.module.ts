import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClienteComponent } from './components/cliente/cliente.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginClienteComponent } from './components/login-cliente/login-cliente.component';
import { UsersService } from './services/users/users.service';
import { CookieService } from 'ngx-cookie-service';
import { ViewRecepComponent } from './components/view-recep/view-recep.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { cliente } from './models/cliente.model';
import { labo } from './models/labo.model';
import { analisis } from './models/analisis.model';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    DashboardComponent,
    NavComponent,
    LoginClienteComponent,
    ViewRecepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    UsersService,
    cliente,
    labo,
    analisis,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
