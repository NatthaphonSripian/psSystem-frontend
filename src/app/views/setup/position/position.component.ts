import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPosition } from '../../../interface/setup/position-interface';
import { PositionService } from './../../../service/position.service';

@Component({
  selector: "app-position",
  templateUrl: "./position.component.html",
  styleUrls: ["./position.component.scss"]
})
export class PositionComponent implements OnInit {
  public position: IPosition;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicePosition: PositionService
  ) {
    this.position = { id: null } as IPosition;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.onLoadDataPosition(this.id);
    }
  }

  onLoadDataPosition(id: number) {
    this.servicePosition.positionGetById(this.id).subscribe(
      data => {
        this.position = data;
      },
      error => console.log(error)
    );
  }

  onSave() {
    this.servicePosition.positionSave(this.position).subscribe(data => {
      this.position = data;
    });
  }
}
