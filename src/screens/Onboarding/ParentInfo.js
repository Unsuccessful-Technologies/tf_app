import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Center, Colors} from "../../utils/styles";
import TFForm from "../../utils/TFInput";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../common/Loading";
import {LoginUser} from "../../store/actions/user";
import {loginCancel} from "../../store/actionTypes";
import Logger from "../../utils/Logger";

const ParentForm = {
    "fName": {
        title: "First Name",
        value: ''
    },
    "lName": {
        title: "Last Name",
        value: ''
    },
    "phone": {
        title: "Phone Number",
        value: ''
    },
    "email": {
        title: "Email",
        value: ''
    },
    // "isPrimary": {
    //     title: "Primary Contact",
    //     value: ["Yes","No"]
    // }
}

const ParentInfo = props => {
    const { navigation } = props
    const dispatch = useDispatch();

    const handleSubmit = (form) => {
        const body = {
            "fName": '',
            "lName": '',
            "phone": '',
            "email": '',
        }
        Object.keys(body).forEach(key => {
            body[key] = form[key].value
        })
        Logger('ParentInfo.js handleSubmit', body)
    }

    const handleCancel = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.screen}>
            <View style={styles.section_container}>
                <TFForm
                    inputs={ParentForm}
                    style={{backgroundColor:Colors.background}}
                    InputsStyle={{justifyContent: "flex-start", paddingTop: 20}}
                    TitleStyle={{textTransform: "uppercase"}}
                    TextStyle={{borderColor:Colors.btn_prime}}
                    BtnContainerStyle={{flexDirection:"column", paddingVertical: 40}}
                    BtnStyle={{flex: 1, paddingVertical: 10}}
                    submit={handleSubmit}
                    cancel={handleCancel}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        ...Center,
        backgroundColor: Colors.background
    },
    title_container: {
        ...Center,
        backgroundColor: Colors.btn_prime,
        width: "100%"
    },
    section_container:{
        flex: 1,
        justifyContent: "flex-start",
        alignContent: "center",
        width: "100%",
        paddingVertical: 20
    },
    logo: {
        flex: 3,
    },
    title: {
        fontSize: 48,
        fontWeight: "bold",
        letterSpacing: 4,
        color: "#fff",
        textTransform: "uppercase"
    }
});

export default ParentInfo;