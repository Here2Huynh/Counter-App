import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility'


const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch ( action.type) {
        case actionTypes.INCREMENT:
            // two ways to clone js obj and change in a immutable way 
            // const newState = Object.assign({}, state)
            // newState.counter = state.counter + 1
            // return newState
            return updateObject(state, { counter: state.counter + 1 })
        case actionTypes.DECREMENT:
            return updateObject(state, { counter: state.counter - 1 })
        case actionTypes.ADD: 
            return updateObject(state, { counter: state.counter + action.payload })
        case actionTypes.SUBTRACT:
            return updateObject(state, { counter: state.counter - action.payload })
    }

    return state 
}

export default counterReducer 