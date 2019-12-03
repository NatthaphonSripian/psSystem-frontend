import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrginfoComponent } from './orginfo.component';

describe('OrginfoComponent', () => {
  let component: OrginfoComponent;
  let fixture: ComponentFixture<OrginfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrginfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
