/* tslint:disable:no-unused-variable */

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {DefaultFlightService, FlightService} from './flight.service';


describe('Load Flights', () => {

  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ DefaultFlightService ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should load flights from Graz to Hamburg', () => {
    const service = TestBed.get(FlightService);

    service
    .find('Graz', 'Hamburg')
    .subscribe((data: any[]) => {
      expect(data.length).toBe(2);
    });

    const req = httpTestingController.expectOne(`http://www.angular.at/api/flight?from=Graz&to=Hamburg`);

    req.flush([
      {
        id: 1,
        from: 'Graz',
        to: 'Hamburg',
        date: new Date().toISOString(),
        delayed: false
      },
      {
        id: 2,
        from: 'Graz',
        to: 'Hamburg',
        date: new Date().toISOString(),
        delayed: false
      }
    ]);
  });
});
