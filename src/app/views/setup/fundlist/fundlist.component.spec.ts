import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundlistComponent } from './fundlist.component';

describe('FundlistComponent', () => {
  let component: FundlistComponent;
  let fixture: ComponentFixture<FundlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
