import { Component, OnInit } from '@angular/core';
import { GoogleBook } from '../models/google-book.model';
import { GoogleBookService } from '../services/google-book.service';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-google-book-list',
  templateUrl: './google-book-list.component.html',
  styleUrls: ['./google-book-list.component.css']
})
export class GoogleBookListComponent implements OnInit {

  googleBooksList: BehaviorSubject<GoogleBook[]>;

  constructor(private route: ActivatedRoute,
    private googleBookService: GoogleBookService,
    private router: Router) { }

  ngOnInit() {
    this.googleBooksList  = this.googleBookService.availableGoogleBooks$
  }

  onShow(googleBookId: number) {

    this.router.navigate(['googlebooks-detail/' + googleBookId]);

  }

  onShow(googleBookId: number) {

    this.router.navigate(['googlebooks-detail/' + googleBookId]);

  }

}



