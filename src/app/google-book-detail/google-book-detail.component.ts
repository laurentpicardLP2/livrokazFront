import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GoogleBookService } from '../services/google-book.service';
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
    private googleBookService: GoogleBookService,
    private router: Router) { }

ngOnInit() {
this.idGooglebooks = +this.route.snapshot.params.idGooglebooks;
console.log(this.idGooglebooks);


this.googleBookService.findGoogleBook(this.idGooglebooks).subscribe(GoogleBook => {
this.editedGooglebook = GoogleBook;
});

}

}
