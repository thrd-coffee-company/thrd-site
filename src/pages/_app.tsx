import { ChakraProvider } from "@chakra-ui/react";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import theme from "../theme";
import { AppProps } from "next/app";
import { Layout } from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: 'head',
          nonce: undefined,
        }}
      >
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </GoogleReCaptchaProvider>
    </ChakraProvider>
  );
}

export default MyApp;
