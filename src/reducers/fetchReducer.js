const initialState = {
    searchPhrase: '',
    city: '',
    lat: '',
    lon: '',
    currentWeather: '',
    currentTemperature: '',
    cityNotFound: false,
    forecast: [],
    displayStatistics: false,
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case 'SEARCH_CITY':
            return { ...state, searchPhrase: payload };
        case 'SEARCH_FAILED':
            return { ...state, cityNotFound: true };
        case 'FETCH_COORDINATES':
            return { 
                ...state,
                lat: payload.coord.lat,
                lon: payload.coord.lon,
                city: payload.name,
                currentWeather: payload.weather[0],
                currentTemperature: payload.main.temp,
                cityNotFound: false,
                displayStatistics: false,
            };
        case 'FETCH_DATA':
            return { ...state, forecast: payload };
        case 'SHOW_STATISTICS':
            return { ...state, displayStatistics: !state.displayStatistics };
        default:
            return state
    }
};