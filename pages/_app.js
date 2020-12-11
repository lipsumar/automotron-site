import Head from "next/head";
import "../styles/globals.css";

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
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
