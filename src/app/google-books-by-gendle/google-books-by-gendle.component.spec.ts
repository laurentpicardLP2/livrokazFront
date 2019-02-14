import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBooksByGendleComponent } from './google-books-by-gendle.component';

describe('GoogleBooksByGendleComponent', () => {
  let component: GoogleBooksByGendleComponent;
  let fixture: ComponentFixture<GoogleBooksByGendleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleBooksByGendleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleBooksByGendleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
