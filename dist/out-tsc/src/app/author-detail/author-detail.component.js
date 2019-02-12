import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatamockService } from './../datamock.service';
var AuthorDetailComponent = /** @class */ (function () {
    function AuthorDetailComponent(route, datamockService, router) {
        this.route = route;
        this.datamockService = datamockService;
        this.router = router;
    }
    AuthorDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idAuthorToUpdate = +this.route.snapshot.params.idAuthorToUpdate;
        this.datamockService.findAuthor(this.idAuthorToUpdate).subscribe(function (author) {
            _this.editedAuthor = author;
        });
    };
    AuthorDetailComponent.prototype.onSave = function () {
        this.datamockService.updateAuthor(this.editedAuthor);
        this.router.navigate(['authors']);
    };
    AuthorDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-author-detail',
            templateUrl: './author-detail.component.html',
            styleUrls: ['./author-detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            DatamockService,
            Router])
    ], AuthorDetailComponent);
    return AuthorDetailComponent;
}());
export { AuthorDetailComponent };
//# sourceMappingURL=author-detail.component.js.map