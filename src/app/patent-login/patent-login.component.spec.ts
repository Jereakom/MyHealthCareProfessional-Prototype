import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentLoginComponent } from './patent-login.component';

describe('PatentLoginComponent', () => {
  let component: PatentLoginComponent;
  let fixture: ComponentFixture<PatentLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
