import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Kovid-19 is an awareness program built to spread the word to be safe and be informed of the correct data around the globe. #Coronavirus #Covid-19"
          />
          <meta name="image" content="/logoPng.png" />
          <meta property="og:title" content="Kovid-19" />
          <meta
            property="og:description"
            content="Kovid-19 is an awareness program built to spread the word to be safe and be informed of the correct data around the globe. #Coronavirus #Covid-19"
          />
          <meta property="og:image" content="/logoPng.png" />
          <meta name="twitter:creator" content="@__x__LEO__x__" />
          <meta name="twitter:title" content="Kovid-19" />
          <meta
            name="twitter:description"
            content="Kovid-19 is an awareness program built to spread the word to be safe and be informed of the correct data around the globe. #Coronavirus #Covid-19"
          />
          <meta name="twitter:image" content="/logoPng.png" />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/favicons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/favicons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/favicons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/favicons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/favicons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/favicons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/favicons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/favicons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/favicons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#FF4D79" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
