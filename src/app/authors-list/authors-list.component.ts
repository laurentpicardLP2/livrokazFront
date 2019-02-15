import { Component, OnInit } from '@angular/core';
import { Author} from '../models/author.model';
import { AuthorService } from '../services/author.service';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
/**
 * Component permettant d'afficher la liste de tous les auteurs
 */

export class AuthorsListComponent implements OnInit {

  authorsList: BehaviorSubject<Author[]>;

  constructor(private route: ActivatedRoute,
              private authorService: AuthorService,
              private router: Router) { }


  ngOnInit() {
    this.authorsList  = this.authorService.availableAuthors$
  }

  onUpdate(idAuthorToUpdate: number) {
    this.router.navigate(['author-detail/' + idAuthorToUpdate]);
  }

  onDelete(idAuthorToDelete: number, indexDelete: number){

    this.authorService.findAuthor(idAuthorToDelete).subscribe(author => {
      this.authorService.deleteAuthor(author, indexDelete);
    });
  }

}
