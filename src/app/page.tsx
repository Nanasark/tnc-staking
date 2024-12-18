"use client";

import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";
import { chain } from "@/app/chain";
import { createWallet } from "thirdweb/wallets";


export default function Home() {
    const wallets = [
      createWallet("io.metamask"),
      createWallet("com.trustwallet.app"),
    ];
  return (
    <main className=" min-h-[100vh] flex items-center bg-yellow-500 justify-center  w-screen ">
      <div className="w-full h-full">
       <ConnectButton
                   client={client}
                   chain={chain}
                   supportedTokens={{
                     56: [
                       {
                         name: "TECHS NETWORK TOKEN",
                         address: "0x170b47f039d006396929F7734228fFc53Ab155b2",
                         symbol: "TNC",
                       },
                     ],
                   }}
                   theme={"light"}
                   wallets={wallets}
                   showAllWallets={false}
                   connectButton={{
                     className: "connect",
                     label: "Sign in",
                   }}
                 />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={thirdwebIcon}
        alt=""
        className="size-[150px] md:size-[150px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        thirdweb SDK
        <span className="text-zinc-300 inline-block mx-1"> + </span>
        <span className="inline-block -skew-x-6 text-blue-500"> Next.js </span>
      </h1>

      <p className="text-zinc-300 text-base">
        Read the{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
          README.md
        </code>{" "}
        file to get started.
      </p>
    </header>
  );
}

