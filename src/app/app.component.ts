import { Component, OnInit } from "@angular/core";
import { MapService } from "./shared/map.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "cover-manager";

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.mapService.initFloors();
    this.mapService.initZones();
    this.mapService.initTables();
  }
}
