import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatamockService } from './../datamock.service';
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
              private datamockService: DatamockService,
              private router: Router) { }

  ngOnInit() {
    this.idAuthorToUpdate = +this.route.snapshot.params.idAuthorToUpdate;
    

    this.datamockService.findAuthor(this.idAuthorToUpdate).subscribe(author => {
      this.editedAuthor = author;
    });

  }

  onSave() {
    this.datamockService.updateAuthor(this.editedAuthor);
    this.router.navigate(['authors']);
  }


}
