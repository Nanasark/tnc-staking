import React, { useState, useEffect } from "react";

interface CircleStatusProps {
  contractStatus: string | boolean | undefined; // Precomputed status passed as a prop
}

const CircleStatus: React.FC<CircleStatusProps> = ({ contractStatus }) => {
  const [isClient, setIsClient] = useState(false);

  // Set state to true once component is mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // If not yet mounted (i.e., during SSR), show a placeholder or empty content
  if (!isClient) {
    return (
      <div className="rounded-full w-4 h-4 bg-gray-400 animate-pulse"></div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      {/* Circle Indicator */}
      <div
        className={`rounded-full w-4 h-4 
          ${contractStatus === "loading" ? "hidden" : ""}
          ${contractStatus === true ? "bg-yellow-500" : ""}
          ${contractStatus === false ? "bg-green-500 pulse" : ""}`}
      ></div>

      {/* Status Text */}
      <p className="text-blue-900 ">
        {contractStatus === "loading"
          ? "Loading..."
          : contractStatus === true
          ? "Paused"
          : "Live"}
      </p>
    </div>
  );
};

export default CircleStatus;
