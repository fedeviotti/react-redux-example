import * as actionTypes from "./actionTypes";

export const saveResult = (result) => {
    // can change data
    // const updatedResult = result * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
};

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // hint: don't over use getState()
            const oldCounter = getState()._ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    };
};
