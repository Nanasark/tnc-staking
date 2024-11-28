import { contract } from "@/app/contract";
import React from "react";
import { toEther } from "thirdweb";
import { useReadContract } from "thirdweb/react";

export default function TokenSale() {
  const { data: sold, isPending } = useReadContract({
    contract,
    method: "soldTokens",
    params: [],
  });
  const { data: tokenprice, error } = useReadContract({
    contract: contract,
    method: "getTokenPrice",
    params: [],
  });
  const { data: tokenAddress } = useReadContract({
    contract: contract,
    method: "getTokenAddress",
    params: [],
  });

  const token_price = tokenprice ? toEther(tokenprice) : "";

  return (
    <main>
      <div className="flex text-black border-black w-[700px] h-[200px]">
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
          {/* <p className="border-black w-full h-full content-center text-center border-[1px]">
            Total BNB
          </p> */}
        </div>
        <div className="flex flex-col w-2/3">
          <p className="border-black w-full h-full content-center text-center border-[1px]">
            {tokenAddress?.toString()}
          </p>
          <p className="border-black w-full h-full content-center text-center border-[1px]">
            {token_price.toString()}
          </p>
          <p className="border-black w-full h-full content-center text-center border-[1px]">
            {sold?.toString()}
          </p>
          {/* <p className="border-black w-full h-full content-center text-center border-[1px]">
            {totalBNB.}
          </p> */}
        </div>
      </div>
    </main>
  );
}
