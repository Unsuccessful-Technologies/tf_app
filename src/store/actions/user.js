import {
    LOGIN_CANCEL, LOGIN_FAIL,
    LOGIN_START, LOGIN_SUCCESS
} from "../actionTypes";
import {Login_URL, NewUser_URL} from "../../utils/API";

export const LoginUser = payload => {
    return async dispatch => {
        dispatch(loginStart())
        //TODO Logic to handle UserID, Phone, email.  Defaulting to email for now.
        const { user, password } = payload
        const body = {
            email: user,
            password,
            returnSecureToken: true
        }
        const options = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        try {
            const response = await fetch(Login_URL, options)
            const resData = await response.json()
            if(resData.error){
                throw resData.error
            } else {
                const { idToken, localId } = resData
                const newUserResponse = await fetch(NewUser_URL(idToken, localId))
                const newUserResData = await newUserResponse.json()
                dispatch(loginSuccess({...resData, isNewUser: newUserResData}))
            }
        } catch(e) {
            dispatch(loginFail(e))
        }
    }
}

export const loginStart = () => {
    return {
        type: LOGIN_START
    }
}

export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}

export const loginFail = (payload) => {
    return {
        type: LOGIN_FAIL,
        payload
    }
}

export const loginCancel = () => {
    return {
        type: LOGIN_CANCEL
    }
}