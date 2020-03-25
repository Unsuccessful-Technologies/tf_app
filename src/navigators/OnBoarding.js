import React from 'react';
import Onboarding_screens from "../screens/OnBoarding";
import { createStackNavigator } from "@react-navigation/stack";
import ParentForm from "../forms/ParentForm";
import GuardianForm from "../forms/GuardianForm";
import {GUARDIAN_ADD, GUARDIAN_UPDATE, PARENT_ADD, PARENT_UPDATE} from "../store/actionTypes";

export const OnBoarding_Headers = {
    Parent: "Parent Information",
    Guardian: "Guardian Invitations"
}

const ScreenNames = {
    Parent: "ParentInfo",
    Guardian: "GuardianInfo",
    Review: "Review"
}

const options = ({route}) => ({
    title: route.params.title
})

const ParentParams = {
    title: OnBoarding_Headers.Parent,
    nextScreen: ScreenNames.Guardian,
    dataSelector: "parents",
    btnTitles: {next:"Invite Guardians",add:"Add Another Parent"},
    index: 0
}

const GuardianParams = {
    title: OnBoarding_Headers.Guardian,
    nextScreen: ScreenNames.Review,
    dataSelector: "guardians",
    btnTitles: {next:"Review",add:"Invite Another Guardian"},
    index: 0
}

const Stack = createStackNavigator()

const OnBoarding = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={ScreenNames.Parent}
                component={Onboarding_screens.ArrayDataForm}
                initialParams={ParentParams}
                options={options}
            />
            <Stack.Screen
                name={ScreenNames.Guardian}
                component={Onboarding_screens.ArrayDataForm}
                initialParams={GuardianParams}
                options={options}
            />
            <Stack.Screen
                name={ScreenNames.Review}
                component={Onboarding_screens.Review}
            />
        </Stack.Navigator>
    )
}

export default OnBoarding