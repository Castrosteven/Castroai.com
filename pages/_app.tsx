import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppContext } from "../context/AppContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  );
}

export default MyApp;
