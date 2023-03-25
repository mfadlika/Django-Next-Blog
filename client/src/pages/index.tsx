import { Text } from "@/lib";
import Card, {
  CardBody,
  CardTextHeading,
  ImageCard,
  ProfileCard
} from "@/lib/card";
import Grid from "@/lib/grid";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { ReactElement } from "react";
import { verifyToken } from "./api/auth";

async function fetchData(token: string) {
  await verifyToken(token);
}

export default function Home(): ReactElement {
  return (
    <div className="pt-16">
      <h1 className="ml-2 text-3xl font-extrabold md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-900 from-red-400 underline underline-offset-3 decoration-8 decoration-gray-400 dark:decoration-gray-600">
          Feeds
        </span>
      </h1>
      <Grid md={2} lg={2} xl={2}>
        <div className="lg:flex m-2 shadow border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <Link href="#">
              <CardBody>
                <CardTextHeading text="Your title"></CardTextHeading>
                <Text>
                  Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                  Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                  dolor sit amet
                </Text>
              </CardBody>
            </Link>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
        <div className="lg:flex m-2 border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <CardBody>
              <CardTextHeading text="Your title"></CardTextHeading>
              <Text>
                Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                dolor sit amet
              </Text>
            </CardBody>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
        <div className="lg:flex m-2 border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <CardBody>
              <CardTextHeading text="Your title"></CardTextHeading>
              <Text>
                Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                dolor sit amet
              </Text>
            </CardBody>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
        <div className="lg:flex m-2 border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <CardBody>
              <CardTextHeading text="Your title"></CardTextHeading>
              <Text>
                Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                dolor sit amet
              </Text>
            </CardBody>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
        <div className="lg:flex m-2 border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <CardBody>
              <CardTextHeading text="Your title"></CardTextHeading>
              <Text>
                Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                dolor sit amet
              </Text>
            </CardBody>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
        <div className="lg:flex m-2 shadow border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <Link href="#">
              <CardBody>
                <CardTextHeading text="Your title"></CardTextHeading>
                <Text>
                  Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                  Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                  dolor sit amet
                </Text>
              </CardBody>
            </Link>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
        <div className="lg:flex m-2 shadow border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <Link href="#">
              <CardBody>
                <CardTextHeading text="Your title"></CardTextHeading>
                <Text>
                  Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                  Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                  dolor sit amet
                </Text>
              </CardBody>
            </Link>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
        <div className="lg:flex m-2 shadow border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <Link href="#">
              <CardBody>
                <CardTextHeading text="Your title"></CardTextHeading>
                <Text>
                  Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                  Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                  dolor sit amet
                </Text>
              </CardBody>
            </Link>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
        <div className="lg:flex m-2 shadow border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <Link href="#">
              <CardBody>
                <CardTextHeading text="Your title"></CardTextHeading>
                <Text>
                  Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                  Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                  dolor sit amet
                </Text>
              </CardBody>
            </Link>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
        <div className="lg:flex m-2 shadow border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <Link href="#">
              <CardBody>
                <CardTextHeading text="Your title"></CardTextHeading>
                <Text>
                  Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                  Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                  dolor sit amet
                </Text>
              </CardBody>
            </Link>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
        <div className="lg:flex m-2 shadow border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <Link href="#">
              <CardBody>
                <CardTextHeading text="Your title"></CardTextHeading>
                <Text>
                  Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                  Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                  dolor sit amet
                </Text>
              </CardBody>
            </Link>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
        <div className="lg:flex m-2 shadow border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <Link href="#">
              <CardBody>
                <CardTextHeading text="Your title"></CardTextHeading>
                <Text>
                  Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                  Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                  dolor sit amet
                </Text>
              </CardBody>
            </Link>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
        <div className="lg:flex m-2 shadow border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <Link href="#">
              <CardBody>
                <CardTextHeading text="Your title"></CardTextHeading>
                <Text>
                  Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                  Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                  dolor sit amet
                </Text>
              </CardBody>
            </Link>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
        <div className="lg:flex m-2 shadow border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <Link href="#">
              <CardBody>
                <CardTextHeading text="Your title"></CardTextHeading>
                <Text>
                  Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                  Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                  dolor sit amet
                </Text>
              </CardBody>
            </Link>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
        <div className="lg:flex m-2 shadow border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <Link href="#">
              <CardBody>
                <CardTextHeading text="Your title"></CardTextHeading>
                <Text>
                  Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                  Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                  dolor sit amet
                </Text>
              </CardBody>
            </Link>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
        <div className="lg:flex m-2 shadow border border-gray-400">
          <ImageCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ImageCard>
          <Card>
            <Link href="#">
              <CardBody>
                <CardTextHeading text="Your title"></CardTextHeading>
                <Text>
                  Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                  Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
                  dolor sit amet
                </Text>
              </CardBody>
            </Link>
            <ProfileCard imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"></ProfileCard>
          </Card>
        </div>
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
