import openWeather from '../api/openWeather';

apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const searchCity = searchPhrase => {
    return { type: 'SEARCH_CITY', payload: searchPhrase };
}

export const fetchData = (searchPhrase) => async (dispatch, getState) => {
    await dispatch(fetchCoordinates(searchPhrase));
    const lat = getState().fetchReducer.lat;
    const lon = getState().fetchReducer.lon;
    dispatch(fetchForecast(lat, lon))
}

export const fetchCoordinates = searchPhrase => {
    return async dispatch => {
        try {
            const response = await openWeather.get(`/weather`, {
                params: {
                    q: searchPhrase,
                    units: "metric",
                    appid: apiKey,
                }
            });
            dispatch({ type: 'FETCH_COORDINATES', payload: response.data });
        } catch (err) {
            dispatch({ type: 'SEARCH_FAILED' });
        }  
    };
};

export const fetchForecast = (lat, lon) => {
    return async dispatch => {
        const response = await openWeather.get(`/onecall`, {
            params: {
                lat,
                lon,
                exclude: "current,hourly,minutely",
                units: "metric",
                appid: apiKey,
            }
        });
        dispatch({ type: 'FETCH_DATA', payload: response.data.daily });
    };
};

export const showStatistics = () => {
    return { type: 'SHOW_STATISTICS' };
};
