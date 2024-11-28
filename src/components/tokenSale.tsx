import React from "react";
import { useReadContract } from "thirdweb/react";

export default function TokenSale() {
    
  return (
    <main>
      <div className="flex text-black border-black w-[500px] h-[200px]">
        <div className="flex flex-col w-1/3">
          <p className="border-black w-full h-full content-center text-center border-[1px]">
            Token Address
          </p>
          <p className="border-black w-full h-full content-center text-center border-[1px]">
            Current Token Price
          </p>
          <p className="border-black w-full h-full content-center text-center border-[1px]">
            Total Token Sold
          </p>
          <p className="border-black w-full h-full content-center text-center border-[1px]">
            Total BNB
          </p>
        </div>
        <div className="flex flex-col w-2/3">
          <p className="border-black w-full h-full content-center text-center border-[1px]">
            text
          </p>
          <p className="border-black w-full h-full content-center text-center border-[1px]">
            text
          </p>
          <p className="border-black w-full h-full content-center text-center border-[1px]">
            text
          </p>
          <p className="border-black w-full h-full content-center text-center border-[1px]">
            text
          </p>
        </div>
      </div>
    </main>
  );
}
