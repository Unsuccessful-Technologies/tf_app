import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import {Center, Colors, Space_A, Space_B} from "../../utils/styles";
import TFButton from "../../utils/TFButton";
import TFForm from "../../utils/TFInput";


const SignIn = props => {
    const { navigation } = props

    const SignInForm = {
        "User Id": {
            value: ''
        },
        "Password": {
            value: ''
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.title_container}>
                <View style={styles.section_container}></View>
                <Image source={require('../../../assets/icon.png')} style={styles.logo} resizeMode={'contain'} />
                <Text style={styles.title}>Sign In</Text>
            </View>
            <TFForm inputs={SignInForm} style={styles.section_container}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        ...Space_A,
        backgroundColor: Colors.background
    },
    title_container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
    },
    section_container:{
        ...Center,
        justifyContent: "flex-start",
        width: "100%",
    },
    logo: {
        flex: 3,
    },
    title: {
        flex: 1,
        fontSize: 24,
        fontWeight: "bold",
    }
});

export default SignIn;