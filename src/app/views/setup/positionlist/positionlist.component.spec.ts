import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionlistComponent } from './positionlist.component';

describe('PositionlistComponent', () => {
  let component: PositionlistComponent;
  let fixture: ComponentFixture<PositionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
