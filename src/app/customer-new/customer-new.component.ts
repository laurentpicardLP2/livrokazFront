import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { CustomerService } from '../services/customer.service';
import { Customer } from './../models/customer.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {MyErrorStateMatcher} from '../services/my-error-state-matcher.service';
import { CustomValidators, ConfirmValidParentMatcher, regExps,  errorMessages} from '../services/custom-validators.service';
import { HttpClient } from '@angular/common/http';
import { routerNgProbeToken } from '@angular/router/src/router_module';



@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})



export class CustomerNewComponent implements OnInit {
  newCustomer: Customer;
  userRegistrationForm: FormGroup;
  confirmValidParentMatcher = new ConfirmValidParentMatcher();
  errors = errorMessages;
  fullName: string; 
  username: string;
  email: string;
  password: string;
  checkedAdrCopy: boolean;
  domesticAddress: string;
  domesticCp: string;
  domesticCity: string;
  domesticCountry: string;
  deliveryAddress: string;
  deliveryCp: string;
  deliveryCity: string;
  deliveryCountry: string;
  telephone: string;
  dateOfBirth: Date;
 

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private httpClient: HttpClient
) {
    this.createForm();
}


  ngOnInit() {
    this.customerService.publishAuthorities();
    this.checkedAdrCopy = false;
  }

  createForm() {
      this.userRegistrationForm = this.formBuilder.group({
          fullName: ['', [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(128)
          ]],
          usernameGroup: this.formBuilder.group({
          username: ['', [
            Validators.required
          ]]
        }, {validator: this.checkUsername.bind(this)}),
          emailGroup: this.formBuilder.group({
              email: ['', [
                  Validators.required,
                  Validators.email
              ]],
              confirmEmail: ['', Validators.required]
          }, { validator: CustomValidators.childrenEqual}),
          passwordGroup: this.formBuilder.group({
              password: ['', [
                  Validators.required,
                  Validators.pattern(regExps.password)
              ]],
              confirmPassword: ['', Validators.required]
          }, { validator: CustomValidators.childrenEqual}),
        domesticAddress: ['', [
            Validators.required
        ]],
        domesticCity: ['', [
            Validators.required
        ]],
        domesticCp: ['', [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(5)
        ]],
        domesticCountry: ['', [
            Validators.required
        ]],
        checkedAdr: [true],
        deliveryAddress: ['', [
            Validators.required
        ]],
        deliveryCity: ['', [
            Validators.required
        ]],
        deliveryCp: ['', [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(5)
        ]],
        deliveryCountry: ['', [
            Validators.required
        ]],
        telephone: ['', [
            Validators.required
        ]],
        dateOfBirth: ['', [
            Validators.required
        ]]
      });
  }

  onCopyAdr(){
      if(!this.checkedAdrCopy){
        console.log("checkedAdrCopy : ", !this.checkedAdrCopy);
        this.deliveryAddress = this.domesticAddress;
        this.deliveryCp = this.domesticCp;
        this.deliveryCity = this.domesticCity;
        this.deliveryCountry = this.domesticCountry;
      }
      else {
        this.deliveryAddress="";
        this.deliveryCp = "";
        this.deliveryCity = "";
        this.deliveryCountry = "";
      }
      
  }

  register(): void {
      // API call to register your user
      console.log("this.fullName : ", this.fullName);
      console.log("this.username : ", this.username);
      console.log("this.email : ", this.email);
      console.log("this.password : ", this.password);
      console.log("this.addressDomesctic : ", this.domesticAddress);
      console.log("this.cpDomestic : ", this.domesticCp);
      console.log("this.cityDomestic : ", this.domesticCity);
      console.log("this.countryDomestic : ", this.domesticCountry);
      console.log("this.addressDelivery : ", this.deliveryAddress);
      console.log("this.cpDelivery : ", this.deliveryCp);
      console.log("this.cityDelivery : ", this.deliveryCity);
      console.log("this.countryDelivery : ", this.deliveryCountry);
      console.log("this.telephone : ", this.telephone);
      console.log("this.dateOfBirth : ", this.dateOfBirth);
      this.newCustomer = new Customer(
                this.fullName, 
                this.username, 
                this.email, 
                this.password, 
                this.domesticAddress,
                this.domesticCp,
                this.domesticCity,
                this.domesticCountry,
                this.deliveryAddress,
                this.deliveryCp,
                this.deliveryCity,
                this.deliveryCountry,
                this.telephone,
                this.dateOfBirth);

      this.httpClient.post<Customer>('http://localhost:8080/userctrl/newcustomer', this.newCustomer).subscribe(
          (newUsers) =>{ console.log("création user OK : ", newUsers); this.router.navigate(['']);},
          (error) => console.log("création user pb : ", error) 
      );
 }

  checkUsername(group: FormGroup){
    let username : string;
    for(let a in group.controls) {
      username = group.get([a]).value;
    }
    //console.log("checkUsername", this.customerService.authoritaries.find(authoritary => authoritary.username === username) != undefined);
    const isValid = !(this.customerService.authoritaries.find(authoritary => authoritary.username === username))
    return isValid ? null : { checkUsername: true };
  }



  // newCustomer: Customer;
  // myForm: FormGroup; form et groupe
  // l: string = 'l';


  

  // matcher = new MyErrorStateMatcher();

  // constructor(private customerService: CustomerService,
  //             private router: Router) { }


  // ngOnInit() {
    
  //   this.myForm = new FormGroup({
  //     'firstNameFormControl': new FormControl(null, [Validators.required]),
  //     'emailFormControl': new FormControl(null, [Validators.required, Validators.email]),
  //     'confirmEmailFormControl': new FormControl(null, [Validators.required, Validators.email])
  //     // the rest of inputs with the same approach
  //   });

  //   this.newCustomer = new Customer('', '', '', '', '', '', '', '', '', 0, '', '', '', '', 0, '', '', 0, 0, 0);
  //   this.newCustomer = new Customer('JulesFerry3', 'azerty', 'M.', 'vincent', 'tit', 'vic@lp.fr', '06.09.98.23.32', '2b', 'rue', 93100, 'Montrouge', 'France', '2b', 'rue', 93100, 'Montreuil', 'France', 1986, 2, 19);
  // }

  // checkIdenticalEmail(){
  //   return 1;
  // }

  // // public createOwner = (ownerFormValue) => {
  // //   if (this.ownerForm.valid) {
  // //     this.executeOwnerCreation(ownerFormValue);
  // //   }
  // // }

  

  // /**
  //  * Permet de créer un nouvau customer
  //  */
  // onSubmit() {
  //   console.log("submit ");
  // // this.customerService.createCustomer(this.newCustomer);
   
  // }

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }

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
