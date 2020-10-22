import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props =>{
    const favMeals = useSelector((state)=> state.meals.favoriteMeals);

    if(favMeals.length === 0 || !favMeals){
        return (
            <View style={styles.content}>
                <DefaultText>No favorite meals added yet. Please add some</DefaultText>
            </View>
        );
    }

    return <MealList listData={favMeals} navigation={props.navigation} />
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default FavoritesScreen;