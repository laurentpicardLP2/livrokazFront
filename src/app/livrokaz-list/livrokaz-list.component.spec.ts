import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrokazListComponent } from './livrokaz-list.component';

describe('LivrokazListComponent', () => {
  let component: LivrokazListComponent;
  let fixture: ComponentFixture<LivrokazListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrokazListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrokazListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
