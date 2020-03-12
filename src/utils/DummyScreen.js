import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Center } from "./styles";

const DummyScreen = props => {
    const { title } = props
    return (
        <View style={styles.screen}>
            <Text>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: Center
});

export default DummyScreen;