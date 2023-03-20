import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.scss";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Cookies from "js-cookie";

async function getCSRF() {
  const data = await fetch("http://127.0.0.1:8000/csrf", {
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
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
