import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = props => {
    return (
        //<View style={styles}>
            <TouchableOpacity style={styles.mealContainer} onPress={props.onSelectMeal}>
                <View style={styles.mealItem}>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground style={styles.backgroundImage} source={{ uri: props.image }}>
                           <View style={styles.titleContainer}>
                            <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration}</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        //</View>
    );
}

const styles = StyleSheet.create({
    mealContainer: {
        overflow: "hidden",
        borderRadius: 10,
        width: "100%",
        marginVertical: 10
       
    },
    mealItem: {
        height: 200,
        width: "100%",
    },
    mealRow: {
        flexDirection: "row",
        backgroundColor: "#f5f5f5",
    },
    mealHeader: {
        height: "85%",
    },
    mealDetail: {
        height: "15%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    },
    titleContainer: {
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        textAlign: "center",
        color: "white",
        fontFamily: "open-sans-bold",
        fontSize: 18,
    }
});

export default MealItem;