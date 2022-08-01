import {ADD_THEME} from './theme-actions';

export const themeReducer = (state = 'light', {type, payload}) => {
    switch(type) {
        case ADD_THEME: 
        return payload;

        default: 
        return state;
    }
}