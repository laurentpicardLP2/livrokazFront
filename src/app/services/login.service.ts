import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;

  constructor(private httpClient: HttpClient, private router: Router) { }

  /**
   * Fonction de d'authentification d'un user.
   * Elle met à jour notre liste des authors et notre liste observable.
   * @param user le user qui cherche à se connecter
   */
  public login(user: User) {
    this.httpClient.post<User>('http://localhost:8080/userctrl/login', user).subscribe(
      user => {
        //this.user=user;
        //console.log("this.user" + this.user);
      },
      (error: any) =>  {  
        console.log("error"); 
        this.user = null; 
        this.router.navigate(['login']); 
      },
      () => {
        this.user=user;
        console.log("this.user" + this.user);
        this.router.navigate(['googlebooks'])
      }

    )
  }
}
