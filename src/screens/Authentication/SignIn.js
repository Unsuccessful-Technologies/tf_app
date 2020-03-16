import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Center, Colors} from "../../utils/styles";
import TFForm from "../../utils/TFForm";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../common/Loading";
import {LoginUser} from "../../store/actions/user";
import {loginCancel} from "../../store/actionTypes";

const SignInForm = {
    "user": {
        title: "User ID / Phone / Email",
        value: ''
    },
    "password": {
        title: "Password",
        value: ''
    }
}

const SignIn = props => {
    const { navigation } = props
    const UserState = useSelector(state => state.user)
    const dispatch = useDispatch();

    const handleSubmit = (form) => {
        const body = { user: form.user.value, password: form.password.value }
        dispatch(LoginUser(body))
    }

    const handleCancel = () => {
        dispatch(loginCancel())
        navigation.navigate('AuthRoot')
    }

    console.log(UserState)

    if(UserState.loading) return <Loading/>

    return (
        <View style={styles.screen}>
            <View style={styles.title_container}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.section_container}>
                <TFForm
                    inputs={SignInForm}
                    style={{backgroundColor:Colors.background}}
                    InputsStyle={{justifyContent: "flex-start"}}
                    TitleStyle={{textTransform: "uppercase"}}
                    TextStyle={{borderColor:Colors.btn_prime}}
                    btn1={{handler: handleSubmit, title: "Submit"}}
                    btn2={{handler: handleCancel, title: "Cancel"}}
                />
            </View>
            <View style={{...styles.section_container, backgroundColor: Colors.btn_prime, justifyContent: "flex-start", alignItems: "center"}}>
                {
                    (UserState.error) ? (
                        <Text style={{fontWeight: "bold",color: "red"}}>{ (UserState.error.message) ? UserState.error.message : "Unknown Error" }</Text>
                    ) : null
                }
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

export default SignIn;