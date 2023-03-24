import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement, useEffect } from "react";
import { verifyToken } from "./api/auth";

async function fetchData(token: string) {
  await verifyToken(token);
}

export default function Home(): ReactElement {
  return <div className="pt-12"></div>;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, [
        "common",
        "header",
      ])),
    },
  };
};
