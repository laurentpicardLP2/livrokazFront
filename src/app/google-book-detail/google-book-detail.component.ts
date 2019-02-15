import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GoogleBookService } from '../services/google-book.service';
import { GoogleBook } from '../models/google-book.model';
import { Author } from '../models/author.model';
import { AuthorService } from '../services/author.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-google-book-detail',
  templateUrl: './google-book-detail.component.html',
  styleUrls: ['./google-book-detail.component.css']
})


export class GoogleBookDetailComponent implements OnInit {
  idGooglebooks: number;
  editedGooglebook: GoogleBook;
  okImg:boolean;
  assetImg: string[];

  authorsList: BehaviorSubject<Author[]>;
  
  constructor(private route: ActivatedRoute,
    private googleBookService: GoogleBookService,
    private router: Router,
    private authorService: AuthorService) { }

ngOnInit() {
 this.idGooglebooks = +this.route.snapshot.params.idGooglebooks;

 this.authorService.publishAuthorsByBook(this.idGooglebooks);

this.authorsList  = this.authorService.availableAuthorByBook$;

this.googleBookService.findGoogleBook(this.idGooglebooks).subscribe(GoogleBook => {
this.editedGooglebook = GoogleBook;

this.assetImg = ["comics", "cooking", "economics", "novels", "thriller"]
    this.okImg = this.ifNoAsset(this.editedGooglebook.categorie);

});

console.log("+++++++++++++++++++++++++++++++++++++++++++++" + this.authorsList.value);

}

onLoad(){
  console.log(this.authorsList.value);
}

ifNoAsset(file: string) {
  return this.assetImg.find(fileApi => fileApi === file).length >0 ;
   
}

}
