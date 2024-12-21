"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { createWallet } from "thirdweb/wallets";
import { chain } from "@/app/chain";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/app/client";

export default function Header() {
  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.trustwallet.app"),
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.png" alt="TNC Logo" width={200} height={50} />
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link
              href="https://techs.network/"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              className="text-gray-600 hover:text-gray-900"
            >
              Project
            </Link>
            <Link
              href="https://buy.techs.network/"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              className="text-gray-600 hover:text-gray-900"
            >
              Buy-Token
            </Link>
            <Link
              href="https://techs.network/"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              className="text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:block">
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
                // className: "w-full bg-blue-500 text-white hover:bg-blue-600",
                label: "Sign in",
              }}
            />
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <HiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-600 hover:text-gray-900 py-2">
                Home
              </Link>
              <Link
                href="/project"
                className="text-gray-600 hover:text-gray-900 py-2"
              >
                Project
              </Link>
              <Link
                href="/staking"
                className="text-gray-600 hover:text-gray-900 py-2"
              >
                Staking
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 py-2"
              >
                Contact
              </Link>
            </nav>
            <div className="mt-4">
              {/* <button className="w-full bg-blue-500 text-white hover:bg-blue-600">
                Sign In
              </button> */}
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
                  // className: "w-full bg-blue-500 text-white hover:bg-blue-600",
                  label: "Sign in",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
