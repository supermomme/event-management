import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationRegistrationListComponent } from './administration-registration-list.component';

describe('AdministrationRegistrationListComponent', () => {
  let component: AdministrationRegistrationListComponent;
  let fixture: ComponentFixture<AdministrationRegistrationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationRegistrationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationRegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
