import { Component, Input, OnInit } from '@angular/core';
import { StyleFunction } from '@temp-function/styles-function';
import { MathsGuage } from '@temp-function/calculations';
import { TemperatureIndicatorInterface } from '@temp/temperature-indicator.interface';
import { GuageMeterInput } from './guage-meter.input';
import { GuageMeterInterface } from './guage-meter.interface';

@Component({
  selector: 'app-guage-meter',
  templateUrl: './guage-meter.component.html',
  styleUrls: ['./guage-meter.component.scss']
})

export class GuageMeterComponent implements OnInit {
  @Input() config!: TemperatureIndicatorInterface;
  @Input() size: number = 250;
  @Input() strokeWidth: number = 10;
  guageMeterStyles: GuageMeterInterface = GuageMeterInput
  mathsGuage: MathsGuage;
  center: number = 0;
  radius: number = 0;
  angle: number = 0;
  labelFontSize: number = 12;
  labelOffset: number = -13;
  startAngle = -230;
  endAngle = 50;
  gradientId = 'gradient-' + Math.random();
  gradientUrl = `url(#${this.gradientId})`;

  constructor(private StyleFunction: StyleFunction,) {
    this.mathsGuage = new MathsGuage(this.size);
    this.center = this.mathsGuage.getCenter();
    this.radius = this.mathsGuage.getRadius();
  }

  ngOnInit(): void {
    const targetAngle = this.mathsGuage.calculateTargetAngle(this.config);
    this.StyleFunction.animateArc(targetAngle, (angle: number) => {
      this.angle = angle
    })
  }

  /**
    * Draw an arc (SVG path) based on path type.
    * @param pathtype - The type of path, either 'full' or 'semi'.
    * @returns The SVG path string.
    */
  drawArc(pathtype: string): string {
    return this.mathsGuage.drawArc(pathtype, this.angle);
  }

  /**
   * Get gradient colors based on configuration and gradient ID.
   * @returns The gradient colors as a string.
   */
  getGradientColors(): string {
    return this.StyleFunction.getGradientColors(this.config, this.gradientId);
  }

  /**
   * Calculate the end point (x, y) of the needle based on the current angle.
   * @returns An object with x and y coordinates for the needle's end point.
   */
  calculateNeedleEnd(): { x: number; y: number } {
    return this.mathsGuage.calculateNeedleEnd(this.angle);
  }

  /**
   * Calculate the starting point (x, y) of a tick mark based on an angle.
   * @param angle - The angle for the tick mark.
   * @returns An object with x and y coordinates for the tick mark's starting point.
   */
  calculateTickStart(angle: number): { x: number; y: number } {
    return this.mathsGuage.calculateTickStart(angle);
  }

  /**
   * Calculate the ending point (x, y) of a tick mark based on an angle.
   * @param angle - The angle for the tick mark.
   * @returns An object with x and y coordinates for the tick mark's ending point.
   */
  calculateTickEnd(angle: number): { x: number; y: number } {
    return this.mathsGuage.calculateTickEnd(angle);
  }

}