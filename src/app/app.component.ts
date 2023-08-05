import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'consigna-angular';
  constructor(private loginService: LoginService) {}
}
