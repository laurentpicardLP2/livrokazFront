import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatamockService } from '../datamock.service';
var GendleListComponent = /** @class */ (function () {
    function GendleListComponent(route, datamockService, router) {
        this.route = route;
        this.datamockService = datamockService;
        this.router = router;
    }
    GendleListComponent.prototype.ngOnInit = function () {
    };
    GendleListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-gendle-list',
            templateUrl: './gendle-list.component.html',
            styleUrls: ['./gendle-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            DatamockService,
            Router])
    ], GendleListComponent);
    return GendleListComponent;
}());
export { GendleListComponent };
//# sourceMappingURL=gendle-list.component.js.map