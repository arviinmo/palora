import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Palora - Strongest password Generator ever!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-3/3 bg-slate-300 flex flex-col items-center justify-center h-screen">
        <div className="flex flex-row h-2/3 rounded-2xl place-items-center w-1/2 p-5 bg-blue-400">
          <div className="w-full h-full items-right bg-red-500">
            
          </div>
        </div>
        <footer className="bg-gray-100 mt-4 flex flex-wrap items-center">
          Proudly made in
          <Link href="#">
            <a className="pl-1 pr-1" target="_blank">
              <Image
                src="/fav.svg"
                alt="Vercel Logo"
                width={32}
                height={16}
                title="Kurdistan"
              />
            </a>
          </Link>
          <Link href="https://arvin.vercel.app">
            <a target="_blank">Arvin Mostafaei</a>
          </Link>
        </footer>
      </div>
    </div>
  );
}
