import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienceRegistrationComponent } from './patience-registration.component';

describe('PatienceRegistrationComponent', () => {
  let component: PatienceRegistrationComponent;
  let fixture: ComponentFixture<PatienceRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatienceRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatienceRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
