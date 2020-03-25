import {
    PARENT_ADD,
    PARENT_UPDATE
} from "../actionTypes";
import Logger from "../../utils/Logger";

const initialState = {
    form: {
        "fName": {
            title: "First Name",
            value: ''
        },
        "lName": {
            title: "Last Name",
            value: ''
        },
        "phone": {
            title: "Phone Number",
            value: ''
        },
        "email": {
            title: "Email",
            value: ''
        }
    },
    entries: [],
    actions: {
        add: PARENT_ADD,
        update: PARENT_UPDATE
    }
}

const ParentsReducer = (state = initialState, action) => {
    const { type, payload } = action
    Logger('ParentsState', state)
    switch(type) {

        case PARENT_ADD: {
            let { body } = payload
            Logger(PARENT_ADD, body)
            const newParents = [...state.entries, body]
            return {
                ...state,
                entries: newParents
            }
        }

        case PARENT_UPDATE: {
            let { index, body, isComplete } = payload
            Logger(PARENT_UPDATE, body)
            let newParents = [...state.entries]
            newParents[index] = body
            if(isComplete){
                newParents = newParents.slice(0, index + 1)
            }
            return {
                ...state,
                entries: newParents
            }
        }

        default: {
            return state;
        }
    }
}

export default ParentsReducer