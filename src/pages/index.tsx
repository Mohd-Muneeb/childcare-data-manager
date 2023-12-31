import Head from "next/head";
import SignIn from "./SignIn";
import { useSession } from "next-auth/react";
import { type InferGetServerSidePropsType } from "next";
import BreadCrumbs from "~/components/BreadCrumbs";
import ElectionCard from "~/components/ElectionCard";

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="ml-[2.5vw] min-h-screen w-[95vw] bg-whites-50 px-4 text-blacks-950">
        <BreadCrumbs />

        <div className="my-4 flex flex-col justify-center items-center">
          <ElectionCard />
          <ElectionCard />
          <ElectionCard />
          <ElectionCard />
          <ElectionCard />
          <ElectionCard />
          <ElectionCard />

        </div>
        {session ? <h1>You are logged in bro</h1> : <SignIn />}
        
      </main>
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {
      test: "test",
    },
  };
}
