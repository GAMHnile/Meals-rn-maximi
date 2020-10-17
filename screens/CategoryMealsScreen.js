import React from 'react';

import MealList from '../components/MealList';

import { CATEGORIES, MEALS } from '../data/dummy-data';


const CategoryMeals = props =>{
    
    const catId = props.navigation.getParam("categoryId")
    const displayedMeals =MEALS.filter(meal=> meal.categoryIds.indexOf(catId) >= 0 );
    return <MealList listData={displayedMeals} navigation={props.navigation}/>
}


CategoryMeals.navigationOptions = (navigationData)=>{
    const catId = navigationData.navigation.getParam("categoryId")
    const selectedCat = CATEGORIES.find(cat=> cat.id === catId);

    return {
        headerTitle: selectedCat.title
    }
}

export default CategoryMeals;