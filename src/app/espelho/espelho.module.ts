import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspelhoComponent } from './espelho.component';
import { EspelhoRoutingModule } from './espelho.routing.module';
import { EspelhoDetalheComponent } from './espelho-detalhe/espelho-detalhe.component';
import { EspelhoNaoEncontradoComponent } from './espelho-nao-encontrado/espelho-nao-encontrado.component';

@NgModule({
    imports: [
        CommonModule,
       EspelhoRoutingModule
    ],
    exports: [],
    declarations: [
        EspelhoComponent,
        EspelhoDetalheComponent,
        EspelhoNaoEncontradoComponent
        ],
    providers: [],
})
export class EspelhoModule { }
