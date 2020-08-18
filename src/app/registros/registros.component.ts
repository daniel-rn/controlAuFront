import { Component, OnInit } from '@angular/core';
import { Registro, TipoRegistro } from './registro';
import { RegistroService } from './registroService';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  public registro: Registro = new Registro();

  formulario: FormGroup;
  modalidades: any[];

  constructor(private service: RegistroService,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.modalidades = [TipoRegistro.Entrada, TipoRegistro.Saida];
  }

  registrar() {
    this.service.realiza(this.registro);
  }
}
