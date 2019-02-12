import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DatamockService } from '../datamock.service';
import { Router, ActivatedRoute } from '@angular/router';
var AuthorsListComponent = /** @class */ (function () {
    function AuthorsListComponent(route, datamockService, router) {
        this.route = route;
        this.datamockService = datamockService;
        this.router = router;
    }
    AuthorsListComponent.prototype.ngOnInit = function () {
        this.authorsList = this.datamockService.availableAuthors$;
    };
    AuthorsListComponent.prototype.onUpdate = function (idAuthorToUpdate) {
        this.router.navigate(['author-detail/' + idAuthorToUpdate]);
    };
    AuthorsListComponent.prototype.onDelete = function (idAuthorToDelete, indexDelete) {
        var _this = this;
        this.datamockService.findAuthor(idAuthorToDelete).subscribe(function (author) {
            _this.datamockService.deleteAuthor(author, indexDelete);
        });
    };
    AuthorsListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-authors-list',
            templateUrl: './authors-list.component.html',
            styleUrls: ['./authors-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            DatamockService,
            Router])
    ], AuthorsListComponent);
    return AuthorsListComponent;
}());
export { AuthorsListComponent };
//# sourceMappingURL=authors-list.component.js.map