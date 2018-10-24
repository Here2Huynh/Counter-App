import * as actionTypes from '../actions/actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch ( action.type) {
        case actionTypes.INCREMENT:
            // two ways to clone js obj and change in a immutable way 
            const newState = Object.assign({}, state)
            newState.counter = state.counter + 1
            return newState
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD: 
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat( {id: new Date().getTime(), value: state.counter })
            }
        case actionTypes.DELETE_RESULT:
            // method 1 of updating array immutably 
            // const id = 2;
            // const newArray = [...state.results]
            // if the case is that it is a list of obj, 
            // manipulating the obj itself will still be a pointer to the orginal obj 
            // state.results.splice(id,1)
            // method 2, use filter as it returns a new array s
            // const updatedArr = state.results.filter( (element, index)  => index !== id)
            console.log('here')
            const updatedArr = state.results.filter( element  => element.id !== action.resultElementId )
            return {
                ...state,
                results: updatedArr
            }
        
    }

    return state 
}

export default reducer 