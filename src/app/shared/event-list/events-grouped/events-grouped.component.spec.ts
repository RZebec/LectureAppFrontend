import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGroupedComponent } from './events-grouped.component';

describe('EventsGroupedComponent', () => {
  let component: EventsGroupedComponent;
  let fixture: ComponentFixture<EventsGroupedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsGroupedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsGroupedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
