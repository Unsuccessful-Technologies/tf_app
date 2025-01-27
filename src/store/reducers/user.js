import {
    FAIRY_ADD, FAIRY_UPDATE,
    LOGIN_CANCEL,
    LOGIN_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    PARENT_ADD,
    PARENT_UPDATE
} from "../actionTypes";
import Logger from "../../utils/Logger";

const initialState = {
    loading: false,
    error: null,
    token: null,
    userId: null,
    isNewUser: null
}

const userReducer = (state = initialState, action) => {
    const { type, payload } = action
    Logger('UserState', state)
    switch(type) {
        case LOGIN_START: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }

        case LOGIN_SUCCESS: {
            const { idToken, localId, isNewUser } = payload
            Logger('LOGIN_SUCCESS', payload)
            return {
                ...state,
                loading: false,
                token: idToken,
                userId: localId,
                isNewUser
            }
        }

        case LOGIN_FAIL: {
            Logger('LOGIN_FAIL', payload)
            return {
                ...state,
                loading: false,
                error: payload
            }
        }

        case LOGIN_CANCEL: {
            Logger(LOGIN_CANCEL)
            return {
                ...state,
                loading: false,
                error: null
            }
        }

        default: {
            return state;
        }
    }
}

export default userReducer