import React, { useReducer }from 'react';
import {View, TextInput, StyleSheet, Text} from "react-native";

const formReducer = (state, action) => {
    const { key, value } = action
    const newValues = {...state.values}
    const newState = {...state}
    newValues[key] = value
    newState.values = newValues
    return newState
}

const TFForm = props => {
    const { submit, cancel, inputs, style } = props
    const values = {}
    const validities = {}

    Object.entries(inputs).forEach(input => {
        values[input[0]] = input[1].value
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
        <View style={{flex: 1, width: "100%", justifyContent:"flex-start", alignItems: "center"}}>
            <View style={styles.inputs_container}>
                {
                    Object.entries(formState.values).map(entry => {
                        console.log(entry)
                        return (
                            <View style={styles.input_container}>
                                <Text>{entry[0]}</Text>
                                <TextInput
                                    value={entry[1]}
                                    onChangeText={changeHandler.bind(this, entry[0])}
                                />
                            </View>
                        )
                    })
                }
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{},
    inputs_container:{
        flex: 1,
        width: "100%",
    },
    input_container: {
        height: "20%",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    buttons_container:{}
})

export default TFForm