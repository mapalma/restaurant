import { Component, Input, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MapService } from "src/app/shared/map.service";
import { Floor } from "src/app/shared/floor.model";
import { Zone } from "src/app/shared/zones.model";

@Component({
  selector: "app-floor",
  templateUrl: "./floor.component.html",
  styleUrls: ["./floor.component.scss"],
})

export class FloorComponent implements OnInit {
  zones: Zone[];
  @Input() floor: Floor;
  currentFloorChangeSubscription = new Subscription();

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    //get zones on init
    this.zones = this.mapService.getZonesByFloorId(this.floor.id_floor);

    //update zones on change floor
    this.currentFloorChangeSubscription = this.mapService.currentFloorSubject.subscribe(
      (floor) => {
        this.zones = this.mapService.getZonesByFloorId(floor.id_floor);
      }
    );
  }

  ngOnDestroy() {
    this.currentFloorChangeSubscription.unsubscribe();
  }
}
