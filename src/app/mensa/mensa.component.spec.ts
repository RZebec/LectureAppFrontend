import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensaComponent } from './mensa.component';

describe('MensaComponent', () => {
  let component: MensaComponent;
  let fixture: ComponentFixture<MensaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
