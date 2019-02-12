import * as tslib_1 from "tslib";
import { LivrokazListComponent } from './livrokaz-list/livrokaz-list.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorNewComponent } from './author-new/author-new.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoogleBookListComponent } from './google-book-list/google-book-list.component';
var routes = [
    { path: 'list', component: LivrokazListComponent },
    { path: 'googlebooks', component: GoogleBookListComponent },
    { path: 'authors', component: AuthorsListComponent },
    { path: 'author-new', component: AuthorNewComponent },
    { path: 'author-detail/:idAuthorToUpdate', component: AuthorDetailComponent }
    // { path: '', redirectTo: 'authors', pathMatch: 'full'}
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map