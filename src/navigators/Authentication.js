import React from 'react';
import Authentication_screens from "../screens/Authentication";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()
const state = {}

const Authentication = () => {

    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name={"AuthRoot"} component={Authentication_screens.AuthRoot} />
            <Stack.Screen name={"SignIn"} component={Authentication_screens.SignIn} />
            <Stack.Screen name={"CreateAccount"} component={Authentication_screens.CreateAccount} />
        </Stack.Navigator>
    )
}

export default Authentication