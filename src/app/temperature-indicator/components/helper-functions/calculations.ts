import { TemperatureIndicatorInterface } from "@app/temperature-indicator/temperature-indicator.interface";

export class MathsGuage {
    center: number = 0;
    radius: number = 0;
    arcStartAngle: number = -230;
    arcEndAngle: number = 50;
    strokeWidth: number = 10;
    tickLength: number = 20;

    /**
     * Constructor for the MathsGuage class.
     * @param size - The size of the gauge.
     */
    constructor(size: number = 0) {
        // Initialize the center and radius based on the provided size.
        this.center = size / 2;
        this.radius = this.center - this.strokeWidth / 2;
    }

    /**
     * Get the radius of the gauge.
     * @returns The radius value.
     */
    getRadius(): number {
        return this.radius;
    }

    /**
     * Get the center of the gauge.
     * @returns The center value.
     */
    getCenter(): number {
        return this.center;
    }

    /**
     * Calculate the target angle for the needle based on configuration values.
     * @param config - The configuration object containing minValue, maxValue, and currentValue.
     * @returns The calculated target angle.
     */
    calculateTargetAngle(config: TemperatureIndicatorInterface): number {
        console.log(config);
        return ((config.currentValue - config.minValue) / (config.maxValue - config.minValue)) * 230 + 50;
    }

    /**
     * Calculate the SVG path for an arc based on start and end angles.
     * @param startAngle - The starting angle of the arc.
     * @param endAngle - The ending angle of the arc.
     * @param angel - A parameter (unclear purpose).
     * @param arcAngle - A flag indicating whether the arc should be a full circle.
     * @returns The SVG path string.
     */
    calculateArc(startAngle: number, endAngle: number, angel: number, arcAngle: any): string {
        const startRadians = (startAngle * Math.PI) / 180;
        const endRadians = (endAngle * Math.PI) / 180;
        const startX = this.center + this.radius * Math.cos(startRadians);
        const startY = this.center + this.radius * Math.sin(startRadians);
        const endX = this.center + this.radius * Math.cos(endRadians);
        const endY = this.center + this.radius * Math.sin(endRadians);
        const arc = arcAngle === 1 ? 1 : angel > 180 ? 1 : 0;

        return `M ${startX} ${startY} A ${this.radius} ${this.radius} 0 ${arc} 1 ${endX} ${endY}`;
    }

    /**
     * Draw an arc (SVG path) based on path type and angle.
     * @param pathtype - The type of path, either 'full' or 'semi'.
     * @param angle - The angle for the arc.
     * @returns The SVG path string.
     */
    drawArc(pathtype: string, angle: number): string {
        return pathtype === 'full'
            ? this.calculateArc(this.arcStartAngle, this.arcEndAngle, angle, 1)
            : this.calculateArc(this.arcStartAngle, (this.arcStartAngle + angle), angle,  0);
    }

    /**
     * Calculate the end point (x, y) of the needle based on an angle.
     * @param angle - The angle for the needle.
     * @returns An object with x and y coordinates for the needle's end point.
     */
    calculateNeedleEnd(angle: number): { x: number; y: number } {
        const needleLength = this.radius * 1;
        const needleAngle = ((angle - 230) * Math.PI) / 180;
        const needleEndX = this.center + needleLength * Math.cos(needleAngle);
        const needleEndY = this.center + needleLength * Math.sin(needleAngle);
        return { x: needleEndX, y: needleEndY };
    }

    /**
     * Calculate the starting point (x, y) of a tick mark based on an angle.
     * @param angle - The angle for the tick mark.
     * @returns An object with x and y coordinates for the tick mark's starting point.
     */
    calculateTickStart(angle: number): { x: number; y: number } {
        const radians = (angle * Math.PI) / 180;
        const x = this.center + this.radius * Math.cos(radians);
        const y = this.center + this.radius * Math.sin(radians);
        return { x, y };
    }

    /**
     * Calculate the ending point (x, y) of a tick mark based on an angle.
     * @param angle - The angle for the tick mark.
     * @returns An object with x and y coordinates for the tick mark's ending point.
     */
    calculateTickEnd(angle: number): { x: number; y: number } {
        const radians = (angle * Math.PI) / 180;
        const x = this.center + (this.radius + this.tickLength) * Math.cos(radians);
        const y = this.center + (this.radius + this.tickLength) * Math.sin(radians);
        return { x, y };
    }
}
