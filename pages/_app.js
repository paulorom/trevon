import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import useOneSignal from "../utils/useOneSignal";
import Navbar from '../components/Navbar';
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useOneSignal();
  return (
    <>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2405014233468230"
      />
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
