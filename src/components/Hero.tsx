export default function Hero() {
  return (
    <section className="py-20 text-center bg-gradient-to-r from-blue-100 to-blue-50 min-h-[90vh] flex flex-col justify-center relative">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-blue-300 opacity-50"></div>

      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900">
        <span className="text-blue-600">Empower</span>
        <span className="text-black"> Your </span>
        <span className="text-blue-500">Crypto</span>
      </h1>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-300 opacity-50"></div>

      <p className="text-xl text-gray-700 mb-8 px-4 md:px-0">
        Stake <span className="font-semibold text-blue-600">$TNC</span> and Earn
        Passive Rewards!
      </p>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 px-4 md:px-0">
        Unlock the potential of your TNC coins with our secure and user-friendly
        staking platform. Start earning high-yield rewards effortlessly and join
        a thriving community committed to the growth of Techs Network.
      </p>

      {/* Optional Line Divider */}
      <div className="my-8 mx-auto max-w-xl w-full h-1 bg-blue-300 opacity-30"></div>
    </section>
  );
}
