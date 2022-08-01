
export const SET_FILTER = 'SET_FILTER';
export const SET_REGION = 'SET_REGION';

export const setFilter = (search) => ({
    type: SET_FILTER,
    payload: search
})

export const setRegion = (region) => ({
    type: SET_REGION,
    payload: region
})