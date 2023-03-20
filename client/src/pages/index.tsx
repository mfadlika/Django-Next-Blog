import Wave from "@/components/animation/Wave";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";


export default function Home(): ReactElement {

  return (
    <div>
      <div className="flex justify-center items-center text-8xl max-sm:text-7xl">
        <span className="tagline linear-wipe">THROUGH</span>
      </div>
      <div className="flex justify-center items-center text-8xl max-sm:text-7xl">
        <span className="tagline linear-wipe">THE WAVES</span>
      </div>
      <Wave></Wave>
    </div>
  );
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
