import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../components/LogoSection/Logo";
import PassGen from "../components/passwordgenerator/PassGen";

export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>Palora - Strongest password Generator ever!</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="small project for generationg strong password in a second!"
        />
        <meta
          name="keywords"
          content="Password, Palora, Generator, Password-Generator, sifre"
        />
        <meta name="author" content="Arvin Mostafaei" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-max h-full p-1 mt-2 xs:mr-1">
        <Link href="./">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div className="w-full flex place-items-center flex-col items-center justify-center h-full content-center mt-[10rem]">
        <div className="flex flex-row sl:h-[28rem] rounded-2xl place-items-center lg:w-2/5 md:w-9/12 sm:w-11/12 sm:h-[24rem] p-5 bg-[#E0F9B5] border-dotted border-4 border-sky-500">
          <div className="w-full h-full">
            <PassGen />
          </div>
        </div>
        <footer className="font-Poppins lg:mt-[14rem] ma:mt-[8rem] xs:mt-[10rem] flex flex-wrap items-center">
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
