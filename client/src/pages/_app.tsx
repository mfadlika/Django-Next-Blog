import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Cookies from "js-cookie";

async function getCSRF() {
  const data = await fetch("http://localhost:8000/csrf", {
    credentials: "include",
  });

  return data;
}

function App({ Component, pageProps }: AppProps) {
  const csrf: string | undefined = Cookies.get("csrftoken");
  if (!csrf) {
    getCSRF();
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);
