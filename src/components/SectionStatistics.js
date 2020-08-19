import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { min, max, mean, mode } from '../utils/helperFunctions';

const useStyles = makeStyles((theme) => ({
  stats: {
    backgroundColor: theme.palette.action.hover,
    padding: theme.spacing( 1, 0.5),
  },
  statsLabel: {
    textAlign: 'left',
    backgroundColor: theme.palette.action.hover,
    padding: theme.spacing( 1, 0.5),
    gridColumnEnd: 'span 2',
}
}))

const SectionForecastOneDay = props => {
    const classes = useStyles(props);
    const { fiveDaysForecast } = props;

    const morningTemps = fiveDaysForecast.map(day => Math.round(day.temp.morn));
    const dayTemps = fiveDaysForecast.map(day => Math.round(day.temp.day));
    const nightTemps = fiveDaysForecast.map(day => Math.round(day.temp.night));
    const humidityValues = fiveDaysForecast.map(day => day.humidity);

    const fullData = [morningTemps, dayTemps, nightTemps, humidityValues];
    
    const minData = min(fullData);
    const maxData = max(fullData);
    const meanData = mean(fullData);
    const modeData = mode(fullData);

    const renderData = data => data.map((d, index) => <Typography key={index} className={classes.stats}>{d ? index < 3 ? d + "°C" : d + "%" : "N/A"}</Typography>);

    return (
        <>
            <Typography className={classes.statsLabel}>Min</Typography>
            {renderData(minData)}
            <Typography className={classes.statsLabel}>Max</Typography>
            {renderData(maxData)}
            <Typography className={classes.statsLabel}>Mean</Typography>
            {renderData(meanData)}
            <Typography className={classes.statsLabel}>Mode</Typography>
            {renderData(modeData)}
        </>
    )
}

export default SectionForecastOneDay;