import React, { useState, useEffect } from "react";

interface CircleStatusProps {
  contractStatus: string | boolean | undefined;
}

const CircleStatus: React.FC<CircleStatusProps> = ({ contractStatus }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="rounded-full w-4 h-4 bg-gray-400 animate-pulse"></div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      {/* Circle Indicator */}
      <div
        className={`rounded-full w-3 h-3
          ${contractStatus === "loading" ? "hidden" : ""}
          ${contractStatus === true ? "bg-yellow-500" : ""}
          ${contractStatus === false ? "w-2.5 h-2.5 bg-green-500 pulse" : ""}`}
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
