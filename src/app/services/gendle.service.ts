import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { Gendle } from '../models/gendle.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GendleService {

  constructor(private httpClient: HttpClient, private token: TokenStorageService, private router: Router, private loginService: LoginService) {  }

    //la liste des Genres de l'application
    private availableGendles: Gendle[];

  // La liste observable que l'on rend visible partout dans l'application
  availableGendle$: BehaviorSubject<Gendle[]> = new BehaviorSubject(this.availableGendles);
  
  /**
   * La fonction getGendles() est privée car elle n'a besoin d'être appellée que dans le service.
   */
   public getGendles(): Observable<Gendle[]>{
    return this.httpClient.get<Gendle[]>('http://localhost:8080/livrokaz/gendles',
    {
      headers: {
          "Content-Type": "application/json",
          "Authorization": this.token.getToken()
      }
  });
  }

  /**
   * La fonction publishGendles() est chargée une fois au démarrage de l'application.
   * Elle récupère la liste des timelines depuis la base de données et met à jour la liste et la liste observable.
   */

  public publishGendles(){
    this.getGendles().subscribe(
      gendleList => {
        this.availableGendles = gendleList;
        this.availableGendle$.next(this.availableGendles);
      }
    )
  }

   /**
   * Fonction de création d'un nouveau genre.
   * Elle met à jour notre liste des authors et notre liste observable.
   * @param newGendle le nouvel auteur à créer
   */
  public createGendle(newGendle: Gendle) {
    console.log("newGendle", newGendle.typeGendle)
    this.httpClient.post<Gendle>('http://localhost:8080/livrokaz/newgendle', newGendle,
    {
      headers: {
         "Content-Type": "application/json",
         "Authorization": this.token.getToken()
     }
 }).subscribe(
      newGendle => {
        console.log("newGendle", newGendle);
        this.availableGendles.push(newGendle);
        this.availableGendle$.next(this.availableGendles);
      }
    )
    
  } 
}

/*('http://localhost:8080/livrokaz/newgendle',
    {
      headers: {
          "Content-Type": "application/octet-stream",
          "Authorization": this.token.getToken()
      },
      body { newgendle }
  })
  */