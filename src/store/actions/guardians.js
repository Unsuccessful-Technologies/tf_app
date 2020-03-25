import {GUARDIAN_ADD, GUARDIAN_UPDATE} from "../actionTypes";

export const addGuardian = payload => {
    return {
        type: GUARDIAN_ADD,
        payload
    }
}

export const updateGuardian = payload => {
    return {
        type: GUARDIAN_UPDATE,
        payload
    }
}