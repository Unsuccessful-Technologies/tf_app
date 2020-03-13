import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import {Center, Colors, Space_A, Space_B} from "../../utils/styles";
import TFButton from "../../utils/TFButton";


const AuthRoot = props => {
    const { navigation } = props
    return (
        <View style={styles.screen}>
            <View style={styles.title_container}>
                <View style={styles.section_container}></View>
                <Image source={require('../../../assets/icon.png')} style={styles.logo} resizeMode={'contain'} />
                <Text style={styles.title}>Tooth Fairy App</Text>
            </View>
            <View style={styles.section_container}>
                <TFButton style={{width:"70%", marginBottom: 16}} onPress={() => navigation.navigate('SignIn')}>Sign In</TFButton>
                <TFButton style={{width:"70%"}} myType={"second"} onPress={() => navigation.navigate('CreateAccount')}>Create Account</TFButton>
            </View>
            <View style={{...styles.section_container, marginBottom: 32}}>
                <TFButton style={{width:"90%", marginBottom: 16}}>Share With Family</TFButton>
                <TFButton style={{width:"90%"}} myType={"second"}>Share With Friends</TFButton>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        ...Space_A,
        backgroundColor: Colors.background
    },
    title_container: {
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
    },
    section_container:{
        ...Center,
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

export default AuthRoot;