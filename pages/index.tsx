import Landing from "./Landing";
import Head from "next/head";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen w-screen">
      <Head>
        <title>SilverBytes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </main>
  );
}
