import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLevelComponent } from './employee-level.component';

describe('EmployeeLevelComponent', () => {
  let component: EmployeeLevelComponent;
  let fixture: ComponentFixture<EmployeeLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
