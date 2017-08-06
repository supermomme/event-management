import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegistrationStep1Component } from './event-registration-step-1.component';

describe('EventRegistrationStep1Component', () => {
  let component: EventRegistrationStep1Component;
  let fixture: ComponentFixture<EventRegistrationStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRegistrationStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRegistrationStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
