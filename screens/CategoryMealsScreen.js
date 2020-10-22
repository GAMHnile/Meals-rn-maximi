import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

import { CATEGORIES } from '../data/dummy-data';


const CategoryMeals = props =>{
    const availableMeals = useSelector((state)=>state.meals.filteredMeals);

    const catId = props.navigation.getParam("categoryId")
    const displayedMeals =availableMeals.filter(meal=> meal.categoryIds.indexOf(catId) >= 0 );

    if(displayedMeals.length === 0){
        return (
            <View style={styles.content}>
                <Text>No meals to display. Please check your filters</Text>
            </View>
        );
    }

    return <MealList listData={displayedMeals} navigation={props.navigation}/>
}


CategoryMeals.navigationOptions = (navigationData)=>{
    const catId = navigationData.navigation.getParam("categoryId")
    const selectedCat = CATEGORIES.find(cat=> cat.id === catId);

    return {
        headerTitle: selectedCat.title
    }
}

const styles = StyleSheet.create({
    content: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})

export default CategoryMeals;