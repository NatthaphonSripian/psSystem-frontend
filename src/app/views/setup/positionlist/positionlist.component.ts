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
  public positionListData: IPosition[] = [];
  public positionListFiltered: IPosition[] = [];

  constructor(
    private servicePosition: PositionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadDataposition();
  }

  reloadDataposition() {
    this.servicePosition.positionGetAll().subscribe((res: IPosition[]) => {
      this.positionListData = res;

      if (this.positionListData.length > 0) {
        this.positionListFiltered = this.positionListData;
      } else {
        this.positionListFiltered = [];
      }
    });
  }

  updatePosition(id: number) {
    this.router.navigate(["setup/position", id]);
  }

  deletePosition(id: number) {
    // Delete Data and reload data
    this.servicePosition.positionDeleteById(id).subscribe(() => {
      this.reloadDataposition();
    });
  }
}
