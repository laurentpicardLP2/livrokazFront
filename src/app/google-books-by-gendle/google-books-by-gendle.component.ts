import { Component, OnInit } from '@angular/core';
import { GoogleBook } from '../models/google-book.model';
import { GoogleBookService } from '../services/google-book.service';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-google-books-by-gendle',
  templateUrl: './google-books-by-gendle.component.html',
  styleUrls: ['./google-books-by-gendle.component.css']
})
export class GoogleBooksByGendleComponent implements OnInit {

  googleBooksList: BehaviorSubject<GoogleBook[]>;
  gendleId: number; //affichage des livres correspondant au GendleId dont on récupère la valeur passée en argument

  constructor(private route: ActivatedRoute,
    private googleBookService: GoogleBookService,
    private router: Router) { }


  ngOnInit() {
    this.gendleId = +this.route.snapshot.params.gendleId;
    this.googleBookService.publishGoogleBooksByGendle(this.gendleId);
    this.googleBooksList  = this.googleBookService.availableGoogleBooksByGendle$
  }

  onShow(googleBookId: number) {

    this.router.navigate(['googlebooks-detail/' + googleBookId]);
    
  }

}
