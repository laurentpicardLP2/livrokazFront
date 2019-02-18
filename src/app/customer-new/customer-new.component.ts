import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { CustomerService } from '../services/customer.service';
import { Customer } from './../models/customer.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';;
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {MyErrorStateMatcher} from '../services/my-error-state-matcher.service';
import { CustomValidators, ConfirmValidParentMatcher, regExps,  errorMessages} from '../services/custom-validators.service';



@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})



export class CustomerNewComponent implements OnInit {

  userRegistrationForm: FormGroup;
  confirmValidParentMatcher = new ConfirmValidParentMatcher();
  errors = errorMessages;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router
) {
    this.createForm();
}


  ngOnInit() {
    this.customerService.publishAuthorities();
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
          }, { validator: CustomValidators.childrenEqual})
      });
  }

  register(): void {
      // API call to register your user
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
