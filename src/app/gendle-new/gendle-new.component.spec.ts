import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GendleNewComponent } from './gendle-new.component';

describe('GendleNewComponent', () => {
  let component: GendleNewComponent;
  let fixture: ComponentFixture<GendleNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GendleNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GendleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
