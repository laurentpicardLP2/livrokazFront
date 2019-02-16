import { UserService } from '../services/user.service';
import { Customer } from './../models/customer.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authority } from '../models/authority.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newCustomer: Customer;
  newAuthority: Authority;
  authoritiesList: BehaviorSubject<Authority[]>;

  constructor(private userService: UserService,
              private router: Router) { }


  ngOnInit() {

    this.userService.publishCustomers();
    
    console.log("appel customerList ");

    this.newCustomer = new Customer('', '', '', '', '', '', '', '', '', 0, '', '', '', '', 0, '', '', 0, 0, 0);
    this.newCustomer = new Customer('JulesFerry3', 'azerty', 'M.', 'vincent', 'tit', 'vic@lp.fr', '06.09.98.23.32', '2b', 'rue', 93100, 'Montrouge', 'France', '2b', 'rue', 93100, 'Montreuil', 'France', 1986, 2, 19);
  }


  /**
   * Permet de créer un nouvau customer
   */
  onNewCustomer() {
    this.userService.createCustomer(this.newCustomer, "ROLE_ADMIN");
    //this.userService.createCustomer(this.newCustomer);
  }

}

// public username : string,
//         public password: string,
//         public civility: string,
//         public firstName: string,
//         public lastName: string,
//         public mail: string,
//         public tel: string,
//         public numVoieDomicile: string,
//         public nomVoieDomicile: string,
//         public cpDomicile: number,
//         public cityDomicile: string,
//         public countryDomicile: string,
//         public numVoieLivraison: string,
//         public nomVoieLivraison: string,
//         public cpLivraison: number,
//         public cityLivraison: string,
//         public countryLivraison: string,
//         public yyyy: number,
//         public mm: number,
//         public dd: number,
//         public typeRole: string