import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import api from "../services/api";

// After run the server side operation, then return following to user
export default function Home({ results }) {
    return (
        <div>
            <Head>
                <title>Hulu Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Nav />

            <Results results={results} />
        </div>
    );
}

// Following Code will run in server side first
export async function getServerSideProps(context) {
    const query = context.query.query;
    console.log(`querying: ${query}`);
    const endpoint = `https://api.themoviedb.org/3${
        api[query]?.url || api.fetchTrending.url
    }`;
    console.log(endpoint);
    const request = await fetch(endpoint).then((res) => res.json());

    return {
        props: {
            results: request.results,
            // results: [],
        },
    };
}
