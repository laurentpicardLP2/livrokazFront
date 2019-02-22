import { LoginService } from './../services/login.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleBook } from '../models/google-book.model';
import { GoogleBookService } from '../services/google-book.service';
import { GendleService } from '../services/gendle.service';
import { AuthorService } from '../services/author.service';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, PageEvent, MatSort } from '@angular/material'
import { MatPaginatorModule } from '@angular/material/paginator'
import { Role } from '../models/role.model';

@Component({
  selector: 'app-google-book-list',
  templateUrl: './google-book-list.component.html',
  styleUrls: ['./google-book-list.component.css']
})

export class GoogleBookListComponent implements OnInit {
 googleBooksList: BehaviorSubject<GoogleBook[]>;
MyDataSource: any;
displayedColumns: string[] = ['Id', 'Titre', 'Prix', 'Couverture'];
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

public role: BehaviorSubject<Role>
  public typeRole: string;

constructor(private route: ActivatedRoute, 
            public googleBookService: GoogleBookService, 
            private gendleService: GendleService, 
            private authorService: AuthorService,
            private loginService: LoginService,
            private router: Router) {

}

ngOnInit() {
this.authorService.publishAuthors();
this.googleBookService.publishGoogleBooks();
this.gendleService.publishGendles();
this.googleBooksList = this.googleBookService.availableGoogleBooks$;
this.publishRole();
this.RenderDataTable();
}
RenderDataTable() {
this.googleBookService.getGoogleBooks().subscribe(
res => {
this.MyDataSource = new MatTableDataSource();
this.MyDataSource.data = res;
this.MyDataSource.sort = this.sort;
this.MyDataSource.paginator = this.paginator;
console.log(this.MyDataSource.data);
},
error => {
console.log('There was an error !' + error);
});
}
onShow(googleBookId: number) {
this.router.navigate(['googlebooks-detail/' + googleBookId]);
}


public publishRole() {
  this.loginService.getRole().subscribe(
    role => {
      this.typeRole = role.role;   
    });
}


}