import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../models/author.model';
import { AuthorService } from '../services/author.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-by-book',
  templateUrl: './author-by-book.component.html',
  styleUrls: ['./author-by-book.component.css']
})

export class AuthorByBookComponent implements OnInit {

  /**
   * @Input permet de recevoir les données d'un component Parent
   * Ici le component parent est le google-book-detail
   */
  @Input() authorName: string;
  @Input() index: number;
  @Input() id: number;
  
  
  googleBookId: number;
  authors: Author[];

  constructor(private route: ActivatedRoute,
    private authorService: AuthorService,
    private router: Router) { }

  ngOnInit() {
<<<<<<< HEAD
    
     //console.log("*************AuthorByBookComponent************" + this.authorName);


=======
        
>>>>>>> a0e3b397ef9775402d0600f662d8e83758b41b32
}
}

