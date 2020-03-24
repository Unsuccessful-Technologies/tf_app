import React, { useReducer }from 'react';
import {View, TextInput, StyleSheet, Text, KeyboardAvoidingView, ScrollView} from "react-native";
import {Center} from "./styles";
import TFButton from "./TFButton";
import Logger from "./Logger";

const formReducer = (state, action) => {
    const { key, value } = action
    const newValues = {...state.values}
    const newState = {...state}
    newValues[key].value = value
    newState.values = newValues
    return newState
}

const TFForm = props => {
    const { btn1, btn2, inputs, style, InputsStyle, InputStyle, TitleStyle, TextStyle, BtnContainerStyle, BtnStyle } = props
    const { handler: btn1_handler, title: btn1_title } = btn1
    const { handler: btn2_handler, title: btn2_title } = btn2

    const values = {}
    const validities = {}

    Object.entries(inputs).forEach(input => {
        values[input[0]] = {value: input[1].value, title: input[1].title}
        validities[input[0]] = (input[1].validation) ? input[1].validation : null
    })

    const initialForm = {
        values,
        validities,
        formIsValid: false
    }

    const [formState, dispatch] = useReducer(formReducer, initialForm)

    const changeHandler = (key, value) => {
        dispatch({key, value})
    }

    const Handler = (HandleFunction) => {
        Logger('TFForm.js:Handler', formState.values)
        HandleFunction(formState.values)
    }

    return (
        <KeyboardAvoidingView behavior={"padding"} style={{...styles.container,...style}}>
                <View style={{...styles.inputs_container, ...InputsStyle}}>
                    {
                        Object.entries(formState.values).map(entry => {
                            return (
                                <View key={entry[0]} style={{...styles.input_container,...InputStyle}}>
                                    <Text style={{...styles.input_title,...TitleStyle}}>{entry[1].title}</Text>
                                    <TextInput
                                        style={{...styles.input_text,...TextStyle}}
                                        value={entry[1].value}
                                        onChangeText={changeHandler.bind(this, entry[0])}
                                        secureTextEntry={!!(entry[0].toLowerCase() === 'password')}
                                    />
                                </View>
                            )
                        })
                    }
                </View>

            <View style={{...styles.buttons_container,...BtnContainerStyle}}>
                <TFButton onPress={() => Handler(btn1_handler)} style={{...styles.button, ...BtnStyle}}>{btn1_title}</TFButton>
                <TFButton onPress={() => Handler(btn2_handler)} myType={'second'} style={{...styles.button, ...BtnStyle}}>{btn2_title}</TFButton>
            </View>

        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container:{
        ...Center
    },
    inputs_container:{
        flex: 3,
        justifyContent: "space-around",
        width: "100%"
    },
    input_container: {
        margin: 10,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",

    },
    buttons_container:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        flex: 1
    },
    input_title: {
        width: "100%",
        textAlign: "left",
        paddingLeft: 32,
        fontSize: 16,
        fontWeight: "bold"
    },
    input_text: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        width: "80%",
        margin: 10,
        padding: 10,
        paddingLeft: 25
    },
    button: {
        flex: 1,
        paddingHorizontal: 20
    }
})

export default TFForm