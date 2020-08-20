import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

import { formatTemperature } from '../utils/helperFunctions';


const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 350,
    margin: theme.spacing(1.5, 1.5),
  },
  wrapperMain: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 12,
  },
  temp: {
    marginRight: 'auto',
    marginTop: theme.spacing(2),
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
  }
}))

const CurrentWeather = props => {
    const { 
        city,
        currentWeather,
        currentTemperature,
    } = props;

    const classes = useStyles(props);
    const src = `https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`

    return (
        <Box className={classes.wrapper}>
            <Typography variant="h5">{city}</Typography>
            <Box className={classes.wrapperMain}>
                <Box className={classes.main}>
                    <img src={src} alt="weather-icon"/>
                    <Typography className={classes.temp} variant="h2">{formatTemperature(currentTemperature)}</Typography>
                </Box>
                <Typography>{currentWeather.description}</Typography>
            </Box>
        </Box>
    )
}

export default CurrentWeather;