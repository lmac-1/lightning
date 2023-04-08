import "@/styles/globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lightning</title>
        <meta
          name="description"
          content="A simple application to practice your English speaking skills"
        />
      </Head>
      {/* We have to import Inter in this way so that tailwind styling works for headless ui dialog */}
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
