import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {StyleSheet} from "react-native";
import {Colors} from "./styles";

const TFButton = props => {
    const { myType, onPress, children, style } = props

    let btnColor = {
        backgroundColor: Colors.btn_prime,
        borderColor: Colors.btn_second
    }

    if(myType && myType == 'second'){
        btnColor = {
            backgroundColor: Colors.btn_second,
            borderColor: Colors.btn_prime
        }
    }

    return (
        <TouchableOpacity onPress={onPress} style={{...style}}>
            <View style={{...styles.button, ...btnColor}}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderWidth: 4,
        borderRadius: 8,
        alignItems: "center"
    },
    buttonText: {
        color: Colors.background,
        fontSize: 18
    }
})

export default TFButton