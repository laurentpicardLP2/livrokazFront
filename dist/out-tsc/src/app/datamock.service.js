import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Author } from './models/author.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
var DatamockService = /** @class */ (function () {
    function DatamockService(httpClient) {
        this.httpClient = httpClient;
        // La liste observable que l'on rend visible partout dans l'application
        this.availableAuthors$ = new BehaviorSubject(this.availableAuthors);
        // La liste observable que l'on rend visible partout dans l'application
        this.availableGoogleBooks$ = new BehaviorSubject(this.availableGoogleBooks);
    }
    /**
   * La fonction getAuthors() est privée car elle n'a besoin d'être appellée que dans le service.
   */
    DatamockService.prototype.getAuthors = function () {
        return this.httpClient.get('http://localhost:8080/livrokaz/authors');
    };
    /**
     * La fonction publishAuthors() est chargée une fois au démarrage de l'application.
     * Elle récupère la liste des timelines depuis la base de données et met à jour la liste et la liste observable.
     */
    DatamockService.prototype.publishAuthors = function () {
        var _this = this;
        this.getAuthors().subscribe(function (authorList) {
            _this.availableAuthors = authorList;
            _this.availableAuthors$.next(_this.availableAuthors);
        });
    };
    /**
     * Cette fonction permet de trouver un auteur dans la liste des auteurs chargés par l'application
     * grâce à son ID.
     * @param authorId l'id qu'il faut rechercher dans la liste.
     */
    DatamockService.prototype.findAuthor = function (authorId) {
        if (authorId) {
            if (!this.availableAuthors) {
                return this.getAuthors().pipe(map(function (authors) { return authors.find(function (authors) { return authors.authorId === authorId; }); }));
            }
            return of(this.availableAuthors.find(function (author) { return author.authorId === authorId; }));
        }
        else {
            return of(new Author(''));
        }
    };
    /**
    * Fonction de création d'un nouvel auteur.
    * Elle met à jour notre liste des authors et notre liste observable.
    * @param newAuthor le nouvel auteur à créer
    */
    DatamockService.prototype.createAuthor = function (newAuthor) {
        var _this = this;
        this.httpClient.post('http://localhost:8080/livrokaz/addauthor', newAuthor).subscribe(function (newAuthor) {
            _this.availableAuthors.push(newAuthor);
            _this.availableAuthors$.next(_this.availableAuthors);
        });
    };
    /**
     * Fonction de mise à jour d'un auteur
     * @param auteur l'auteur à mettre à jour
     */
    DatamockService.prototype.updateAuthor = function (author) {
        var _this = this;
        this.httpClient.put('http://localhost:8080/livrokaz/updateauthor', author).subscribe(function (availableAuthors) {
            _this.availableAuthors$.next(_this.availableAuthors);
        });
    };
    /**
     * Fonction de suppression d'un auteur
     * @param auteur l'auteur à supprimer
     */
    DatamockService.prototype.deleteAuthor = function (author, indexDelete) {
        var _this = this;
        this.httpClient.put('http://localhost:8080/livrokaz/delauthor', author).subscribe(function (availableAuthors) {
            _this.availableAuthors.splice(indexDelete, 1);
            _this.availableAuthors$.next(_this.availableAuthors);
        });
    };
    /**
     * La fonction getGoogleBooks() est privée car elle n'a besoin d'être appellée que dans le service.
     */
    DatamockService.prototype.getGoogleBooks = function () {
        return this.httpClient.get('http://localhost:8080/livrokaz/books');
    };
    /** La fonction publishGoogleBooks() est chargée une fois au démarrage de l'application.
    * Elle récupère la liste des timelines depuis la base de données et met à jour la liste et la liste observable.
    */
    DatamockService.prototype.publishGoogleBooks = function () {
        var _this = this;
        this.getGoogleBooks().subscribe(function (googleBookList) {
            _this.availableGoogleBooks = googleBookList;
            _this.availableGoogleBooks$.next(_this.availableGoogleBooks);
        });
    };
    DatamockService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DatamockService);
    return DatamockService;
}());
export { DatamockService };
//# sourceMappingURL=datamock.service.js.map