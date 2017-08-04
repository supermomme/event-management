import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationEventEditComponent } from './administration-event-edit.component';

describe('AdministrationEventEditComponent', () => {
  let component: AdministrationEventEditComponent;
  let fixture: ComponentFixture<AdministrationEventEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationEventEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationEventEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
