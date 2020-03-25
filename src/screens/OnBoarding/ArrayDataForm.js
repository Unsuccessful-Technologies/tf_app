import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Center, Colors} from "../../utils/styles";
import TFForm from "../../utils/TFForm";
import { useSelector, useDispatch } from "react-redux";
import Logger from "../../utils/Logger";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../../utils/HeaderButton";


const SetBody = (form, data) => {
    const result = {}
    Object.keys(form).forEach(key => {
        result[key] = data[key].value
    })
    Logger("SetBody", result)
    return result
}

const SetForm = (form, data) => {
    const result = JSON.parse(JSON.stringify(form))
    Object.keys(result).forEach(key => {
        result[key].value = data[key]
    })
    Logger("SetForm", result)
    return result
}

const actionCreator = (actionType, payload) => {
    return {
        type: actionType,
        payload
    }
}

const ArrayDataForm = props => {
    const { navigation, route } = props
    Logger("ArrayDataForm Render", route)
    let { nextScreen, dataSelector, btnTitles, index } = route.params
    const initArrayData = useSelector(state => state[dataSelector])
    const { form: BaseForm, actions, entries } = initArrayData
    let { add: addAction, update: updateAction } = actions
    const dispatch = useDispatch();
    const [LocalForm, setLocalForm] = useState(BaseForm)
    const [isEdit, setIsEdit] = useState(false)

    const handleSubmit = (data, isComplete) => {
        Logger('ArrayDataForm.js:handleSubmit', {data,params:route.params})
        handleDispatch(data, isComplete)
        handleNextScreen(isComplete)
    }

    const handleDispatch = (data, isComplete) => {
        const body = SetBody(BaseForm, data)
        if(isEdit){
            dispatch(actionCreator(updateAction,{index, body, isComplete}))
        } else {
            dispatch(actionCreator(addAction,{body}))
        }
    }

    const handleNextScreen = (isComplete) => {
        if(isComplete){
            navigation.navigate(nextScreen)
        } else {
            navigation.replace(route.name, {index: index + 1})
        }
    }

    const goToNext = (data) => {
        Logger('ArrayDataForm.js:gotToNext', data)
        handleSubmit(data, true)
    }

    const putData = (data) => {
        Logger('ArrayDataForm.js:putData', data)
        handleSubmit(data, false)
    }

    useEffect(() => {
        Logger("ArrayDataForm Effect", [entries, index])
        if(entries[index]){
            setLocalForm(SetForm(BaseForm,entries[index]))
            setIsEdit(true)
        } else {
            setLocalForm(BaseForm)
            setIsEdit(false)
        }
    }, [entries, index])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                const canGoBack = navigation.canGoBack()
                const handlePress = () => {
                    if(canGoBack){
                        navigation.goBack()
                    } else {
                        navigation.replace(route.name, {index: index - 1})
                    }
                }
                if(!canGoBack && index === 0) return null
                return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title={"Back"}
                        iconName={"ios-arrow-back"}
                        onPress={handlePress}
                    />
                </HeaderButtons>)
            }
        })
    }, [navigation])

    return (
        <View style={styles.screen}>
            <View style={styles.section_container}>
                <TFForm
                    inputs={LocalForm}
                    style={{backgroundColor:Colors.background}}
                    InputsStyle={{justifyContent: "flex-start", paddingTop: 20}}
                    TitleStyle={{textTransform: "uppercase"}}
                    TextStyle={{borderColor:Colors.btn_prime}}
                    BtnContainerStyle={{flexDirection:"column", paddingVertical: 40}}
                    BtnStyle={{flex: 1, paddingVertical: 10}}
                    btn1={{handler: goToNext, title: btnTitles.next}}
                    btn2={{handler: putData, title: btnTitles.add}}
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

export default ArrayDataForm;