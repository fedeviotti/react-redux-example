const initialState = {
    counter: 0,
    result: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
            return {
                ...state,
                //result: [...state.result, state.counter] // works also this way
                result: state.result.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
            const updatedArray = state.result.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                result: updatedArray
            }
    }
    return state;
}

export default reducer;
