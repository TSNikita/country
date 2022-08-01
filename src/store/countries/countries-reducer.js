import { SET_COUNTER, SET_ERROR, SET_LOADING } from "./countries-action";

const initialState = {
    status: 'idel', // 'received', 'loading', 'rejected'
    error: null,
    list: []
}

export const countersReducer = ( state = initialState, {type, payload}) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null
            }
        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: payload
            }
        case SET_COUNTER:
            return {
                ...state,
                status: 'received',
                list: payload
            }
        default:
            return state;
        
    }
}