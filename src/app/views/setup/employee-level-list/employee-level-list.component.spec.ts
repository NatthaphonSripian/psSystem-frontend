import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLevelListComponent } from './employee-level-list.component';

describe('EmployeeLevelListComponent', () => {
  let component: EmployeeLevelListComponent;
  let fixture: ComponentFixture<EmployeeLevelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLevelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLevelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
