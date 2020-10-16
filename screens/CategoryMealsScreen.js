import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMeals = props =>{
    const catId = props.navigation.getParam("categoryId")
    const selectedCat = CATEGORIES.find(cat=> cat.id === catId);
    return (
        <View style={styles.screen}>
            <Text>{selectedCat.title}</Text>
            <Button title="Meal details" onPress={()=>{
                props.navigation.navigate("MealDetail")
            }} />
        </View>
    );
}

const styles =StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

CategoryMeals.navigationOptions = (navigationData)=>{
    const catId = navigationData.navigation.getParam("categoryId")
    const selectedCat = CATEGORIES.find(cat=> cat.id === catId);

    return {
        headerTitle: selectedCat.title
    }
}

export default CategoryMeals;