import Head from "next/head";
import Homepage from "../pages/HomePage";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Tiktok</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Homepage />
      {/* Banner */}
    </div>
  );
}
