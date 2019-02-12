import { Injectable } from '@angular/core';
import {  Author } from './models/author.model';
import { GoogleBook } from './models/google-book.model';
import { Gendle } from './models/gendle.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatamockService {


  constructor(private httpClient: HttpClient) { 

  }

    // La liste des authors de l'application
    private availableAuthors: Author [] ;

    //la liste des Genres de l'application
    private availableGendles: Gendle[];

    // La liste observable que l'on rend visible partout dans l'application
    
availableAuthors$: BehaviorSubject<Author[]> = new BehaviorSubject(this.availableAuthors);
availableGendle$: BehaviorSubject<Gendle[]> = new BehaviorSubject(this.availableGendles);
    /**
   * La fonction getAuthors() est privée car elle n'a besoin d'être appellée que dans le service.
   */
  private getAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>('http://localhost:8080/livrokaz/authors');
  }
  
  private getGendles(): Observable<Gendle[]>{
    return this.httpClient.get<Gendle[]>('http://localhost:8080/livrokaz/gendles');
  }

  /**
   * La fonction publishAuthors() est chargée une fois au démarrage de l'application.
   * Elle récupère la liste des timelines depuis la base de données et met à jour la liste et la liste observable.
   */
  public publishAuthors() {
    this.getAuthors().subscribe(
      authorList => {
        this.availableAuthors = authorList;
        this.availableAuthors$.next(this.availableAuthors);
      });
  }

  public publishGendles(){
    this.getGendles().subscribe(
      gendleList => {
        this.availableGendles = gendleList;
        this.availableGendle$.next(this.availableGendles);
      }
    )
  }

  /**
   * Cette fonction permet de trouver un auteur dans la liste des auteurs chargés par l'application
   * grâce à son ID.
   * @param authorId l'id qu'il faut rechercher dans la liste. 
   */
  public findAuthor(authorId: number): Observable<Author> {
    if (authorId) {
      if (!this.availableAuthors) {
        return this.getAuthors().pipe(map(authors => authors.find(authors => authors.authorId === authorId)));
      }
      return of(this.availableAuthors.find(author => author.authorId === authorId));
    } else {
      return of(new Author(''));
    }
  }


   /**
   * Fonction de création d'un nouvel auteur.
   * Elle met à jour notre liste des authors et notre liste observable.
   * @param newAuthor le nouvel auteur à créer
   */
  public createAuthor(newAuthor: Author) {
    this.httpClient.post<Author>('http://localhost:8080/livrokaz/addauthor', newAuthor).subscribe(
      newAuthor => {
        this.availableAuthors.push(newAuthor);
        this.availableAuthors$.next(this.availableAuthors);
      }
    )
  }

  /**
   * Fonction de mise à jour d'un auteur
   * @param auteur l'auteur à mettre à jour
   */
  public updateAuthor(author: Author) {
    this.httpClient.put<Author>('http://localhost:8080/livrokaz/updateauthor', author).subscribe(
      availableAuthors => {
        this.availableAuthors$.next(this.availableAuthors);
      }
    )
  }

  /**
   * Fonction de suppression d'un auteur
   * @param auteur l'auteur à supprimer
   */
  public deleteAuthor(author: Author, indexDelete: number) {
    this.httpClient.put<Author>('http://localhost:8080/livrokaz/delauthor', author).subscribe(
      availableAuthors => {
        this.availableAuthors.splice(indexDelete, 1);
        this.availableAuthors$.next(this.availableAuthors);

      }
    )
  }



  // La liste des googleBooks de l'application
  private availableGoogleBooks: GoogleBook [] ;

    // La liste observable que l'on rend visible partout dans l'application
    availableGoogleBooks$: BehaviorSubject<GoogleBook[]> = new BehaviorSubject(this.availableGoogleBooks);

  /**
   * La fonction getGoogleBooks() est privée car elle n'a besoin d'être appellée que dans le service.
   */
  private getGoogleBooks(): Observable<GoogleBook[]> {
    return this.httpClient.get<GoogleBook[]>('http://localhost:8080/livrokaz/books');
  }

  /** La fonction publishGoogleBooks() est chargée une fois au démarrage de l'application.
  * Elle récupère la liste des timelines depuis la base de données et met à jour la liste et la liste observable.
  */
 public publishGoogleBooks() {
   this.getGoogleBooks().subscribe(
     googleBookList => {
       this.availableGoogleBooks = googleBookList;
       this.availableGoogleBooks$.next(this.availableGoogleBooks);
     });
 }


 /**
   * Cette fonction permet de trouver un livre dans la liste des auteurs chargés par l'application
   * grâce à son ID.
   * @param bookId l'id qu'il faut rechercher dans la liste. 
   */
  public findGoogleBook(bookId: number): Observable<GoogleBook> {
    if (bookId) {
      if (!this.availableGoogleBooks) {
        return this.getGoogleBooks().pipe(map(googleBook => googleBook.find(googleBook => googleBook.bookId === bookId)));
      }
      return of(this.availableGoogleBooks.find(googleBook => googleBook.bookId === bookId));
    } else {
      return of(null);
    }
  }


}
