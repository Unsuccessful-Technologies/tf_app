
import Logger from "../../utils/Logger";
import {GUARDIAN_ADD, GUARDIAN_UPDATE} from "../actionTypes";

const initialState = []

const GuardiansReducer = (state = initialState, action) => {
    const { type, payload } = action
    Logger('GuardiansState', state)
    switch(type) {

        case GUARDIAN_ADD: {
            let { index, data } = payload
            Logger(GUARDIAN_ADD, data)
            const newState = [...state, data]
            return newState
        }

        case GUARDIAN_UPDATE: {
            let { index, data } = payload
            Logger(GUARDIAN_UPDATE, data)
            const newState = [...state]
            newState[index] = data
            return newState
        }

        default: {
            return state;
        }
    }
}

export default GuardiansReducer