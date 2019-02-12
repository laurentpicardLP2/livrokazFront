import { async, TestBed } from '@angular/core/testing';
import { GoogleBookListComponent } from './google-book-list.component';
describe('GoogleBookListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GoogleBookListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GoogleBookListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=google-book-list.component.spec.js.map