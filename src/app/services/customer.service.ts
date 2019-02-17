import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  users: Customer [] = [];

  // La variable isNaneTaken indique si un username est déjà pris 
  private isNameTaken: boolean ;

  // La variable isNaneTaken observable que l'on rend visible partout dans l'application
  isNameTaken$: BehaviorSubject<boolean> = new BehaviorSubject(this.isNameTaken);

  constructor(private httpClient: HttpClient) { 

  }

  
   /**
   * Fonction de création d'un nouveau customer.
   * Elle met à jour notre liste des customers et notre liste observable.
   * @param newCustomer le nouveau customer à créer
   */
  public createCustomer(newCustomer: Customer) {
    this.httpClient.post<Customer>('http://localhost:8080/userctrl/newcustomer', newCustomer).subscribe(
      ()=> console.log("ok"), 
      (error) => console.log("ko")
    );
  }

  

  /**
   * Fonction vérifiant que l'username n'est pas déjà pris par un autre customer
   * @param username , le username dont l'unicité est à vérifier 
   */
 public checkIsNameTaken(username: string) : Observable<boolean> {
  return this.httpClient.post<boolean>('http://localhost:8080/userctrl/checkUsernameNotTaken', username);
  }

}
