import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    result: []
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        // can change data (result * 2) before return the new state
        case actionTypes.STORE_RESULT:
            const updatedResult = state.result.concat({id: new Date(), value: action.result * 2});
            return updateObject(state, {result: updatedResult});
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.result.filter(result => result.id !== action.resultElId);
            return updateObject(state, {result: updatedArray});
    }
    return state;
}

export default resultReducer;
