import { Component, OnInit } from '@angular/core';
import {Flight } from '../../app/flight';
import { FlightService } from '../flight.service';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  public flights:Flight[] =[];

  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
    this.flights = this.flightService.getMyFlights();
  }

}
