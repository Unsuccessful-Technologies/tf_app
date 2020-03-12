import React from 'react';
import DummyScreen from "../utils/DummyScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

const Home = () => {

    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name={"Home"}>
                {props => <DummyScreen {...props} title={"Dummy Home"}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default Home