import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureIndicatorComponent } from './temperature-indicator.component';
import { StyleFunction } from '@temp-function/styles-function';
import { GuageMeterComponent } from '@temp-components/guage-meter.component';

@NgModule({
  declarations: [
    TemperatureIndicatorComponent,
    GuageMeterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemperatureIndicatorComponent
  ],
  providers: [
    StyleFunction
  ]
})
export class TemperatureIndicatorModule { }
