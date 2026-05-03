import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  //console.log("DOCUMENT - PAGES ROUTER")
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
