import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienceLogoutComponent } from './patience-logout.component';

describe('PatienceLogoutComponent', () => {
  let component: PatienceLogoutComponent;
  let fixture: ComponentFixture<PatienceLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatienceLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatienceLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
