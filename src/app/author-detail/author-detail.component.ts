import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorService } from '../services/author.service';
import { Author } from './../models/author.model';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})

export class AuthorDetailComponent implements OnInit {

  idAuthorToUpdate: number;
  editedAuthor: Author;

  constructor(private route: ActivatedRoute,
              private authorService: AuthorService,
              private router: Router) { }

  ngOnInit() {

    /**
     * On récupère l'id de l'auteur que l'on souhaite visualiser
     */
    this.idAuthorToUpdate = +this.route.snapshot.params.idAuthorToUpdate;
    
    /**
     * Affiche la fiche de l'auteur selon son Id, passé en paramètre, 
     * récupéré via la ligne ci-dessus 
     */
    this.authorService.findAuthor(this.idAuthorToUpdate).subscribe(author => {
      this.editedAuthor = author;
    });

  }

  /**
   * Permet de modifier les attributs d'un auteur
   */
  
  onSave() {
    this.authorService.updateAuthor(this.editedAuthor);
    this.router.navigate(['authors']);
  }


}
