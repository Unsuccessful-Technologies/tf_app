import React, {useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Authentication from "./Authentication";
import Home from "./Home";
import { useSelector } from "react-redux";
import Onboarding from "./Onboarding";

const Root = () => {
    const user = useSelector(state => state.user)
    const { token, isNewUser } = user

    return (
        <NavigationContainer>
            {
                token == null ? (
                    <Authentication/>
                ) : (
                    (isNewUser == null) ? <Onboarding/> : <Home/>
                )
            }
        </NavigationContainer>
    )
}

export default Root