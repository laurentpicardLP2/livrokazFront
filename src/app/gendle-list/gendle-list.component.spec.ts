import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GendleListComponent } from './gendle-list.component';

describe('GendleListComponent', () => {
  let component: GendleListComponent;
  let fixture: ComponentFixture<GendleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GendleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GendleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
