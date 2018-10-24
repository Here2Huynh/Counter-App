import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
}

const Resultreducer = (state = initialState, action) => {
    switch ( action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat( {id: new Date().getTime(), value: action.result })
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

export default Resultreducer 