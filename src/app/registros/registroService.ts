import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registro } from './registro';



@Injectable({
  providedIn: 'root'
})
export class RegistroService {

    constructor(private http: HttpClient) { }


  realiza(registro: Registro){
    console.log(registro)
    this.http.post("https://controlauvoapi20200817121732.azurewebsites.net/api/registros/registrar", registro).subscribe(
      _ => alert("enviado com sucesso"),
      _ => alert("erro:"),
      () => console.log("acesso a webapi post ok..."));
  }

}
