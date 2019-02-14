import { Injectable } from '@angular/core';
import { GoogleBook } from '../models/google-book.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleBookService {


  constructor(private httpClient: HttpClient, private token: TokenStorageService ) { }


  // La liste des googleBooks de l'application
  private availableGoogleBooks: GoogleBook [] ;

    // La liste observable que l'on rend visible partout dans l'application
    availableGoogleBooks$: BehaviorSubject<GoogleBook[]> = new BehaviorSubject(this.availableGoogleBooks);


  /**
   * La fonction getGoogleBooks() est privée car elle n'a besoin d'être appellée que dans le service.
   */
  private getGoogleBooks(): Observable<GoogleBook[]> {

    
    return this.httpClient.get<GoogleBook[]>('http://localhost:8080/livrokaz/books',
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
 public publishGoogleBooks() {
   this.getGoogleBooks().subscribe(
     googleBookList => {
       this.availableGoogleBooks = googleBookList;
       this.availableGoogleBooks$.next(this.availableGoogleBooks);
     });
 }


 /**
   * Cette fonction permet de trouver un livre dans la liste des auteurs chargés par l'application
   * grâce à son Iconsole.log()
    D.
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
