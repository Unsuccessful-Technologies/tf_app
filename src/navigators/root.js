import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Authentication from "./Authentication";
import Home from "./Home";
import { useSelector } from "react-redux";

const Root = () => {
    const user = useSelector(state => state.user)

    return (
        <NavigationContainer>
            {
                user.token == null ? (
                    <Authentication/>
                ) : (
                    <Home/>
                )
            }
        </NavigationContainer>
    )
}

export default Root