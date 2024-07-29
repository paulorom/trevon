import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>      
          <script async data-id="101458506" src="//static.getclicky.com/js" />
          <script async src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" />
        </Head>
        <body
          className={`antialiased text-lg dark:text-white leading-base`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
