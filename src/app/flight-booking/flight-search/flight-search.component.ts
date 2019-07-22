import {Component, OnInit} from '@angular/core';
import {Flight} from '../../entities/flight';
import {FlightService, DefaultFlightService} from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [
     { provide: FlightService, useClass: DefaultFlightService }
  ]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;

  //flights: Array<Flight> = [];

  get flights() {
    return this.flightService.flights;
  }



  selectedFlight: Flight;

  // private http: HttpClient;

  basket: object = {
    "3": true,
    "5": true
  };

  constructor(
    private flightService: FlightService) {
    // this.http = http;
  }

  ngOnInit() {
  }

  search() {

    this.flightService.load(this.from, this.to);


  }

  select(f: Flight) {
    this.selectedFlight = f;
  }

}
