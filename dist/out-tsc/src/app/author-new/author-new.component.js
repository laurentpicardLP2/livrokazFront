import * as tslib_1 from "tslib";
import { DatamockService } from './../datamock.service';
import { Author } from '../models/author.model';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
var AuthorNewComponent = /** @class */ (function () {
    function AuthorNewComponent(route, datamockService, router) {
        this.route = route;
        this.datamockService = datamockService;
        this.router = router;
    }
    AuthorNewComponent.prototype.ngOnInit = function () {
        this.prenom = "laurent";
        this.newAuthor = new Author('');
    };
    AuthorNewComponent.prototype.onAddAuthor = function () {
        this.datamockService.createAuthor(this.newAuthor);
        this.router.navigate(['authors/']);
    };
    AuthorNewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-author-new',
            templateUrl: './author-new.component.html',
            styleUrls: ['./author-new.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            DatamockService,
            Router])
    ], AuthorNewComponent);
    return AuthorNewComponent;
}());
export { AuthorNewComponent };
//# sourceMappingURL=author-new.component.js.map