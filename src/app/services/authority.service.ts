import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Authority } from '../models/authority.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthorityService {

  constructor(private httpClient: HttpClient, private token: TokenStorageService) { 

  }

  // La liste des authorities de l'application
  private availableAuthorities: Authority [] ;
  
  // La liste observable que l'on rend visible partout dans l'application
  availableAuthorities$: BehaviorSubject<Authority[]> = new BehaviorSubject(this.availableAuthorities);

  /**
   * La fonction getAuthorities() est privée car elle n'a besoin d'être appellée que dans le service.
   */
  private getAuthorities(): Observable<Authority[]> {
    return this.httpClient.get<Authority[]>('http://localhost:8080/userctrl/authorities',
    {
      headers: {
          "Content-Type": "application/octet-stream",
          "Authorization": this.token.getToken()
      }
  } );
  }


  /**
   * La fonction publishAuthorities() est chargée une fois au démarrage de l'application.
   * Elle récupère la liste des customers depuis la base de données et met à jour la liste et la liste observable.
   */
  public publishAuthorities() {
    this.getAuthorities().subscribe(
      authorityList => {
        this.availableAuthorities = authorityList;
        this.availableAuthorities$.next(this.availableAuthorities);
      });
  }



  /**
   * Cette fonction permet de trouver un user dans la liste des auteurs chargés par l'application
   * grâce à son username.
   * @param username l'username qu'il faut rechercher dans la liste. 
   */
  public findAuthority(username: string): Observable<Authority> {
    if (username) {
      if (!this.availableAuthorities) {
        return this.getAuthorities().pipe(map(authorities => authorities.find(authority => authority.username === username)));
      }
      return of(this.availableAuthorities.find(authority => authority.username === username));
    } else {
      return of(new Authority('', ''));
    }
  }

  /**
   * Fonction de création d'un nouveau role attribué à un user.
   * Elle met à jour notre liste des customers et notre liste observable.
   * @param newAuthority le nouvel authority à créer
   */
  public createAuthority(newAuthority: Authority, authority: String) {
    this.httpClient.post<Authority>('http://localhost:8080/userctrl/newauthority/' + authority, newAuthority).subscribe(
      newAuthority => {
        this.availableAuthorities.push(newAuthority);
        this.availableAuthorities$.next(this.availableAuthorities);
      }
    )
  }

  /**
   * Fonction de mise à jour d'un rôle pour un customer
   * @param authority l'authority à mettre à jour
   */
  public updateAuthority(authority: Authority) {
    this.httpClient.put<Authority>('http://localhost:8080/livrokaz/updateauthority', authority).subscribe(
      availableAuthorities => {
        this.availableAuthorities$.next(this.availableAuthorities);
      }
    )
  }

  /**
   * Fonction de suppression d'un customer
   * @param authority l'authority à supprimer
   */
  public deleteAuthority(authority: Authority, indexDelete: number) {
    this.httpClient.put<Authority>('http://localhost:8080/livrokaz/delauthority', authority).subscribe(
      availableAuthorities => {
        this.availableAuthorities.splice(indexDelete, 1);
        this.availableAuthorities$.next(this.availableAuthorities);

      }
    )
  }

}
