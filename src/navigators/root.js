import React, {useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Authentication from "./Authentication";
import Home from "./Home";
import { useSelector } from "react-redux";
import OnBoarding from "./OnBoarding";

const Root = () => {
    const user = useSelector(state => state.user)
    const { token, isNewUser } = user

    return (
        <NavigationContainer>
            {
                token == null ? (
                    <Authentication/>
                ) : (
                    (isNewUser == null) ? <OnBoarding/> : <Home/>
                )
            }
        </NavigationContainer>
    )
}

export default Root