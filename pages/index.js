import Head from "next/head";
import { useContext, useEffect } from "react";
import { dataContext } from "../redux";

const Home = () => {
    const { state, requestData, dispatch } = useContext(dataContext);
    useEffect(() => {
        requestData(dispatch);
    }, []);
    console.log("home", state);
    return (
        <div className="center">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>hello</h1>
            <button
                onClick={() => {
                    requestData(dispatch);
                }}
                disabled={state.loading}
            >
                Click Me
            </button>
            <main>
                {state.loading ? (
                    <h1>Loading....</h1>
                ) : state.error ? (
                    <h1>{state.error}</h1>
                ) : (
                    state.data.map((v) => <h1 key={v.name}>{v.name}</h1>)
                )}
            </main>
            <style jsx>{`
                .center {
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default Home;
