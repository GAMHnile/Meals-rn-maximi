import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import COLORS from '../constants/Colors';

const stackDefaultNavOpt = {
    headerStyle: {
        backgroundColor: Platform.OS==="android"? COLORS.primaryColor: ""
    },
    headerTintColor: Platform.OS==="android"? "white" : COLORS.primaryColor
}

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: stackDefaultNavOpt
});

const FavNavigator = createStackNavigator({
    Favourite: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: stackDefaultNavOpt
})

const tabScreensConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabData)=>{
                return <Ionicons name="ios-restaurant" size={25} color={tabData.tintColor} />
            },
            tabBarColor: COLORS.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabData)=>{
                return <Ionicons name="ios-star" size={25} color={tabData.tintColor} />
            },
            tabBarColor: COLORS.accentColor
        }
    }
};

const MealsFavTabNavigator = Platform.OS === "android" && Platform.Version>=21?
createMaterialBottomTabNavigator(tabScreensConfig,{
    activeColor: "white",
    shifting: true,
    barStyle: {
        backgroundColor: COLORS.primaryColor
    }
})
:
createBottomTabNavigator(tabScreensConfig, {
    tabBarOptions: {
        activeTintColor: COLORS.accentColor
    }
})

export default createAppContainer(MealsFavTabNavigator);