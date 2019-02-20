import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorageService } from './token-storage.service';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Customer [] = [];

  constructor(private httpClient: HttpClient, private token: TokenStorageService) { 

  }

  // La liste des customers de l'application
  private availableCustomers: Customer[] ;

    // La liste observable que l'on rend visible partout dans l'application
  availableCustomers$: BehaviorSubject<Customer[]> = new BehaviorSubject(this.availableCustomers);
  
  /**
   * La fonction getCustomers() est privée car elle n'a besoin d'être appellée que dans le service.
   */
  private getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:8080/userctrl/users');
  }

  /**
   * La fonction publishCustomers() est chargée une fois au démarrage de l'application.
   * Elle récupère la liste des customers depuis la base de données et met à jour la liste et la liste observable.
   */
  public publishCustomers() {
    this.getCustomers().subscribe(
      customerList => {
        this.availableCustomers = customerList;
        this.availableCustomers$.next(this.availableCustomers);
      });
  }

  /**
   * Cette fonction permet de trouver un user dans la liste des auteurs chargés par l'application
   * grâce à son username.
   * @param username l'username qu'il faut rechercher dans la liste. 
   */
  public findCustomer(username: string): Observable<Customer> {
    if (username) {
      if (!this.availableCustomers) {
        return this.getCustomers().pipe(map(customers => customers.find(customer => customer.username === username)));
      }
      return of(this.availableCustomers.find(customer => customer.username === username));
    // } else {
    //   return of(new Customer('', '', '', '', '', '', '', '', '', 0, '', '', '', '', 0, '', '', 0, 0, 0));
     }
  }

   /**
   * Fonction de création d'un nouveau customer.
   * Elle met à jour notre liste des customers et notre liste observable.
   * @param newCustomer le nouveau customer à créer
   */
  public createCustomer(newCustomer: Customer, authority: string) {
    this.httpClient.post<Customer>('http://localhost:8080/userctrl/newuser/' + authority, newCustomer).subscribe(
      newCustomer => {
        this.users.push(newCustomer);
        this.availableCustomers.push(newCustomer);
        this.availableCustomers$.next(this.availableCustomers);
      }
    )
  }


  /**
   * Fonction de mise à jour d'un auteur
   * @param customer le customer à mettre à jour
   */
  public updateCustomer(customer: Customer) {
    this.httpClient.put<Customer>('http://localhost:8080/livrokaz/updateuser', customer).subscribe(
      availableCustomers => {
        this.availableCustomers$.next(this.availableCustomers);
      }
    )
  }


  /**
   * Fonction de suppression d'un customer
   * @param customer le customer à supprimer
   */
  public deleteCustomer(customer: Customer, indexDelete: number) {
    this.httpClient.put<Customer>('http://localhost:8080/livrokaz/deluser', customer).subscribe(
      availableCustomers => {
        this.availableCustomers.splice(indexDelete, 1);
        this.availableCustomers$.next(this.availableCustomers);

      }
    )
  }


}


