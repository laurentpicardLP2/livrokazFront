import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorByBookComponent } from './author-by-book.component';

describe('AuthorByBookComponent', () => {
  let component: AuthorByBookComponent;
  let fixture: ComponentFixture<AuthorByBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorByBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorByBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
