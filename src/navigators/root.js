import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Authentication from "./Authentication";
import Home from "./Home";
import { useSelector } from "react-redux";
import Onboarding from "./Onboarding";

const Root = () => {
    const user = useSelector(state => state.user)

    return (
        <NavigationContainer>
            {
                user.token == null ? (
                    <Authentication/>
                ) : (
                    (user.parents.length > 0) ? <Home/> : <Onboarding/>
                )
            }
        </NavigationContainer>
    )
}

export default Root