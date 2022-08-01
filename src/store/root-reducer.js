import { combineReducers } from "redux";
import { controlsReducer } from "./controls/controls-reducer";
import { countersReducer, countriesReducer } from "./countries/countries-reducer";

import { themeReducer } from './theme/theme-reducer';


export const rooReducer = combineReducers({
theme: themeReducer,
countries: countersReducer,
control: controlsReducer
});