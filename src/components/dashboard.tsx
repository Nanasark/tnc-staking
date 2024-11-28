import React, { useState } from "react";
import UpdatePrice from "./updatePrice";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "@/app/client";
import Withdraw from "./withdraw";
import TokenSale from "./tokenSale";

// Main Dashboard Component
const Dashboard = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("TokenSale");
  const address = useActiveAccount()?.address;

  // Components mapping
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
    <div className="flex w-full min-h-screen">
      {/* Left Sidebar */}
      <nav className="w-1/4 bg-gray-800 text-white flex flex-col p-4 space-y-4">
        <ConnectButton client={client} />
        <button
          onClick={() => setActiveSection("TokenSale")}
          className={`p-3 rounded ${
            activeSection === "TokenSale" ? "bg-gray-600" : ""
          }`}
        >
          TokenSale
        </button>
        <button
          onClick={() => setActiveSection("UpdatePrice")}
          className={`p-3 rounded ${
            activeSection === "UpdatePrice" ? "bg-gray-600" : ""
          }`}
        >
          UpdatePrice
        </button>
        <button
          onClick={() => setActiveSection("Withdraw")}
          className={`p-3 rounded ${
            activeSection === "Withdraw" ? "bg-gray-600" : ""
          }`}
        >
          Withdraw
        </button>
        <button
          onClick={() => setActiveSection("Activities")}
          className={`p-3 rounded ${
            activeSection === "Activities" ? "bg-gray-600" : ""
          }`}
        >
          Activities
        </button>
      </nav>

      {/* Right Content Area */}
      <main className=" flex w-3/4 p-6 items-center justify-center bg-gray-100">
        {address ? renderComponent() : <ConnectButton client={client} />}
      </main>
    </div>
  );
};

// Placeholder Components

const Activities = () => <div className="p-4">Activities Component</div>;

export default Dashboard;
