import { Component, OnInit } from '@angular/core';
import { GoogleBook } from '../models/google-book.model';
import { DatamockService } from '../datamock.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-google-book-list',
  templateUrl: './google-book-list.component.html',
  styleUrls: ['./google-book-list.component.css']
})
export class GoogleBookListComponent implements OnInit {

  googleBooksList: BehaviorSubject<GoogleBook[]>;

  constructor(private route: ActivatedRoute,
    private datamockService: DatamockService,
    private router: Router) { }

  ngOnInit() {
    this.googleBooksList  = this.datamockService.availableGoogleBooks$
  }

  onShow(googleBookId: number) {

    this.router.navigate(['googlebooks-detail/' + googleBookId]);

  }

}



