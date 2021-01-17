import { HAS_DATA, NO_DATA, DATA } from "./actionTypes";

const hasData = () => ({ type: HAS_DATA });
const noData = (data) => ({ type: NO_DATA, payload: data });
const data = (data) => ({ type: NO_DATA, payload: data });

export const requestData = () => {
    hasData();
    setTimeout(() => {
        Math.random() > 0.5 ? data("data1", "data2") : noData("no Data");
    }, 3000);
};
