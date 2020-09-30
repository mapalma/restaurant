import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";
import { Floor } from "./floor.model";
import { Table } from "./table.model";
import { Zone } from "./zones.model";

@Injectable({
  providedIn: "root",
})
export class MapService {
  map = {
    floors: {
      "201": {
        id_floor: "201",
        id_map: "212",
        name: "Planta 1",
      },
      "202": {
        id_floor: "202",
        id_map: "212",
        name: "Planta 2",
      },
      "203": {
        id_floor: "203",
        id_map: "212",
        name: "Planta 3",
      },
    },
    zones: {
      "370": {
        id_zone: "370",
        id_map: "212",
        name: "Z1",
        floor: "201",
      },
      "371": {
        id_zone: "371",
        id_map: "212",
        name: "Z2",
        floor: "202",
      },
      "372": {
        id_zone: "372",
        id_map: "212",
        name: "Z3",
        floor: "203",
      },
    },
    tables: {
      "1": {
        id_table: 1,
        name_table: "Mesa1",
        id_zone: "370",
        x: "31",
        y: "30",
      },
      "2": {
        id_table: 2,
        name_table: "Mesa2",
        id_zone: "370",
        x: "133",
        y: "32",
      },
      "3": {
        id_table: 3,
        name_table: "Mesa3",
        max: "2",
        min: "1",
        id_zone: "370",
        x: "88",
        y: "105",
      },
      "4": {
        id_table: 4,
        name_table: "Mesa4",
        id_zone: "370",
        x: "203",
        y: "107",
      },
      "5": {
        id_table: 5,
        name_table: "Mesa5",
        id_zone: "371",
        x: "63",
        y: "38",
      },
      "6": {
        id_table: 6,
        name_table: "Mesa6",
        id_zone: "371",
        x: "63",
        y: "109",
      },
      "7": {
        id_table: 7,
        name_table: "Mesa7",
        id_zone: "372",
        x: "32",
        y: "93",
      },
      "8": {
        id_table: 8,
        name_table: "Mesa8",
        id_zone: "372",
        x: "111",
        y: "95",
      },
    },
  };

  floorsArray: Floor[] = [];
  zonesArray: Zone[] = [];
  tablesArray: Table[] = [];

  currentIndex: any = 0;
  currentFloorSubject = new Subject<Floor>();

  constructor() {}

  initFloors() {
    const floors = this.map["floors"];
    let floorsObj = Object.values(floors);

    for (let i = 0; i < floorsObj.length; i++) {
      this.floorsArray.push(
        new Floor(
          floorsObj[i]["id_floor"],
          floorsObj[i]["name"],
          floorsObj[i]["id_map"]
        )
      );
    }
  }

  initZones() {
    let zones = this.map["zones"];
    let zonesObj = Object.values(zones);

    for (let i = 0; i < zonesObj.length; i++) {
      this.zonesArray.push(
        new Zone(
          zonesObj[i]["id_zone"],
          zonesObj[i]["id_map"],
          zonesObj[i]["name"],
          zonesObj[i]["floor"]
        )
      );
    }
  }

  initTables() {
    const tables = this.map["tables"];
    let tablesObj = Object.values(tables);
    for (let i = 0; i < tablesObj.length; i++) {
      this.tablesArray.push(
        new Table(
          tablesObj[i]["id_table"],
          tablesObj[i]["name_table"],
          tablesObj[i]["id_zone"],
          tablesObj[i]["x"],
          tablesObj[i]["y"]
        )
      );
    }
  }

  getFloors() {
    return [...this.floorsArray];
  }
  getTables() {
    return [...this.tablesArray];
  }
  getTableByName(name: string) {
    return this.tablesArray.filter((table) => {
      return table.name === name;
    });
  }
  getTableById(id: number): Table {
    return this.tablesArray.find((table) => {
      if (table.id === id) {
        return table;
      }
    });
  }

  getZonesByFloorId(id: Number) {
    return this.zonesArray.filter((el) => {
      if (el.floor === id) {
        return el;
      }
    });
  }

  getTablesByZoneId(id: Number): Table[] {
    return this.tablesArray.filter((el) => {
      if (el.id_zone === id) {
        return el;
      }
    });
  }
}
