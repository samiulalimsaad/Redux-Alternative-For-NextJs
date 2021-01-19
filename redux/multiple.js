import { createContext, useReducer } from "react";
// import { combineReducers } from "redux";

export const dataContext = createContext();
export let dispatch = {};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const initialState = 10;

const incrementReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        default:
            return state;
    }
};
const decrementReducer = (state = initialState, action) => {
    switch (action.type) {
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};
const resetReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET:
            return state === 0 ? 10 : 0;
        default:
            return state;
    }
};

const Provider = ({ children }) => {
    const [increment, incrementDispatch] = useReducer(
        incrementReducer,
        initialState
    );
    const [decrement, decrementDispatch] = useReducer(
        decrementReducer,
        initialState
    );
    const [reset, resetDispatch] = useReducer(resetReducer, initialState);
    const state = { increment, decrement, reset };
    // console.log(state);
    dispatch = { incrementDispatch, decrementDispatch, resetDispatch };
    return (
        <dataContext.Provider
            value={{
                state,
            }}
        >
            {children}
        </dataContext.Provider>
    );
};
export default Provider;
