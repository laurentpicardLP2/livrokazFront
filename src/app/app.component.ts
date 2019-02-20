import { Component, OnInit } from '@angular/core';
import { AuthorService } from './services/author.service';
import { GendleService } from './services/gendle.service';
import { GoogleBookService } from './services/google-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'livrokaz';
  isAuthAdmin: boolean;

  constructor(
      private dataAuthorService: AuthorService,
      private dataGendleService: GendleService,
      private dataGoogleBookService: GoogleBookService
    ) {}

  ngOnInit() {
    this.isAuthAdmin=true;
    //  this.dataAuthorService.publishAuthors();
    //  this.dataGendleService.publishGendles();
    //  this.dataGoogleBookService.publishGoogleBooks();
  }
}
