import Landing from "./Landing";
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Head>
        <title>Computer, Easy Lah!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </main>
  );
}
