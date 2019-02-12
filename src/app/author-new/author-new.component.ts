import { DatamockService } from './../datamock.service';
import { Author } from './../models/auhtor.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {

  newAuthor: Author;
  prenom: string;

  constructor(private route: ActivatedRoute,
    private datamockService: DatamockService,
    private router: Router) { }

  ngOnInit() {
    this.prenom = "laurent";
    this.newAuthor = new Author('');
  }

  onAddAuthor(){
    this.datamockService.createAuthor(this.newAuthor);
    this.router.navigate(['authors/']);
  }

}
