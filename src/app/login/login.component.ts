import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(private authoService: AuthService) { }

  ngOnInit(): void {
  }

  fazerLogin() {
    console.log(this.usuario)
    this.authoService.fazerLogin(this.usuario);
  }


}
