import { Component, Input, OnInit } from '@angular/core';
import { Floor } from '../shared/floor.model';
import { MapService } from '../shared/map.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  floors: Floor[]
  currentIndex = 0;
  floor: Floor;

  constructor( private mapService: MapService) { }

  ngOnInit(): void {

    //initialise floors array
    //initialise current floor to 0

    this.floors = this.mapService.getFloors();
    this.floor = this.floors[this.currentIndex];

  }

  loadNextFloor(){

    if(this.currentIndex < this.floors.length - 1 ){
      this.currentIndex++
    } else {
      this.currentIndex = 0;
    }

    //change Floor
    this.floor = (this.floors[this.currentIndex]);
    //Emit new floor for updating floor details on floor component
    this.mapService.currentFloorSubject.next(this.floors[this.currentIndex]);
  }
}
