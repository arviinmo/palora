import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PassGen from "../components/passwordgenerator/PassGen";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Palora - Strongest password Generator ever!</title>
      <meta charset="UTF-8" />
      <meta name="description" content="small project for generationg strong password in a second!" />
      <meta name="keywords" content="Password, Palora, Generator, Password-Generator, sifre" />
      <meta name="author" content="Arvin Mostafaei" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-3/3 flex flex-col items-center justify-center h-screen">
        <div className="flex flex-row h-2/4 rounded-2xl place-items-center lg:w-2/5 md:w-9/12 sm:w-11/12 p-5 bg-blue-400">
          <div className="w-full h-full bg-red-500">
            <PassGen />
          </div>
        </div>
        <footer className="font-Poppins mt-4 flex flex-wrap items-center">
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
          by
          <Link href="https://arvin.vercel.app">
            <a className="pl-1 font-Yeseva" target="_blank">
              Arvin Mostafaei
            </a>
          </Link>
        </footer>
      </div>
    </div>
  );
}
