import React from 'react';
import Onboarding_screens from '../screens/Onboarding';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()
const state = {}

const Authentication = () => {

    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name={"Login"} component={Onboarding_screens.Login} />
        </Stack.Navigator>
    )
}

export default Authentication