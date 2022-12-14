import { SET_FILTER, SET_REGION } from "./controls-action";

const initialState = {
    search: '',
    region: ''
}

export const controlsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case SET_FILTER: 
        return {
            ...state,
            search: payload
        }
        case SET_REGION: 
        return {
            ...state,
            region: payload
        }
        default: 
        return state;
    }
}