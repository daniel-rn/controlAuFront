import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistrosComponent } from './registros.component';

const alunosRoutes: Routes = [
    { path: 'registros', component: RegistrosComponent , children :[
        // { path: 'novo', component: AlunoFormComponent },
        //{ path: ':id', component: AlunoDetalheComponent},
        // { path: ':ida/editar', component: AlunoFormComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class RegistrosRoutingModule { }