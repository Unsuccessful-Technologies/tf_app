import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import {Center, Colors, Space_A, Space_B} from "../../utils/styles";
import TFButton from "../../utils/TFButton";


const AuthRoot = props => {
    const { navigation } = props
    return (
        <View style={styles.screen}>
            <View style={styles.title_container}>
                <View style={{...Center}}></View>
                <Image source={require('../../../assets/icon.png')} style={styles.logo} resizeMode={'contain'} />
                <Text style={styles.title}>Tooth Fairy App</Text>
            </View>
            <View style={{...styles.section_container}}>
                <TFButton style={{width:"50%", flex: 1, paddingVertical: 5}} onPress={() => navigation.navigate('SignIn')}>Sign In</TFButton>
                <TFButton style={{width:"50%", flex: 1, paddingVertical: 5}} myType={"second"} onPress={() => navigation.navigate('CreateAccount')}>Create Account</TFButton>
            </View>
            <View style={{...styles.section_container}}>
                <TFButton style={{width:"70%", flex: 1, paddingVertical: 5}}>Share With Family</TFButton>
                <TFButton style={{width:"70%", flex: 1, paddingVertical: 5}} myType={"second"}>Share With Friends</TFButton>
            </View>
            <View style={{...Center}}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        ...Center,
        backgroundColor: Colors.background
    },
    title_container: {
        flex: 3,
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
    },
    section_container:{
        flex: 1,
        ...Center,
        width: "100%",
        paddingVertical: 10
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

export default AuthRoot;