import {
    PARENT_ADD,
    PARENT_UPDATE
} from "../actionTypes";
import Logger from "../../utils/Logger";

const initialState = []

const ParentsReducer = (state = initialState, action) => {
    const { type, payload } = action
    Logger('ParentsState', state)
    switch(type) {

        case PARENT_ADD: {
            let { data } = payload
            Logger(PARENT_ADD, data)
            const newParents = [...state, data]
            return newParents
        }

        case PARENT_UPDATE: {
            let { index, data } = payload
            Logger(PARENT_UPDATE, data)
            const newParents = [...state]
            newParents[index] = data
            return newParents
        }

        default: {
            return state;
        }
    }
}

export default ParentsReducer