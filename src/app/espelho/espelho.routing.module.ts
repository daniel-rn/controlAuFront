import { Routes, RouterModule } from '@angular/router';
import { EspelhoComponent } from './espelho.component';
import { NgModule } from '@angular/core';
import { EspelhoDetalheComponent } from './espelho-detalhe/espelho-detalhe.component';
import { EspelhoNaoEncontradoComponent } from './espelho-nao-encontrado/espelho-nao-encontrado.component';

const cursosRoutes: Routes = [
    { path: 'espelho', component: EspelhoComponent },
    { path: 'espelho/:id', component: EspelhoDetalheComponent },
    { path: 'naoEncontrado', component: EspelhoNaoEncontradoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class EspelhoRoutingModule {}