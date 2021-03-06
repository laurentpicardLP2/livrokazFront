import { Injectable } from '@angular/core';
import { Author } from '../models/author.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private httpClient: HttpClient, private token: TokenStorageService) { 

  }

  // La liste des authors de l'application
  private availableAuthors: Author [] ;
  private availableAuthorByBook: Author[];

  // La liste observable que l'on rend visible partout dans l'application
  availableAuthors$: BehaviorSubject<Author[]> = new BehaviorSubject(this.availableAuthors);
  availableAuthorByBook$:BehaviorSubject<Author[]> = new BehaviorSubject(this.availableAuthorByBook);
  /**
   * La fonction getAuthors() est privée car elle n'a besoin d'être appellée que dans le service.
   */
  private getAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>('http://localhost:8080/livrokaz/authors',
    {
      headers: {
          "Content-Type": "application/octet-stream",
          "Authorization": this.token.getToken()
      }
  } );
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

  private getAuthorByBook(googleBookId: number): Observable<Author[]>{
    return this.httpClient.get<Author[]>('http://localhost:8080/livrokaz/authors/' + googleBookId,
    {
       headers: {
          "Content-Type": "application/octet-stream",
          "Authorization": this.token.getToken()
      }
  }
  );
  }

  /** La fonction publishGoogleBooks() est chargée une fois au démarrage de l'application.
  * Elle récupère la liste des timelines depuis la base de données et met à jour la liste et la liste observable.
  */
 public publishAuthorsByBook(googleBookId: number) {
  this.getAuthorByBook(googleBookId).subscribe(
    authorList => {
      this.availableAuthorByBook = authorList;
      this.availableAuthorByBook$.next(this.availableAuthorByBook);
    });
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
}
