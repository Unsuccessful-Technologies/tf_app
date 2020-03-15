import React from 'react';
import { View, StyleSheet, ActivityIndicator } from "react-native";
import {Colors} from "../../utils/styles";


const Loading = props => {

    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color={"#fff"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.btn_prime,
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    }
})

export default Loading