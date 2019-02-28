import { Component, OnInit } from '@angular/core';
import { AuthorService } from './services/author.service';
import { GendleService } from './services/gendle.service';
import { GoogleBookService } from './services/google-book.service';
import { LoginService } from './services/login.service';
import { BehaviorSubject , Observable} from 'rxjs';
import { Role } from './models/role.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'livrokaz';
  public role: BehaviorSubject<Role>
  public availableRole: Role;
  public typeRole: string = "ROLE_ANONYMOUS";

  constructor(
      private dataAuthorService: AuthorService,
      private dataGendleService: GendleService,
      private dataGoogleBookService: GoogleBookService,
      private gendleService: GendleService,
      private loginService: LoginService,
      private httpClient: HttpClient
    ) {}

  ngOnInit() {
    
    this.typeRole = this.loginService.typeRole;
    //this.typeRole =  this.loginService.availableRole$.value.role;
    //  this.dataAuthorService.publishAuthors();
    //  this.dataGendleService.publishGendles();
    //  this.dataGoogleBookService.publishGoogleBooks();
  }


}
