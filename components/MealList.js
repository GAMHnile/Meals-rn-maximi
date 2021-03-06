import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const MealList = props =>{
    const favoriteMeals = useSelector((state)=> state.meals.favoriteMeals);

    const renderedMeal = (itemData)=>{
        const isFavorite = favoriteMeals.some(meal=>meal.id === itemData.item.id);
        return (
            <MealItem 
            title={itemData.item.title} 
            onSelectMeal={()=>{
                props.navigation.navigate({routeName: "MealDetail", params: {
                    mealId: itemData.item.id,
                    mealTitle: itemData.item.title,
                    isFav: isFavorite
                }})
            }}
            image={itemData.item.imageUrl}
            complexity={itemData.item.complexity}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            />
        );
    }


    return (
        <View style={styles.list}>
            <FlatList 
            style={{width: "100%"}}
            data={props.listData} 
            keyExtractor={(item, index)=>{
                return item.id;
            }}
            renderItem={renderedMeal}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 10
    }
});

export default MealList;