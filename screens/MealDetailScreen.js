import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';

import { MEALS } from '../data/dummy-data';

const ListItem = props => {
    return (
        <View style={{...styles.ListItem,...props.style}} >
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}


const MealDetailScreen = props => {
    const mealId = props.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <ScrollView>
            <Image style={styles.image}  source={{ uri: selectedMeal.imageUrl }} />
            <View style={styles.description}>
                <DefaultText>{selectedMeal.duration}</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.subTitle}>Ingredients</Text>
            {
                selectedMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
                ))
            }
            <Text style={styles.subTitle}>Steps</Text>
            {
                selectedMeal.steps.map(step => (
                <ListItem style={{borderRadius: 10}} key={step}>{step}</ListItem>
                ))
            }
        </ScrollView>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam("mealId");
    const mealDetails = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: mealDetails.title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Favorite" iconName="ios-star" onPress={() => console.log("new fav")} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 250
    },
    description: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 15
    },
    ListItem: {
        borderColor: "#ccc",
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10
    },
    subTitle: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        textAlign: "center",
        marginVertical: 10
    }
});

export default MealDetailScreen