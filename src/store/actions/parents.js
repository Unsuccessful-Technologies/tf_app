import {PARENT_ADD, PARENT_UPDATE} from "../actionTypes";


export const addParent = payload => {
    return {
        type: PARENT_ADD,
        payload
    }
}

export const updateParent = payload => {
    return {
        type: PARENT_UPDATE,
        payload
    }
}