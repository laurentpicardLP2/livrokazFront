import { AuthorService } from '../services/author.service';
import { Author } from './../models/author.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {

  newAuthor: Author;

  constructor(private authorService: AuthorService,
              private router: Router) { }

  ngOnInit() {
    this.newAuthor = new Author('');
  }

  onAddAuthor(){
    this.authorService.createAuthor(this.newAuthor);
    this.router.navigate(['authors/']);
  }

}
