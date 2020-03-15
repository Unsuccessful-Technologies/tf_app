import {loginFail, loginStart, loginSuccess} from "../actionTypes";
import {Login_URL} from "../../utils/API";
import Logger from "../../utils/Logger";

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

            Logger("LOGIN_RESPONSE", resData)
            if(resData.error){
                throw resData.error
            } else {
                dispatch(loginSuccess(resData))
            }
        } catch(e) {
            dispatch(loginFail(e))
        }
    }
}