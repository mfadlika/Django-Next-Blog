import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import axios from "axios";
import Cookies from "js-cookie";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

async function getCSRF() {
  const data = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: "http://127.0.0.1:8000/csrf",
    withCredentials: true,
  });

  return data;
}

function App({ Component, pageProps }: AppProps) {
  // const csrf: string | undefined = Cookies.get("csrftoken");
  // if (!csrf) {
  //   getCSRF();
  // }

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
