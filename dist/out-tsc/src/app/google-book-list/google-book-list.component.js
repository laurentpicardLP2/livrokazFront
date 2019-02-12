import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DatamockService } from '../datamock.service';
import { Router, ActivatedRoute } from '@angular/router';
var GoogleBookListComponent = /** @class */ (function () {
    function GoogleBookListComponent(route, datamockService, router) {
        this.route = route;
        this.datamockService = datamockService;
        this.router = router;
    }
    GoogleBookListComponent.prototype.ngOnInit = function () {
        this.googleBooksList = this.datamockService.availableGoogleBooks$;
    };
    GoogleBookListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-google-book-list',
            templateUrl: './google-book-list.component.html',
            styleUrls: ['./google-book-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            DatamockService,
            Router])
    ], GoogleBookListComponent);
    return GoogleBookListComponent;
}());
export { GoogleBookListComponent };
//# sourceMappingURL=google-book-list.component.js.map