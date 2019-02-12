import { async, TestBed } from '@angular/core/testing';
import { LivrokazListComponent } from './livrokaz-list.component';
describe('LivrokazListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [LivrokazListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LivrokazListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=livrokaz-list.component.spec.js.map