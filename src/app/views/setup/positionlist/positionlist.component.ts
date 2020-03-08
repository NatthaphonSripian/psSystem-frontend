import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IPosition } from '../../../interface/setup/position-interface';
import { PositionService } from './../../../service/position.service';

@Component({
  selector: "app-positionlist",
  templateUrl: "./positionlist.component.html",
  styleUrls: ["./positionlist.component.scss"]
})
export class PositionlistComponent implements OnInit {
  public positionList: IPosition[] = [];
  public positionListFiltered: IPosition[] = [];

  constructor(
    private readonly _router: Router,
    private readonly _positionService: PositionService
  ) {}

  ngOnInit() {
    this.getPositionList();
  }

  getPositionList() {
    this._positionService.getPositionList().subscribe((res: IPosition[]) => {
      this.positionList = res;
      this.positionListFiltered = this.positionList;
    });
  }

  updatePosition(id: number) {
    this._router.navigate(["setup/position", id]);
  }

  deletePosition(id: number) {
    this._positionService.deletePosition(id).subscribe(() => {
      this.getPositionList();
    });
  }
}
