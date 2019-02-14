import { TokenStorageService } from './services/token-storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrokazListComponent } from './livrokaz-list/livrokaz-list.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorNewComponent } from './author-new/author-new.component';
import { FormsModule } from '@angular/forms';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { GoogleBookListComponent } from './google-book-list/google-book-list.component';
import { GendleListComponent } from './gendle-list/gendle-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { LoginComponent } from './login/login.component';
import { GoogleBookDetailComponent } from './google-book-detail/google-book-detail.component';
import { AuthorByBookComponent } from './author-by-book/author-by-book.component';

@NgModule({
  declarations: [
    AppComponent,
    LivrokazListComponent,
    AuthorsListComponent,
    AuthorNewComponent,
    AuthorDetailComponent,
    GoogleBookListComponent,
    GendleListComponent,
    LoginComponent,
    GoogleBookDetailComponent,
    AuthorByBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [TokenStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
