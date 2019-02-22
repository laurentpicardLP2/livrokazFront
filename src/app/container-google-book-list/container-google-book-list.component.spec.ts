import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerGoogleBookListComponent } from './container-google-book-list.component';

describe('ContainerGoogleBookListComponent', () => {
  let component: ContainerGoogleBookListComponent;
  let fixture: ComponentFixture<ContainerGoogleBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerGoogleBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerGoogleBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
