import {FlightCardComponent} from './flight-card.component';

describe('FlightCard', () => {
  let component: FlightCardComponent;

  beforeEach(() => {
    component = new FlightCardComponent();
  });

  it('should select flight', () => {
    // When
    component.select();

    // Then
    expect(component.selected).toBe(true);
  });

  it('should deselect flight', () => {
    // Given
    component.select();

    // When
    component.deselect();

    // Then
    expect(component.selected).toBe(false);
  });
});
