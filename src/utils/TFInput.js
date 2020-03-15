import React, { useReducer }from 'react';
import {View, TextInput, StyleSheet, Text} from "react-native";
import {Center} from "./styles";
import TFButton from "./TFButton";

const formReducer = (state, action) => {
    const { key, value } = action
    const newValues = {...state.values}
    const newState = {...state}
    newValues[key].value = value
    newState.values = newValues
    return newState
}

const TFForm = props => {
    const { submit, cancel, inputs, style, InputsStyle, InputStyle, TitleStyle, TextStyle } = props
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

    return (
        <View style={{...Center,...style}}>
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
            <View style={styles.buttons_container}>
                <TFButton onPress={() => submit(formState.values)}>Submit</TFButton>
                <TFButton onPress={cancel} myType={'second'}>Cancel</TFButton>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{},
    inputs_container:{
        flex: 1,
        width: "100%",
        justifyContent: "space-around"
    },
    input_container: {
        margin: 10,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    buttons_container:{
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%"
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
    }
})

export default TFForm