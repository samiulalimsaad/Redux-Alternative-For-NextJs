import { createContext, useReducer } from "react";
import axios from "axios";
export const dataContext = createContext();

export const HAS_DATA = "HAS_DATA";
export const NO_DATA = "NO_DATA";
export const DATA = "DATA";

export const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const requestData = async (dispatch) => {
    dispatch({ type: HAS_DATA });
    try {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        dispatch({ type: DATA, payload: data });
    } catch (error) {
        dispatch({ type: NO_DATA, payload: error.message });
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HAS_DATA:
            return {
                ...state,
                loading: true,
            };
        case NO_DATA:
            return {
                loading: false,
                data: [],
                error: action.payload,
            };
        case DATA:
            return {
                ...initialState,
                data: action.payload,
            };
        default:
            return state;
    }
};

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <dataContext.Provider value={{ state, requestData, dispatch }}>
            {children}
        </dataContext.Provider>
    );
};

export default Provider;
