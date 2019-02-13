import { LoginService } from '../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSignIn() {
    
    this.loginService.login(new User('admin', 'books', '', ''));
    
  }

}
