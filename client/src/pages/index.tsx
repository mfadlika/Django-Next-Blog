import { Text } from "@/lib";
import Card, {
  CardBody,
  CardTextHeading,
  ImageCard,
  ProfileCard,
} from "@/lib/card";
import Grid from "@/lib/grid";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { getData, postData } from "./api/auth";
import PostModal from "@/components/PostModal";

export default function Home(): ReactElement {
  const [post, setPost] = useState<string>("");
  const [posts, setPosts] = useState<any>([]);

  async function fetchData() {
    const data = await getData();
    setPosts(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pt-16">
      <h1 className="ml-2 text-3xl font-extrabold md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-900 from-red-400 underline underline-offset-3 decoration-8 decoration-gray-400 dark:decoration-gray-600">
          Feeds
        </span>
      </h1>

      <PostModal post={post} setPost={setPost}></PostModal>

      <Grid md={2} lg={2} xl={2}>
        {posts.length != 0 &&
          posts.data.map((props: any, key: any) => {
            console.log(props);
            return (
              <div
                key={key}
                className="lg:flex m-2 shadow border border-gray-400"
              >
                <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
                <Card className="w-full">
                  <Link className="w-full" href="#">
                    <CardBody>
                      <CardTextHeading text="Your title"></CardTextHeading>
                      <Text>{props.fields.post}</Text>
                    </CardBody>
                  </Link>
                  <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
                </Card>
              </div>
            );
          })}
      </Grid>
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
