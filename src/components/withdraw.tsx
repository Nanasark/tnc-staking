import { prepareContractCall, PreparedTransaction, toWei } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { contract } from "@/app/contract";
import { useState } from "react";

export default function Withdraw() {
  const { mutate: sendTx, error: eRROR } = useSendTransaction();

  const withdraw = async () => {
    try {
      const transaction = (await prepareContractCall({
        contract,
        method: "withdrawAllTokens",
        params: [],
      })) as PreparedTransaction;

      await sendTx(transaction);
    } catch (error) {
      console.log(eRROR);
    }
  };

  return (
    <div className=" text-black content-center text-center  w-full h-full ">
      <button
        className="content-center text-center bg-blue-500 w-[400px] h-[45px] rounded-md"
        onClick={() => withdraw()}
      >
        Withdraw All Tokens
      </button>
    </div>
  );
}
