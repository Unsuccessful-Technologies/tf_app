import { Users } from "../../utils/testData";
import {LOGIN_CANCEL, LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, PARENT_ADD} from "../actionTypes";
import Logger from "../../utils/Logger";

const initialState = {
    loading: false,
    error: null,
    token: null,
    userId: null,
    isNewUser: null,
    parents: [],
    fairies: []
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

        case PARENT_ADD: {
            Logger(PARENT_ADD,payload)
            const newParents = [...state.parents, payload]
            return {
                ...state,
                parents: newParents
            }
        }

        default: {
            return state;
        }
    }
}

export default userReducer