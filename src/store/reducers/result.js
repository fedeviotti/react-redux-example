import * as actionTypes from '../actions/actionTypes';

const initialState = {
    result: []
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        // can change data
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({id: new Date(), value: action.result})
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

export default resultReducer;
