/* tslint:disable:no-unused-variable */

import {HttpClientModule} from '@angular/common/http';
import {async, TestBed} from '@angular/core/testing';
import {DefaultFlightService, FlightService} from './flight.service';

describe('Load Flights', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ DefaultFlightService ]
    });
  });

  it('should load flights from Graz to Hamburg', async(() => {
    const service = TestBed.get(FlightService);

    service
      .find('Graz', 'Hamburg')
      .subscribe((data: any[]) => {
        expect(data.length).toBe(2);
      });
  }));

  it('should load flights from Vienna to Hamburg', async(() => {
    const service = TestBed.get(FlightService);

    service
      .find('Vienna', 'Hamburg')
      .subscribe((data: any[]) => {
        expect(data.length).toBe(0);
      });
  }));

});

