import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Position } from './../../../interface/setup/position';
import { PositionService } from './../../../service/position.service';

@Component({
  selector: "app-positionlist",
  templateUrl: "./positionlist.component.html",
  styleUrls: ["./positionlist.component.scss"]
})
export class PositionlistComponent implements OnInit {
  public positionListData: Position[] = [];
  public positionListFiltered: Position[] = [];

  constructor(
    private servicePosition: PositionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadDataposition();
  }

  reloadDataposition() {
    this.servicePosition.positionGetAll().subscribe((res: Position[]) => {
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
