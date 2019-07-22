/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {FlightCardComponent} from '../flight-card/flight-card.component';
import {FlightSearchComponent} from './flight-search.component';
import {DummyFlightService, FlightService} from './flight.service';


fdescribe('Flight Search', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      declarations: [ FlightSearchComponent, FlightCardComponent ]
    })
    .overrideComponent(FlightSearchComponent, {
      set: {
        providers: [
          { provide: FlightService, useClass: DummyFlightService }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
