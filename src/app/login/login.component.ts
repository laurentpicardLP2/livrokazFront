import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {LoginService} from '../services/login.service';
import {TokenStorageService} from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, public dialog: MatDialog, private loginService: LoginService, private token: TokenStorageService) {
  }

  username: string;
  password: string;

  onSignIn() {
    this.loginService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        console.log("data.token", data.token)
        this.router.navigate(['googlebooks']);
      }
    );
  }

}
