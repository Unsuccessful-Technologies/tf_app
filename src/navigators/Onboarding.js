import React from 'react';
import Onboarding_screens from "../screens/Onboarding";
import { createStackNavigator } from "@react-navigation/stack";
import ParentForm from "../forms/ParentForm";
import GuardianForm from "../forms/GuardianForm";
import {addGuardian, updateGuardian} from "../store/actions/guardians";
import {addParent, updateParent} from "../store/actions/parents";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../utils/HeaderButton";

export const OnBoarding_Headers = {
    Parent: "Parent Information",
    Guardian: "Guardian Invitations"
}

const ScreenNames = {
    Parent: "ParentInfo",
    Guardian: "GuardianInfo",
    Review: "Review"
}

const options = ({navigation, route}) => ({
    title: route.params.title,
    headerLeft: () => {
        if(!navigation.canGoBack()) return null
        return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title={"Back"}
                iconName={"ios-arrow-back"}
                onPress={() => {
                    navigation.navigate({key: route.params.lastKey, params: {forwardKey: route.key}})
                }}
            />
        </HeaderButtons>)
    }
})

const ParentParams = {
    title: OnBoarding_Headers.Parent,
    index: 0,
    baseForm: ParentForm,
    nextScreen: ScreenNames.Guardian,
    actions: {add: addParent, update: updateParent},
    dataSelector: "parents",
    btnTitles: {next:"Invite Guardians",add:"Add Another Parent"}
}

const GuardianParams = {
    title: OnBoarding_Headers.Guardian,
    index: 0,
    baseForm: GuardianForm,
    nextScreen: ScreenNames.Review,
    actions: {add: addGuardian, update: updateGuardian},
    dataSelector: "guardians",
    btnTitles: {next:"Review",add:"Invite Another Guardian"}
}

const Stack = createStackNavigator()

const Onboarding = () => {

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

export default Onboarding