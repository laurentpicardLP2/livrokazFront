import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DatamockService } from './datamock.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.title = 'livrokaz';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.dataService.publishAuthors();
        this.dataService.publishGoogleBooks();
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DatamockService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map