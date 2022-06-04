import "../styles/reset.css";
import "../styles/style.css";
import Head from "next/head";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import Provider from "../components/context/Provider";

const getLibrary = (provider) => {
    return new Web3(provider);
};

function MyApp({ Component, pageProps }) {
    return (
        <Provider>
            <Web3ReactProvider getLibrary={getLibrary}>
                <Head>
                    <title>Snifty</title>
                    <meta charset="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta name="description" content="Snifty" />
                    <meta name="keywords" content="snify, nft" />
                    {/* <link
                    rel="shortcut icon"
                    href="/favicon.ico/"
                    type="image/x-icon"
                /> */}
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Maitree:wght@300&family=Roboto:wght@300;400;500&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <Component {...pageProps} />
            </Web3ReactProvider>
        </Provider>
    );
}

export default MyApp;
