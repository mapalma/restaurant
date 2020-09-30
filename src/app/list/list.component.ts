import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MapService } from '../shared/map.service';
import { Table } from '../shared/table.model';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, map} from 'rxjs/operators';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild('searchText', {static:true}) searchText:ElementRef;

  searchForm: FormGroup;
  listOfTables: Table[] = [];
  searchTextSubscription: Subscription;
  searchStr: string[];

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup ({
      'search': new FormControl(null, Validators.required)
    });

    this.listOfTablesInit();

  }

  ngAfterViewInit(){
    //ViewChild wont be on ngOnInit
    this.onSearchInput()
  }

  onSearchInput(){

    //subscribe to the observable that is 'listening' to the input events on the input
    //use operator debounceTime to wait 400 miliseconds after user finishing type to pass it to subscribe
    //use the filtered text to look for a table name on the service
    this.searchTextSubscription = fromEvent(this.searchText.nativeElement, 'input')
    .pipe(
      map((e:any) => e.currentTarget.value),
      debounceTime(400)
    )
    .subscribe((text)=>{
      if(text.length){
        this.listOfTables = this.mapService.getTableByName(text);
      } else {
        this.listOfTablesInit();
      }
    })
  }

  listOfTablesInit(){
    this.listOfTables = this.mapService.getTables();
  }

  ngOnDestroy(){
    this.searchTextSubscription.unsubscribe();
  }
}


