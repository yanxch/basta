/* tslint:disable:no-unused-variable */
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FlightCardComponent} from './flight-card.component';
import {By} from '@angular/platform-browser';


const titleSelector = '.title';
const contentSelector = '.content';
const selectButtonSelector = '[data-testid="selectButton"]';
const removeButtonSelector = '[data-testid="removeButton"';

describe('FlightCard', () => {
  let component: FlightCardComponent;
  let fixture: ComponentFixture<FlightCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightCardComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightCardComponent);
    component = fixture.componentInstance;

    component.item = {
      id: 1,
      from: 'Vienna',
      to: 'Graz',
      date: new Date().toISOString(),
      delayed: false
    };

    fixture.detectChanges();
  });

  it('should show from and to airport', () => {
    const element = fixture
      .debugElement
      .query(By.css(titleSelector))
      .nativeElement;

    expect(element.textContent).toBe('Vienna - Graz');
  });

  it('should show flight number #1', () => {
    const element = fixture
      .debugElement
      .query(By.css(contentSelector))
      .nativeElement;

    expect(element.textContent).toContain('Flight-No.: #1');
  });

  it('should not show flight number #2', () => {
    const element = fixture
      .debugElement
      .query(By.css(contentSelector))
      .nativeElement;

    expect(element.textContent).not.toContain('Flight-No.: #2');
  });

  it('should have a "Select" Button when Item is not selected', () => {
    const element = fixture
      .debugElement
      .query(By.css(selectButtonSelector))
      .nativeElement;

      expect(element).toBeDefined();
  });

  it('should have a "Remove" Button when Item is selected', () => {
    // Given
    const selectButton = fixture
      .debugElement
      .query(By.css(selectButtonSelector))
      .nativeElement;

    selectButton.click();
    fixture.detectChanges();
    // Then
    const removeButton = fixture
      .debugElement
      .query(By.css(removeButtonSelector))
      .nativeElement;

      expect(removeButton).toBeDefined();
  });
});
