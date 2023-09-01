import { DEFAULT_CURRENT_VALUE, DEFAULT_MAX_VALUE, DEFAULT_MIN_VALUE } from "@app/app.input";
import { GuageMeterInterface } from "./guage-meter.interface";

export const GuageMeterInput: GuageMeterInterface = {
    pathFull: {
        strokeWidth: 5,
        stroke: 'grey',
        fill: 'none',
        gradientEnable: true
    },
    pathSemi: {
        strokeWidth: 7,
        stroke: 'red',
        fill: 'none',
        gradientEnable: true
    },
    needle: {
        strokeWidth: 2,
        stroke: 'grey',
        gradientEnable: true
    },
    needleCircle: {
        strokeWidth: 2,
        stroke: 'grey',
        gradientEnable: true,
        fill: 'grey',
        r: 4
    },
    minTick: {
        stroke: '#008900',
        strokeWidth: 1,
    },
    tickTextMin: {
        stroke: '#aaa',
        strokeWidth: 2,
    },
    maxTick: {
        stroke: '#FF0000',
        strokeWidth: 1,
    },
    tickTextMax: {
        stroke: '#aaa',
        strokeWidth: 2,
    }
}