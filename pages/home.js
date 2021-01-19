import Head from "next/head";
import { useContext } from "react";
import { dataContext, INCREMENT, DECREMENT, RESET, dispatch } from "../redux/multiple";

const Home = () => {
    const { state } = useContext(dataContext);
    console.log("state", state);
    const { increment, decrement, reset } = state;
    const { incrementDispatch, decrementDispatch, resetDispatch } = dispatch;
    return (
        <div className="center">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>hello</h1>
            <h1>increment - {increment}</h1>
            <h1>decrement - {decrement}</h1>
            <h1>reset - {reset}</h1>
            <button
                onClick={() => {
                    incrementDispatch({ type: INCREMENT });
                }}
            >
                + Plus
            </button>
            <button
                onClick={() => {
                    resetDispatch({ type: RESET });
                }}
            >
                0 Reset
            </button>
            <button
                onClick={() => {
                    decrementDispatch({ type: DECREMENT });
                }}
            >
                - Minus
            </button>

            <style jsx>{`
                .center {
                    text-align: center;
                }
            `}</style>
        </div>
    );
};


export default Home;

