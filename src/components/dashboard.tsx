import React, { useState } from "react";
import UpdatePrice from "./updatePrice";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "@/app/client";
import Withdraw from "./withdraw";
import TokenSale from "./tokenSale";
import Activities from "./activities";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("TokenSale");
  const address = useActiveAccount()?.address;

  const renderComponent = () => {
    switch (activeSection) {
      case "TokenSale":
        return <TokenSale />;
      case "UpdatePrice":
        return <UpdatePrice />;
      case "Withdraw":
        return <Withdraw />;
      case "Activities":
        return <Activities />;
      default:
        return <TokenSale />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-blue-50">
      {/* Left Sidebar */}
      <nav className="w-full md:w-1/4 bg-blue-800 text-white flex flex-col p-4 space-y-4">
        <div className="mb-6">
          <ConnectButton client={client} />
        </div>
        {["TokenSale", "UpdatePrice", "Withdraw", "Activities"].map(
          (section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`p-3 rounded transition-colors duration-200 ${
                activeSection === section
                  ? "bg-blue-600 text-white"
                  : "text-blue-100 hover:bg-blue-700"
              }`}
            >
              {section}
            </button>
          )
        )}
      </nav>

      {/* Right Content Area */}
      <main className="flex-grow p-6 bg-white shadow-lg m-4 rounded-lg">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          {activeSection}
        </h1>
        {address ? (
          renderComponent()
        ) : (
          <div className="flex items-center justify-center h-full">
            <ConnectButton client={client} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
