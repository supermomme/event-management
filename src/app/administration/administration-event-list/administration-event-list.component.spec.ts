import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationEventListComponent } from './administration-event-list.component';

describe('AdministrationEventListComponent', () => {
  let component: AdministrationEventListComponent;
  let fixture: ComponentFixture<AdministrationEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
