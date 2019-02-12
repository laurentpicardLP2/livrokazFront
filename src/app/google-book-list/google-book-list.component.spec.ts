import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBookListComponent } from './google-book-list.component';

describe('GoogleBookListComponent', () => {
  let component: GoogleBookListComponent;
  let fixture: ComponentFixture<GoogleBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
