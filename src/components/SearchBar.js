import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Box } from '@material-ui/core';

import { searchCity, fetchData } from '../actions';

const useStyles = makeStyles((theme) => ({
  searchBar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 350,
  },
  input: {
    width: 350,
    marginBottom: theme.spacing(2)
  },
  searchButton: {
    width: 350,
  }
}))

const SearchBar = (props) => {
    const classes = useStyles(props);

    const onInputChange = e => {
        props.searchCity(e.target.value)
    };

    const onFormSubmit = e => {
        e.preventDefault();
        props.fetchData(props.searchPhrase);
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <Box className={classes.searchBar}>
                    <TextField
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Enter city"
                        onChange={onInputChange}
                        value={props.searchPhrase}>
                    ></TextField>
                    <Button
                        className={classes.searchButton}
                        type="submit" 
                        variant="contained"
                        color="primary" 
                        onClick={onFormSubmit}
                    >Search</Button>
                </Box>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { searchPhrase, lat, lon } = state.fetchReducer;
    return { 
        searchPhrase,
        lat,
        lon,        
    }
}

export default connect(mapStateToProps, { fetchData, searchCity })(SearchBar);