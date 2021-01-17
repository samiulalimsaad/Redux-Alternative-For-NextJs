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

const hasData = () => {
    console.log("I am hasData");
    return {
        type: HAS_DATA,
    };
};
const noData = (data) => {
    console.log("i am no data");
    return { type: NO_DATA, payload: data };
};
const getData = (data) => {
    console.log("i am data");
    return { type: DATA, payload: data };
};

export const requestData = async (dispatch) => {
    dispatch(hasData());
    try {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        console.log(data);
        dispatch(getData(data));
    } catch (error) {
        dispatch(noData(error.message));
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
