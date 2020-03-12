import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Authentication from "./Authentication";
import Home from "./Home";

const state = {
    userToken: null
}

const Root = () => {

    return (
        <NavigationContainer>
            {
                state.userToken == null ? (
                    <Authentication/>
                ) : (
                    <Home/>
                )
            }
        </NavigationContainer>
    )
}

export default Root