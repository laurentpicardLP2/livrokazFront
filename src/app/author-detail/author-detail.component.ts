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
    this.idAuthorToUpdate = +this.route.snapshot.params.idAuthorToUpdate;
    

    this.authorService.findAuthor(this.idAuthorToUpdate).subscribe(author => {
      this.editedAuthor = author;
    });

  }

  onSave() {
    this.authorService.updateAuthor(this.editedAuthor);
    this.router.navigate(['authors']);
  }


}
