import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { Author} from '../models/auhtor.model';
import { DatamockService } from '../datamock.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {

  authorsList: BehaviorSubject<Author[]>;

  constructor(private route: ActivatedRoute,
    private datamockService: DatamockService,
    private router: Router) { }


  ngOnInit() {
    this.authorsList  = this.datamockService.availableAuthors$
  }

  onUpdate(idAuthorToUpdate: number) {
    this.router.navigate(['author-detail/' + idAuthorToUpdate]);
  }

  onDelete(idAuthorToDelete: number){

    this.datamockService.findAuthor(idAuthorToDelete).subscribe(author => {
      this.datamockService.deleteAuthor(author);
      window.location.reload();
    });

    
    
    //this.editedTimeline.cardList.splice(indexDelete,1);
   // this.datamockService.updateTimeline(this.editedTimeline);
    //this.router.navigate(['/timeline/' + this.editedTimeline.id]);
    
  }

}
