import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Image
              src="/footer.png"
              alt="TNC Logo"
              width={180}
              height={45}
              className="object-contain"
            />
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="/features"
              className="hover:text-gray-300 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="/community"
              className="hover:text-gray-300 transition-colors"
            >
              Community
            </Link>
            <Link
              href="/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Whitepaper
            </Link>
          </nav>
        </div>
        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm">
          © 2024 Techs Network Inc. All Rights Reserved. Powered by TechsNetwork
        </div>
      </div>
    </footer>
  );
}
