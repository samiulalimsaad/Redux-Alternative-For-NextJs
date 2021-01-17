import { HAS_DATA, NO_DATA, DATA } from "./actionTypes";

const initialState = {
    loading: false,
    data: [],
    error: "",
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
        case HAS_DATA:
            return {
                ...initialState,
                data: [...state.data, action.payload],
            };
        default:
            return state;
    }
};
