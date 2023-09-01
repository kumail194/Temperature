import { Injectable } from "@angular/core";
import { TemperatureIndicatorInterface } from "@temp/temperature-indicator.interface";

@Injectable()
export class StyleFunction {
    private angle: number = 0
    private duration: number = 1000;
    constructor() { }
    
    getGradientColors(config: TemperatureIndicatorInterface, id: string): string {
        const gradientElement = <any>document.getElementById(id);
        const stopElements = gradientElement.getElementsByTagName('stop');
        const colors = Array.from(stopElements).map((stop: any) => stop.getAttribute('stop-color'));
        const avg = (config.minValue + config.maxValue) / 2
        console.log(colors)
        return config.currentValue < avg ? '#008900' : '#FF0000';
    }

    animateArc(targetAngle: number, updateCallback: (angle: number) => void): void {
        const startTime = performance.now();
        const startAngle = this.angle;

        const animateFrame = (timestamp: number) => {
            const elapsedTime = timestamp - startTime;
            if (elapsedTime < this.duration) {
                this.angle = startAngle + ((targetAngle - startAngle) * elapsedTime) / this.duration;
                updateCallback(this.angle);
                requestAnimationFrame(animateFrame);
            } else {
                this.angle = targetAngle;
                updateCallback(this.angle);
            }
        };

        requestAnimationFrame(animateFrame);
    }

}