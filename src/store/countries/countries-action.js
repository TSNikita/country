export const SET_COUNTER = 'SET_COUNTER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const setCounter = (counter) => ({
    type: SET_COUNTER,
    payload: counter
})

export const setLoading = () => ({
    type: SET_LOADING,
})

export const setError = (err) => ({
    type: SET_ERROR,
    payload: err
})

export const loadCountries = () => (dispatch, _, {client, api}) => {
dispatch(setLoading())
client(api.ALL_COUNTRIES)
    .then(({data}) => dispatch(setCounter(data)))
    .catch((error) => dispatch(setError(error.message)))

}