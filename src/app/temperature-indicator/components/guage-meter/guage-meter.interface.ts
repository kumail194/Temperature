import { TemperatureIndicatorInterface } from "@app/temperature-indicator/temperature-indicator.interface";

interface StyleDesign {
    strokeWidth: number;
    stroke: string;
    fill?: string;
    width?: number;
    r? : number;
    gradientEnable? : boolean
}

export interface GuageMeterInterface {
    pathFull: StyleDesign;
    pathSemi: StyleDesign;
    needle: StyleDesign;
    needleCircle : StyleDesign;
    minTick : StyleDesign;
    maxTick : StyleDesign;
    tickTextMin: StyleDesign;
    tickTextMax: StyleDesign;
}
