import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatamockService } from './../datamock.service';
import { GoogleBook } from '../models/google-book.model';

@Component({
  selector: 'app-google-book-detail',
  templateUrl: './google-book-detail.component.html',
  styleUrls: ['./google-book-detail.component.css']
})
export class GoogleBookDetailComponent implements OnInit {
  idGooglebooks: number;
  editedGooglebook: GoogleBook;
  
  constructor(private route: ActivatedRoute,
    private datamockService: DatamockService,
    private router: Router) { }

ngOnInit() {
this.idGooglebooks = +this.route.snapshot.params.idGooglebooks;
console.log(this.idGooglebooks);


this.datamockService.findGoogleBook(this.idGooglebooks).subscribe(GoogleBook => {
this.editedGooglebook = GoogleBook;
});

}

}
