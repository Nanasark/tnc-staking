import { prepareContractCall, PreparedTransaction, toWei } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { contract } from "@/app/contract";
import { useState } from "react";

export default function UpdatePrice() {
  const { mutate: sendTx, error: eRROR, status } = useSendTransaction();
  const [newPrice, setNewPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const tokenPrice = toWei(`${newPrice}`);

  const updateToken = async () => {
    try {
      const transaction = (await prepareContractCall({
        contract:contract,
        method: "updateTokenSalePrice",
        params: [tokenPrice],
      })) as PreparedTransaction;

      await sendTx(transaction);
      if (status === "pending") {
        setIsLoading(true);
      }
      if (status === "success") {
        setIsLoading(false);
        alert("transaction success");
      }
    } catch (error) {
      console.log(eRROR);
    }
  };

  return (
    <div className=" text-black w-full h-full ">
      <form className=" space-x-5 content-center text-center w-full h-full ">
        <input
          type="number"
          placeholder="0"
          onChange={(e) => setNewPrice(Number(e.target.value))}
          className="w-[250px] h-[45px] border-[1px] border-blue-500 rounded-[25px]"
        />
        <button
          type="button"
          className="bg-blue-500 w-[100px] h-[45px] rounded-md"
          onClick={updateToken}
        >
          {isLoading ? "Loading ..." : "Update Price"}
        </button>
      </form>
      <h1>{tokenPrice.toString()}</h1>
    </div>
  );
}
