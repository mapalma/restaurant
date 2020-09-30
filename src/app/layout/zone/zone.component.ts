import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { MapService } from "src/app/shared/map.service";
import { Table } from "src/app/shared/table.model";
import panzoom from "panzoom";

@Component({
  selector: "app-zone",
  templateUrl: "./zone.component.html",
  styleUrls: ["./zone.component.scss"],
})
export class ZoneComponent implements OnInit {
  @Input() zoneId: number;
  @ViewChild("scene", { static: false }) scene: ElementRef;

  tables: Table[];
  fillColor = "rgb(255, 255, 255)";
  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.tables = this.mapService.getTablesByZoneId(this.zoneId);
  }

  ngAfterViewInit() {
    //apply panzoom to svg
    panzoom(this.scene.nativeElement);
  }
}
