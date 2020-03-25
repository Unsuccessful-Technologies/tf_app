
import Logger from "../../utils/Logger";
import {GUARDIAN_ADD, GUARDIAN_UPDATE} from "../actionTypes";

const initialState = {
    form: {
        "email": {
            title: "Email",
            value: ''
        }
    },
    entries: [],
    actions: {
        add: GUARDIAN_ADD,
        update: GUARDIAN_UPDATE
    }
}

const GuardiansReducer = (state = initialState, action) => {
    const { type, payload } = action
    Logger('GuardiansState', state)
    switch(type) {

        case GUARDIAN_ADD: {
            let { body } = payload
            Logger(GUARDIAN_ADD, body)
            const newEntries = [...state.entries, body]
            return {
                ...state,
                entries: newEntries
            }
        }

        case GUARDIAN_UPDATE: {
            let { index, body, isComplete } = payload
            Logger(GUARDIAN_UPDATE, body)
            let newEntries = [...state.entries]
            newEntries[index] = body
            if(isComplete){
                newEntries = newEntries.slice(0, index + 1)
            }
            return {
                ...state,
                entries: newEntries
            }
        }

        default: {
            return state;
        }
    }
}

export default GuardiansReducer