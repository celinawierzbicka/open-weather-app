import moment from 'moment';
import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

export const getFullDate = unixTimestamp => {
    let date = moment.unix(unixTimestamp).format("DD/MM/YYYY");
    return date;
}

export const getDay = unixTimestamp => {
    let day = moment.unix(unixTimestamp).format("ddd");
    return day;
}

export const formatTemperature = temp => {
    let displayTemp = `${Math.round(temp)}°C`;
    return displayTemp;
}

export const min = data => {
    return data.map(d => Math.round(Math.min(...d)));
}

export const max = data => {
    return data.map(d => Math.round(Math.max(...d)));
}

export const mean = data => {
    return data.map(d => Math.round(math.mean(...d)));
}

export const mode = data => {
    return data.map(d => Math.round(math.mode(...d)));
}