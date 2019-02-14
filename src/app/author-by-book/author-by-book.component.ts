import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../models/author.model';
import { AuthorService } from '../services/author.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-author-by-book',
  templateUrl: './author-by-book.component.html',
  styleUrls: ['./author-by-book.component.css']
})
export class AuthorByBookComponent implements OnInit {

  @Input() authorName: string;
  @Input() index: number;
  @Input() id: number;
  
  
  googleBookId: number;
  authors: Author[];

  constructor(private route: ActivatedRoute,
    private authorService: AuthorService,
    private router: Router) { }

  ngOnInit() {
    
     console.log("*************AuthorByBookComponent************" + this.authorName);


}
}

