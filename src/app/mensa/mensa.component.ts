import { Component, OnInit } from '@angular/core';
import { MensaPlan, DailyPlan } from '../models/mensa-plan';
import { HttpService } from '../core/http.service';
// import { DailyPlan } from '../models/daily-plan';

@Component({
  selector: 'app-mensa',
  templateUrl: './mensa.component.html',
  styleUrls: ['./mensa.component.scss']
})
export class MensaComponent implements OnInit {

  mensaPlan: MensaPlan;

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.loadMensaPlan();
  }

  loadMensaPlan() {
    this._httpService.getMensaPlan().then(mensaPlan => {
      this.mensaPlan = mensaPlan;
    });
  }
}
