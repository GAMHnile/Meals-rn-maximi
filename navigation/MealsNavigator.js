import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import COLORS from '../constants/Colors';

const stackDefaultNavOpt = {
    headerStyle: {
        backgroundColor: Platform.OS==="android"? COLORS.primaryColor: ""
    },
    headerTintColor: Platform.OS==="android"? "white" : COLORS.primaryColor,
    headerTitleStyle: {
        fontFamily: "open-sans-bold"
    },
    headerBackTitleStyle: {
        fontFamily: "open-sans" 
    }
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
            tabBarColor: COLORS.primaryColor,
            tabBarLabel:Platform.OS === "android"? <Text style={{fontFamily: "open-sans-bold"}} >Meals</Text>: "Meals"
        },
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabData)=>{
                return <Ionicons name="ios-star" size={25} color={tabData.tintColor} />
            },
            tabBarColor: COLORS.accentColor,
            tabBarLabel:Platform.OS === "android"? <Text style={{fontFamily: "open-sans-bold"}} >Favorites</Text>: "Favorites"
        }
    }
};

const MealsFavTabNavigator = Platform.OS === "android" && Platform.Version>=21?
createMaterialBottomTabNavigator(tabScreensConfig,{
    activeColor: "white",
    shifting: true,
    barStyle: {
        backgroundColor: COLORS.primaryColor
    },

})
:
createBottomTabNavigator(tabScreensConfig, {
    tabBarOptions: {
        activeTintColor: COLORS.accentColor,
        labelStyle: {
            fontFamily: "open-sans-bold"
        }
    },
})

//FilterScreen placed in a navigator to enable header on it.
const FilterNavigator = createStackNavigator({
    Filter: FiltersScreen
},{
    defaultNavigationOptions: stackDefaultNavOpt
})

const MainNavigator = createDrawerNavigator({
    MealsFav: { screen: MealsFavTabNavigator, navigationOptions:{
        drawerLabel: "Meals"
    }},
    Filter: FilterNavigator
}, {
    contentOptions: {
        activeTintColor: COLORS.accentColor,
        labelStyle: {
            fontFamily: "open-sans-bold"
        }
    }
})

export default createAppContainer(MainNavigator);