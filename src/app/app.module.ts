import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { FlightService } from './flight.service';
import { TableModule } from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
