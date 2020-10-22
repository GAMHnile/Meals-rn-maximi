import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Platform, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';

import COLORS from '../constants/Colors';

//redux imports
import { useDispatch } from 'react-redux';
import { setFilters } from '../redux/meals/meals.actions';

const FilterItem = props => {
    return (
        <View style={styles.filterContainer}>
            <DefaultText>{props.label}</DefaultText>
            <Switch value={props.value}
                onValueChange={props.onValueChange}
                trackColor={{ true: COLORS.primaryColor, false: "#ccc" }}
                thumbColor={Platform.OS === "android" ? COLORS.primaryColor : ""}
            />
        </View>
    );
}

const FiltersScreen = props => {
    const { navigation } = props;
    const dispatch = useDispatch();

    const [isGluttenFree, setIsGluttenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilter = useCallback(()=>{
        const filterSnapshot = {
            gluttenFree: isGluttenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        // react-redux guarantees that dispatch will not change so it will not
        //cause recreation upon rerenders when used as a dependency
        dispatch(setFilters(filterSnapshot));
    }, [isGluttenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);


    useEffect(()=>{
        //calling setParams will change the navigation object and cause an infinite
        //useEffect loop so don't add it as a dependency
        navigation.setParams({save: saveFilter});
    },[saveFilter])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available filters/ Restrictions</Text>
            <FilterItem
                label="Glutten-free"
                value={isGluttenFree}
                onValueChange={newValue => setIsGluttenFree(newValue)}
            />
            <FilterItem
                label="Lactose-free"
                value={isLactoseFree}
                onValueChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterItem
                label="Vegan"
                value={isVegan}
                onValueChange={newValue => setIsVegan(newValue)}
            />
            <FilterItem
                label="Vegetarian"
                value={isVegetarian}
                onValueChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
    );
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Filter Meals",
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item title="Menu"
                    iconName={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                    onPress={() => { navData.navigation.toggleDrawer() }}
                />
            </HeaderButtons>
        ),
        headerRight: ()=>(
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item title="save" iconName={Platform.OS === "ios" ? "ios-save" : "md-save"} 
                onPress={()=>{
                    navData.navigation.getParam("save")();
                }} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"
    },
    filterContainer: {
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 15
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22
    }
});

export default FiltersScreen;