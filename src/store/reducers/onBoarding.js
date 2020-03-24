import Logger from "../../utils/Logger";

const initialState = {
    parents: [],
    fairies: []
}

const onBoardingReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch(type) {


        default: {
            return state;
        }
    }
}

export default onBoardingReducer