import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">TNC</h2>
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            <Link href="/features" className="hover:text-gray-300">Features</Link>
            <Link href="/roadmap" className="hover:text-gray-300">Roadmap</Link>
            <Link href="/community" className="hover:text-gray-300">Community</Link>
            <Link href="/whitepaper" className="hover:text-gray-300">Whitepaper</Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 @TECHS NETWORK, All Rights Reserved by @techsnetwork
        </div>
      </div>
    </footer>
  )
}

