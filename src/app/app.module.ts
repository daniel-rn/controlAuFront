import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { EspelhoModule } from './espelho/espelho.module';
import { RegistrosModule } from './registros/registros.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EspelhoModule,
    RegistrosModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
