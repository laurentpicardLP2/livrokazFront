import { AppComponent } from './../app.component';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Role } from '../models/role.model';
import {BehaviorSubject, Observable,of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;
  baseUrl: 'http://localhost:8080/userctrl/login';
  public typeRole: string = "ROLE_ANONYMOUS";
  public username: string="anonymous";
  public isAuth: boolean = false;
  private availableRole: Role;


  constructor(private httpClient: HttpClient, 
              private router: Router) { }

  /**
   * Fonction de d'authentification d'un user.
   * Elle met à jour notre liste des authors et notre liste observable.
   * @param user le user qui cherche à se connecter
   */
  // public login(user: User) {
  //   this.httpClient.post<User>('http://localhost:8080/userctrl/login', user).subscribe(
  //     userAPI => {
  //       this.user=userAPI;
  //       //console.log("this.user" + this.user);
  //       console.log("this.user " + this.user);
  //       console.log("this.user " + this.user.username);
  //       console.log("this.user : " + this.user.role);
  //       console.log("this.token " + this.user.token);
  //       this.router.navigate(['googlebooks'])
  //     },
  //     (error: any) =>  {  
  //       console.log("error"); 
  //       this.user = null; 
  //       this.router.navigate(['login']); 
  //     },
  //     () => {
        
       
  //     }
  //   )
  // }


  attemptAuth(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    console.log('attempAuth ::');
    return this.httpClient.post('http://localhost:8080/userctrl/login', credentials);
  }

   // La liste observable que l'on rend visible partout dans l'application
   availableRole$: BehaviorSubject<Role> = new BehaviorSubject(this.availableRole);
 



  public getRole(): Observable<Role> {
    return this.httpClient.get<Role>('http://localhost:8080/userctrl/role/' + this.username);
  }


  public publishRole() {
    this.getRole().subscribe(
      role => {
        this.availableRole = role;
        this.availableRole$.next(this.availableRole);        
      });
  }

}


