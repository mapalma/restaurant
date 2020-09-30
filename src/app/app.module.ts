import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { LayoutComponent } from "./layout/layout.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FloorComponent } from "./layout/floor/floor.component";
import { ZoneComponent } from "./layout/zone/zone.component";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LayoutComponent,
    FloorComponent,
    ZoneComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
