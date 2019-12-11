import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGroupListComponent } from './employee-group-list.component';

describe('EmployeeGroupListComponent', () => {
  let component: EmployeeGroupListComponent;
  let fixture: ComponentFixture<EmployeeGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
