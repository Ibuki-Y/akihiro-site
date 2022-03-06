import type { AppProps } from "next/app";
import Head from "next/head";
import "modern-css-reset/dist/reset.min.css";
import { ChakraProvider } from "@chakra-ui/react";

import { Layout } from "../components/templates/Layout";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
