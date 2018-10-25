export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'


export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = (payload) => {
    return {
        type: ADD,
        payload: payload
    }
}

export const subtract =  (payload) => {
    return {
        type: SUBTRACT,
        payload: payload
    }
}

export const saveResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return dispatch => {
        setTimeout( () => {
            dispatch(saveResult(res))
        }, 2000)
    }
}

export const deletResult = (id) => {
    return {
        type: DELETE_RESULT,
        resultId: id
    }
}