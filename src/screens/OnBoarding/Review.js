import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Center, Colors} from "../../utils/styles";
import { useSelector, useDispatch } from "react-redux";
import Logger from "../../utils/Logger";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import TFButton from "../../utils/TFButton";

const ParentCard = props => {
    const { fName, lName, email, phone, isPrimary } = props

    return (
        <View style={CardStyles.container}>
            <View style={CardStyles.data_container}>
                <Text style={CardStyles.text_name}>{fName}</Text>
                <Text style={CardStyles.text}><Text style={CardStyles.text_key}>Phone:</Text> {phone}</Text>
                <Text style={CardStyles.text}><Text style={CardStyles.text_key}>Email:</Text> {email}</Text>
            </View>
            {
                (isPrimary) ? <View style={{flexDirection: "row", backgroundColor:Colors.btn_prime, padding: 5, borderRadius: 5, alignItems: "center"}}><Text style={{fontSize: 16, fontWeight: "bold", color: Colors.background}}>Primary </Text><Ionicons name={"ios-star"} size={16} color={"gold"}/></View> : null
            }
        </View>
    )
}

const CardStyles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 16,
        borderWidth: 4,
        borderColor: Colors.btn_prime,
        justifyContent: "space-between",
        margin: 16,
        borderRadius: 5
    },
    data_container: {
        flexDirection: "column",
        justifyContent: "center",
    },
    title: {
        color: "black",
        fontSize: 32,
        borderBottomWidth: 8
    },
    text: {
        color: "black",
        fontSize: 16
    },
    text_key: {
        fontWeight: "bold"
    },
    text_name: {
        fontSize: 32,
        fontWeight: "bold"
    }
})

const GuardianCard = props => {
    const {email} = props

    return (
        <View style={CardStyles.container}>
            <Text style={CardStyles.text_name}>{email}</Text>
        </View>
    )
}

const Review = props => {
    const { navigation, route } = props
    const { parents, guardians } = useSelector(state => state)
    const dispatch = useDispatch();
    Logger("Review.js", {parents,guardians})

    const handleSubmit = () => {
        Logger("Review.js: handleSubmit", [parents.entries, guardians.entries])
    }

    return (
        <View style={styles.screen}>
            <View style={{flex:4}}>
                <View style={styles.section_container}>
                    <Text style={styles.section_title}>Parents  <MaterialCommunityIcons name={"account-child-circle"} size={36} color={"black"}/></Text>
                    {
                        parents.entries.map((parent,i) => <ParentCard {...parent} isPrimary={true} key={"review_parent_" + i}/>)
                    }
                </View>
                <View style={styles.section_container}>
                    <Text style={styles.section_title}>Guardian Invites  <Ionicons name={"ios-mail"} size={36} color={"black"}/></Text>
                    {
                        guardians.entries.map((guardian,i) => <GuardianCard {...guardian} key={"review_guardian_" + i}/>)
                    }
                </View>
            </View>
            <View style={{flex:1, paddingHorizontal: 16}}>
                <TFButton onPress={handleSubmit} style={{height: 60}}>Submit</TFButton>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: "flex-start"
    },
    title_container: {
        ...Center,
        backgroundColor: Colors.btn_prime,
        width: "100%"
    },
    section_container:{
        justifyContent: "flex-start",
        alignContent: "center",
        width: "100%",
        paddingVertical: 20
    },
    section_title: {
        padding: 16,
        textAlign: "center",
        fontSize: 32
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

export default Review;