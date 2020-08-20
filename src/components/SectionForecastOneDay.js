import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { getDay, formatTemperature } from '../utils/helperFunctions';

const useStyles = makeStyles((theme) => ({
  dayLabel: {
      textAlign: 'left',
      padding: theme.spacing( 1, 0.5),
  },
  day: {
    padding: theme.spacing( 1, 0.5),
}
}))

const SectionForecastOneDay = props => {
    const classes = useStyles(props);
    const { dayForecast } = props;
    const morningTemp = formatTemperature(dayForecast.temp.morn);
    const dayTemp = formatTemperature(dayForecast.temp.day);
    const nightTemp = formatTemperature(dayForecast.temp.night);
    const humidity = dayForecast.humidity;
    const icon = dayForecast.weather[0].icon;
    const src = `https://openweathermap.org/img/wn/${icon}.png`

    return (
        <>
            <Typography className={classes.dayLabel}>{getDay(dayForecast.dt)}</Typography>
            <img src={src} alt="weather-icon"/>
            <Typography className={classes.day}>{morningTemp}</Typography>
            <Typography className={classes.day}>{dayTemp}</Typography>
            <Typography className={classes.day}>{nightTemp}</Typography>
            <Typography className={classes.day}>{humidity}%</Typography>
        </>
    )
}

export default SectionForecastOneDay;