import React from 'react';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton';

import { MEALS } from '../data/dummy-data';

const dummyFavs = MEALS.filter(meal=> meal.id === "m1" || meal.id === "m2");

const FavoritesScreen = props =>{
    return <MealList listData={dummyFavs} navigation={props.navigation} />
}

FavoritesScreen.navigationOptions =(navData)=> {
    return {
        headerTitle: "Your favourites",
        headerLeft:()=> (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item title="Menu"
                    iconName={Platform.OS === 'ios'? "ios-menu" : "md-menu"}
                    onPress={()=>{navData.navigation.toggleDrawer()}}
                />
            </HeaderButtons>
        )
    }
}



export default FavoritesScreen;