import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image src="/footer.png" alt="TNC Logo" width={200} height={50} />
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            <Link href="/features" className="hover:text-gray-300">
              Features
            </Link>
            <Link
              href="/whitepaper.pdf"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              className="hover:text-gray-300"
            >
              Roadmap
            </Link>
            <Link href="/community" className="hover:text-gray-300">
              Community
            </Link>
            <Link
              href="/whitepaper.pdf"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              className="hover:text-gray-300"
            >
              Whitepaper
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 @TECHS NETWORK INC, All Rights Reserved by @techsnetwork
        </div>
      </div>
    </footer>
  );
}
