import { LivrokazListComponent } from './livrokaz-list/livrokaz-list.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorNewComponent } from './author-new/author-new.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleBookListComponent } from './google-book-list/google-book-list.component';
import { GendleListComponent } from './gendle-list/gendle-list.component';
import { LoginComponent } from './login/login.component';
import { GoogleBookDetailComponent } from './google-book-detail/google-book-detail.component';
import { GoogleBooksByGendleComponent } from './google-books-by-gendle/google-books-by-gendle.component';



const routes: Routes = [

  { path: 'list', component: LivrokazListComponent },
  { path: 'googlebooks', component: GoogleBookListComponent },
  { path: 'authors', component: AuthorsListComponent },
  { path: 'author-new', component: AuthorNewComponent },
  { path: 'author-detail/:idAuthorToUpdate', component: AuthorDetailComponent },
 // { path: '', redirectTo: 'authors', pathMatch: 'full'}
  { path: 'gendles', component: GendleListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'googlebooks-detail/:idGooglebooks', component: GoogleBookDetailComponent},
  { path: 'googlebooks-by-gendle/:gendleId', component: GoogleBooksByGendleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
