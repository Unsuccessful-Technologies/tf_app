import React from 'react';
import Onboarding_screens from "../screens/Onboarding";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

const Onboarding = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={"ParentInfo"} component={Onboarding_screens.ParentInfo} initialParams={{index: 0}} options={{title:"Parent Information"}} />
        </Stack.Navigator>
    )
}

export default Onboarding