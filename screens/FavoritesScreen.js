import React from 'react';
import MealList from '../components/MealList';

import { MEALS } from '../data/dummy-data';

const dummyFavs = MEALS.filter(meal=> meal.id === "m1" || meal.id === "m2");

const FavoritesScreen = props =>{
    return <MealList listData={dummyFavs} navigation={props.navigation} />
}

FavoritesScreen.navigationOptions = {
    headerTitle: "Your favourites"
}



export default FavoritesScreen;