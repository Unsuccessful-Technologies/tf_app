import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Center, Colors} from "../../utils/styles";
import TFForm from "../../utils/TFForm";
import { useSelector, useDispatch } from "react-redux";
import Logger from "../../utils/Logger";


const DataInit = (data) => {
    const result = {}
    Object.keys(data).forEach(key => {
        result[key] = ''
    })
    return result
}

const compareObjects = (a, b) => {
    let same = true
    Object.keys(a).forEach(key => {
        same = same && a[key] === b[key]
    })
    return same
}

const ArrayDataForm = props => {
    const { navigation, route } = props
    let { index, baseForm, nextScreen, actions, dataSelector, btnTitles } = route.params
    let { add: addAction, update: updateAction } = actions
    const dataArray = useSelector(state => state[dataSelector])
    const dispatch = useDispatch();
    let [isEdit, setIsEdit] = useState(false)
    let [ParentForm, setParentForm] = useState(baseForm)
    let [Data, setData] = useState(DataInit(baseForm))
    let [SubmitType, setSubmitType] = useState(null)

    const handleSubmit = (data) => {
        Logger('ArrayDataForm.js:handleSubmit', data)
        const body = {}
        Object.keys(ParentForm).forEach(key => {
            body[key] = data[key].value
        })
        if(isEdit){
            dispatch(updateAction({index, data: body, navigation}))
        } else {
            dispatch(addAction({index, data: body, navigation}))
        }
    }

    const goToNext = (data) => {
        Logger('ArrayDataForm.js:gotToNext', data)
        setSubmitType("COMPLETE")
        handleSubmit(data)
    }

    const addAnother = (data) => {
        Logger('ArrayDataForm.js:addAnother', data)
        setSubmitType("ADD")
        handleSubmit(data)
    }

    useEffect(() => {
        if(dataArray[index]) {
            if (!compareObjects(dataArray[index], Data)) {
                /** If there is an index that already exists the edit is true **/
                let newForm = {}
                let newData = {}
                Object.keys(ParentForm).forEach(key => {
                    newForm[key] = {...ParentForm[key]}
                    newForm[key].value = dataArray[index][key]
                    newData[key] = dataArray[index][key]
                })
                setParentForm(newForm)
                setData(newData)
                setIsEdit(true)
            } else {
                Logger('Effect', {params:route.params, SubmitType})
                const routeParams = {...route.params}
                if(SubmitType === "ADD"){
                    routeParams.index = routeParams.index + 1
                    navigation.push(route.name, routeParams)
                } else if(SubmitType === "COMPLETE") {
                    navigation.push(nextScreen)
                }
            }
        }
    }, [dataArray, index, Data])

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
                    btn1={{handler: goToNext, title: btnTitles.next}}
                    btn2={{handler: addAnother, title: btnTitles.add}}
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