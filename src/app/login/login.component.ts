import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {LoginService} from '../services/login.service';
import { GendleService } from '../services/gendle.service';
import {TokenStorageService} from '../services/token-storage.service';
import { CustomValidators, ConfirmValidParentMatcher, regExps,  errorMessages} from '../services/custom-validators.service';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators, FormBuilder, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userSignInForm: FormGroup;
  //confirmValidParentMatcher = new ConfirmValidParentMatcher();
  errors = errorMessages;

  constructor(private router: Router, 
              public dialog: MatDialog,
              private formBuilder: FormBuilder, 
              private loginService: LoginService, 
              private gendleService: GendleService,
              private token: TokenStorageService) {
    this.createForm();
  }

  username: string;
  password: string;

  onSignIn() {
     this.token.signOut();
     //this.gendleService.availableGendle$.unsubscribe();
    this.loginService.attemptAuth(this.username, this.password).subscribe(
      data => {
       
        this.token.saveToken(data.token);
        console.log("data.token", data.token);
        //console.log("order", this.token.getOrder());
        this.loginService.username=this.username;
        this.loginService.isAuth = true;
        this.loginService.publishRole()
        this.router.navigate(['googlebooks']);
      },
      () => {this.loginService.username="anonymous";
        this.loginService.isAuth = false;}
    );
    ;
  }


  createForm() {
    this.userSignInForm = this.formBuilder.group({
        username: ['', [
          Validators.required
        ]],
        password: ['', [
            Validators.required
        ]]
    });
}

}
