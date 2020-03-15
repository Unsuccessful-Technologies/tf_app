export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_CANCEL = 'LOGIN_CANCEL'

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