import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Usuario } from 'src/model/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  usuario!: Usuario;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService._usuarioEncontrado.subscribe((data) => {
      this.usuario = data;
    });
  }

  loginUsuario() {
    this.loginService.login(
      this.formLogin.value?.email,
      this.formLogin.value?.password
    );
  }
}
