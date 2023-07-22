import Head from "next/head";
import Header from "../components/Header";
import Home from "../pages/Home";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Tiktok</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {/* Banner */}
    </div>
  );
}
