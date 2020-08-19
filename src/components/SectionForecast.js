import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { showStatistics } from '../actions';
import CurrentWeather from './CurrentWeather';
import SectionForecastFiveDays from './SectionForecastFiveDays';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 350,
    marginTop: 20,
  },
  statistics: {
    alignSelf: 'flex-end',
  }
}))

const SectionForecast = props => {
    const { 
        city,
        cityNotFound,
        forecast,
        displayStatistics,
    } = props;
    const classes = useStyles(props);

    const onButtonClick = () => {
        props.showStatistics();
    };

    return city && !cityNotFound ? 
        <Box className={classes.wrapper}>
            <CurrentWeather { ...props } />
            <SectionForecastFiveDays forecast={forecast} displayStatistics={displayStatistics} />
            <Button className={classes.statistics} onClick={() => onButtonClick()}>
                {displayStatistics ? (
                    <>
                    Hide statistics
                    <KeyboardArrowUpIcon />
                    </>
                ) : (
                    <>
                    Show statistics
                    <KeyboardArrowDownIcon />
                    </>
                )}
            </Button>
        </Box>
        : cityNotFound ?
        <Box className={classes.wrapper}>
            <Typography variant="h6">City not found.</Typography>
            <Typography variant="h6">Please try another search.</Typography>
        </Box>
        : null;  
}

const mapStateToProps = (state) => {
    const { 
        city,
        cityNotFound,
        currentWeather,
        currentTemperature,
        forecast,
        displayStatistics,
    } = state.fetchReducer;
    return { 
        city,
        cityNotFound,
        currentWeather,
        currentTemperature,
        forecast,
        displayStatistics    
    }
}

export default connect(mapStateToProps, { showStatistics })(SectionForecast);