import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationPurposeListComponent } from './administration-purpose-list.component';

describe('AdministrationPurposeListComponent', () => {
  let component: AdministrationPurposeListComponent;
  let fixture: ComponentFixture<AdministrationPurposeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationPurposeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationPurposeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
