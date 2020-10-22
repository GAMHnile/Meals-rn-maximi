import { MEALS } from '../../data/dummy-data';
import { mealsTypes } from './meals.actions';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action)=>{
    switch (action.type) {
        case mealsTypes.TOGGLE_FAVORITE:
            const mealIndex = state.favoriteMeals.findIndex((meal)=>meal.id === action.payload);
            if(mealIndex >= 0 ){
                const updatedFavMeals = [...state.favoriteMeals];
                const newFavMeal = updatedFavMeals.filter(meal=> meal.id !== action.payload);
                return {...state, favoriteMeals: newFavMeal};
            }else{
                const updatedFavMeals = [...state.favoriteMeals];
                const mealToAdd = state.meals.find((meal)=> meal.id === action.payload);
                return {...state, favoriteMeals: updatedFavMeals.concat(mealToAdd)};
            }
        case mealsTypes.SET_FILTERS:
            const appliedFilters = action.payload;
            const updatedFilteredMeals = state.meals.filter(meal=>{
                if(appliedFilters.gluttenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                    return false;
                }
                if(appliedFilters.vegan && !meal.isVegan){
                    return false;
                }
                if(appliedFilters.vegetarian && meal.isVegetarian){
                    return false
                }
                return true;
            });

            return {...state, filteredMeals: updatedFilteredMeals }

        default:
            return state;
    }

}

export default mealsReducer;