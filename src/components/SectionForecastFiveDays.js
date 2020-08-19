import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

import SectionForecastOneDay from './SectionForecastOneDay';
import SectionStatistics from './SectionStatistics';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    alignItems: 'center',
    width: 350,
    borderTop: `1px solid ${theme.palette.primary.main}`,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    marginTop: 16,
  },
  header: {
    padding: theme.spacing( 1, 0.5),
  }
}))

const SectionForecastFiveDays = props => {
    const classes = useStyles(props);
    const { forecast, displayStatistics } = props;

    // Remove last three days from the forecast to limit results to 5 days
    const fiveDaysForecast = forecast.filter((f, index) => index < 5)

    const headers = ["", "", "Morning", "Day", "Night", "Humidity"];
    const renderHeaders = () => headers.map((h, index) => <Typography className={classes.header} key={index}>{h}</Typography>)
    const renderFiveDays = () => fiveDaysForecast.map(f => <SectionForecastOneDay dayForecast={f} key={f.dt} />);
    const renderStatistics = () => <SectionStatistics fiveDaysForecast={fiveDaysForecast} />

    return (
        <Box className={classes.grid}>
            {renderHeaders()}
            {renderFiveDays()}
            {displayStatistics ? renderStatistics() : null}
        </Box>
    )
}

export default SectionForecastFiveDays;