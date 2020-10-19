import React from 'react';
import { StyleSheet, FlatList, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';

import CustomHeaderButton from '../components/CustomHeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: "CategoryMeals", params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}
            />
        );
    }
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

});

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "All Categories",
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item title="Menu"
                    iconName={Platform.OS === "ios" ? "ios-menu" : "md-menu"} 
                    onPress={()=>{navData.navigation.toggleDrawer()}}
                    />
            </HeaderButtons>
        )
    }
}

export default CategoriesScreen;