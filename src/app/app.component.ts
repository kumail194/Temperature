import { Component } from '@angular/core';
import { GuageMeterInterface } from './temperature-indicator/components/guage-meter/guage-meter.interface';
import { TemperatureIndicatorInterface } from './temperature-indicator/temperature-indicator.interface';
import { DEFAULT_CURRENT_VALUE, DEFAULT_MAX_VALUE, DEFAULT_MIN_VALUE } from './app.input';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: TemperatureIndicatorInterface = {
    currentValue: DEFAULT_CURRENT_VALUE,
    minValue: DEFAULT_MIN_VALUE,
    maxValue: DEFAULT_MAX_VALUE
  }
}