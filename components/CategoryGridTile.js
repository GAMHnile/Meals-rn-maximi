import React from 'react';

import {
    View,
    TouchableOpacity,
    TouchableNativeFeedback,
    Text,
    StyleSheet,
    Platform
} from 'react-native';

const CategoryGridItem = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.container}>
            <TouchableCmp style={{flex: 1}} onPress={props.onSelect} >
                <View style={{ ...styles.gridItem, ...{ backgroundColor: props.color } }} >
                    <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 20,
        overflow: Platform.OS==="android" && Platform.Version >= 21? "hidden" : "visible",
        margin: 15,
        elevation: 5,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2
    },
    gridItem: {
        flex: 1,
        height: 150,
        borderRadius: 20,
        padding: 15,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    title: {
        fontFamily: "open-sans-bold",
        textAlign: "right",
        fontSize: 22
    }
});

export default CategoryGridItem;