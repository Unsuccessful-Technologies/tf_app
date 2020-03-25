import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Center, Colors} from "../../utils/styles";
import { useSelector, useDispatch } from "react-redux";
import Logger from "../../utils/Logger";

const Review = props => {
    const { navigation, route } = props
    const { parents, guardians } = useSelector(state => state)
    const dispatch = useDispatch();
    Logger("Review.js", {parents,guardians})
    return (
        <View style={styles.screen}>
            <View style={styles.section_container}>
                <Text>{JSON.stringify(parents)}</Text>
                <Text>{JSON.stringify(guardians)}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        ...Center,
        backgroundColor: Colors.background
    },
    title_container: {
        ...Center,
        backgroundColor: Colors.btn_prime,
        width: "100%"
    },
    section_container:{
        flex: 1,
        justifyContent: "flex-start",
        alignContent: "center",
        width: "100%",
        paddingVertical: 20
    },
    logo: {
        flex: 3,
    },
    title: {
        fontSize: 48,
        fontWeight: "bold",
        letterSpacing: 4,
        color: "#fff",
        textTransform: "uppercase"
    }
});

export default Review;