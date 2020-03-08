import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPosition } from 'src/app/interface';

import { PositionService } from './../../../service/position.service';

@Component({
  selector: "app-position",
  templateUrl: "./position.component.html",
  styleUrls: ["./position.component.scss"]
})
export class PositionComponent implements OnInit {
  position = { id: null } as IPosition;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _positionService: PositionService
  ) {}

  ngOnInit() {
    const id = this._route.snapshot.params["id"];
    if (id) {
      this.getPosition(id);
    }
  }

  getPosition(id: number) {
    this._positionService.getPositionById(id).subscribe(data => {
      Object.assign(this.position, data);
    });
  }

  onSave() {
    this._positionService.savePosition(this.position).subscribe(data => {
      Object.assign(this.position, data);
    });
  }
}
