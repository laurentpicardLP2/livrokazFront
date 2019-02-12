import { LivrokazListComponent } from './livrokaz-list/livrokaz-list.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorNewComponent } from './author-new/author-new.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: 'list', component: LivrokazListComponent },
  { path: 'authors', component: AuthorsListComponent },
  { path: 'author-new', component: AuthorNewComponent },
  { path: 'author-detail/:idAuthorToUpdate', component: AuthorDetailComponent }
 // { path: '', redirectTo: 'authors', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
