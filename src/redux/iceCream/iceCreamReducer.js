import { BUY_ICECREAM } from "./iceCreamTypes"

const INITIAL_STATE = {
    numberOfIceCreams: 20
}

const iceCreamReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case BUY_ICECREAM: {
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams-1
            }
        }
        default: 
            return state
    }
}

export default iceCreamReducer 