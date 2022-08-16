import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienceLoginComponent } from './patience-login.component';

describe('PatienceLoginComponent', () => {
  let component: PatienceLoginComponent;
  let fixture: ComponentFixture<PatienceLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatienceLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatienceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
