// pages/_app.js

import React from "react";
import { Provider } from "@/context/Provider";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import MatrixRain from "@/components/Layout/Loading/Loading";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <Provider>
      {loading ? <MatrixRain /> : <Component {...pageProps} />}
    </Provider>
  );
}

export default MyApp;
