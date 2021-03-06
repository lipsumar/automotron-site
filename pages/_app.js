import Head from "next/head";
import { appWithTranslation } from "../i18n";
import "../styles/globals.css";
import Modal from "react-modal";
import App from "next/app";

Modal.setAppElement("#__next");
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Automotron</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-180x180.png"
          sizes="180x180"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-180x180.png"
          sizes="180x180"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-512x512.png"
          sizes="512x512"
        ></link>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z12G2Z4XTJ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z12G2Z4XTJ');`,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// required for i18n-next
MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
