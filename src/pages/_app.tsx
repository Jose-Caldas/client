import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "../styles/globals";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../utils/apollo";

function App({ Component, pageProps }: AppProps) {
    const client = useApollo(pageProps.InitialApolloState);
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Won Games</title>
                    <link rel="shortcut icon" href="/icon-512.png" />
                    <link rel="apple-touch-icon" href="/icon-512.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta
                        name="description"
                        content="The definitive Game Store"
                    />
                </Head>
                <Component {...pageProps} />
                <GlobalStyles />
            </ThemeProvider>
        </ApolloProvider>
    );
}
export default App;
