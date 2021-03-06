import { Component } from '@angular/core';
import { RouteAnimation } from '../const/routeanimation';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ RouteAnimation ]
})
export class AboutComponent {
  private __version: string = process.env.VERSION;
  private __start: number;
  private __now: number;
  constructor() {
    this.__start = (new Date("2017-05-28")).getTime();
    this.__now = Date.now();
  }
}
