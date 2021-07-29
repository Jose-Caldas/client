import type { AppProps } from "next/app";
import Head from "next/head";
import { useApollo } from "../utils/apollo";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "../hooks/use-cart";
import { GlobalStyles } from "../styles/globals";
import theme from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
    const client = useApollo(pageProps.InitialApolloState);
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <CartProvider>
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
                </CartProvider>
            </ThemeProvider>
        </ApolloProvider>
    );
}
export default App;
