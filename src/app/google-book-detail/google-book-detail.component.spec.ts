import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBookDetailComponent } from './google-book-detail.component';

describe('GoogleBookDetailComponent', () => {
  let component: GoogleBookDetailComponent;
  let fixture: ComponentFixture<GoogleBookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleBookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleBookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
