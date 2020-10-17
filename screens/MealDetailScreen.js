import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

import { MEALS } from '../data/dummy-data';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>MealDetailScreen</Text>
        </View>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam("mealId");
    const mealDetails = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: mealDetails.title,
        headerRight: ()=> (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Favorite" iconName="ios-star" onPress={()=>console.log("new fav")} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default MealDetailScreen