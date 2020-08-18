import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrosComponent } from './registros.component';
import { RegistrosRoutingModule } from './registros.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistrosComponent],
  imports: [
    HttpClientModule,CommonModule,BrowserModule,FormsModule,
    RegistrosRoutingModule, ReactiveFormsModule 
  ]
})
export class RegistrosModule { }
