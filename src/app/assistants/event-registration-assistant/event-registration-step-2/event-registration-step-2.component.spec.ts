import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegistrationStep2Component } from './event-registration-step-2.component';

describe('EventRegistrationStep2Component', () => {
  let component: EventRegistrationStep2Component;
  let fixture: ComponentFixture<EventRegistrationStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRegistrationStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRegistrationStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
