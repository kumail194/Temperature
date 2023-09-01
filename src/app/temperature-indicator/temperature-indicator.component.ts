import { Component, Input } from '@angular/core';
import { TemperatureIndicatorInterface } from './temperature-indicator.interface';

@Component({
  selector: 'app-temperature-indicator',
  templateUrl: './temperature-indicator.component.html',
  styleUrls: ['./temperature-indicator.component.scss']
})

export class TemperatureIndicatorComponent {
  @Input() config!: TemperatureIndicatorInterface;
}
