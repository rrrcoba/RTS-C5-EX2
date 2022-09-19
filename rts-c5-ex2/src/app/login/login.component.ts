import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;

  token: any = '';

  form: any = {
    username: null,
    password: null
  };

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    if(window.sessionStorage.getItem("auth-token"))
      this.router.navigate(['home']);
  }

  login(): void {

  }

}
