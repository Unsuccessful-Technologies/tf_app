import React from 'react'
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import {Colors} from "./styles";

const CustomHeaderButton = props => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={Colors.btn_prime} />
}

export default CustomHeaderButton