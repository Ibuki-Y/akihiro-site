import type { AppProps } from "next/app";
import Head from "next/head";
import "modern-css-reset/dist/reset.min.css";
import { ChakraProvider } from "@chakra-ui/react";

import { Layout } from "../components/templates/Layout";
import theme from "../theme/theme";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="description"
          content="吉島彰宏 STARTUP SUCCESS ADVISOR(スタートアップサクセスアドバイザー) 専門はファイナンス 過去8年間でシードからシリーズGまで20ラウンド以上をサポート 調達資金の多くを人件費に使うため人材の力をいかに引き出すかにも携わる"
        />
      </Head>

      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
