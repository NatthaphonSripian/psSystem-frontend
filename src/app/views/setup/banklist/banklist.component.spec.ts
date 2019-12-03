import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanklistComponent } from './banklist.component';

describe('BanklistComponent', () => {
  let component: BanklistComponent;
  let fixture: ComponentFixture<BanklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
