import { TestBed } from '@angular/core/testing';
import { DatamockService } from './datamock.service';
describe('DatamockService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DatamockService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=datamock.service.spec.js.map