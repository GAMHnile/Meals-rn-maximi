import { combineReducers } from 'redux';
import mealsReducer from './meals/meals.reducer';

const rootReducer = combineReducers({
    meals: mealsReducer
})

export default rootReducer;