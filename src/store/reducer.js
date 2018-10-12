const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch ( action.type) {
        case 'INCREMENT':
            // two ways to clone js obj and change in a immutable way 
            const newState = Object.assign({}, state)
            newState.counter = state.counter + 1
            return newState
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD': 
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.payload
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        
    }

    return state 
}

export default reducer 