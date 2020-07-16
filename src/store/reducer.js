import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    result: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                //result: [...state.result, state.counter] // works also this way
                result: state.result.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.result.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                result: updatedArray
            }
    }
    return state;
}

export default reducer;
