"use client";

import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
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

