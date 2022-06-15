import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from './flight';


@Injectable()
export class FlightService {
private MyFlights: Flight[] =[
  {
    "flightNumber" :"12",
    "origin":"Abra",
    "destination":"Dabra"

  },
  {
    "flightNumber" :"13",
    "origin":"Hippo",
    "destination":"Potamous"

  },
  {
    "flightNumber" :"14",
    "origin":"Lion",
    "destination":"King"

  },
];

  constructor(private http:HttpClient) { }

  public getMyFlights() : Flight[] {
    return this.MyFlights;
  }
}
