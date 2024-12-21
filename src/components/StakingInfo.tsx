"use client";


import { ninetyDays, one80Days, sixtyDays, thirtyDays } from "@/app/contract";
import React, { useState } from "react";
import { PreparedTransaction, prepareContractCall, toWei } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";

interface ContractDetails {
  address: string;
  apy: number | string;
  minStake: number | Error | string;
  startDate: string;
  endDate: string;
}

interface UserDetails {
  stakeAmount: number | string;
  rewardAmount: number | string;
  claimedRewards: number | string;
  lastStakeTime: string;
  lastCalculationTime: string;
}

interface StakingInfoProps {
  contractDetails: ContractDetails;
  userDetails: UserDetails;
  selectedPeriod: number;
}

export default function StakingInfo({
  contractDetails,
  userDetails,
  selectedPeriod,
}: StakingInfoProps) {
  const contract =
    selectedPeriod === 60
      ? sixtyDays
      : selectedPeriod === 90
      ? ninetyDays
      : selectedPeriod === 180
      ? one80Days
      : thirtyDays;
  //hui hui
  const [activeAction, setActiveAction] = useState<
    "stake" | "unstake" | "claim"
  >("stake");
  const [inputAmount, setInputAmount] = useState("");

  const { mutateAsync: sendTx, error: txError } = useSendTransaction();

  const handleActionChange = (action: "stake" | "unstake" | "claim") => {
    setActiveAction(action);
    setInputAmount("");
  };

  const methodString =
    activeAction === "stake"
      ? "stake"
      : activeAction === "unstake"
      ? "unstake"
      : "claimReward";

  const parameters =
    activeAction === "stake" || activeAction === "unstake"
      ? [toWei(inputAmount)]
      : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const tx = (await prepareContractCall({
        contract,
        method: methodString,
        params: parameters,
      })) as PreparedTransaction;

      // Handle transaction success
      sendTx(tx);

      console.log(`Action: ${activeAction}, Amount: ${inputAmount}`);

      // Reset input after submission
      setInputAmount("");
    } catch (error) {
      // Handle error
      console.error("Error during contract call:", error);
      alert(`Failed to execute action: ${txError || error}`);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-600 text-white py-4 px-6">
        <h2 className="text-2xl font-bold">
          Staking Information - {selectedPeriod} Days
        </h2>
      </div>

      <div className="p-6 space-y-6">
        {/* Contract Details */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-800 border-b border-blue-200 pb-2">
            Contract Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-blue-50 p-3 rounded-lg">
              <span className="font-medium text-blue-700">
                Contract Address:
              </span>
              <p className="text-blue-900 break-all">
                {contractDetails.address}
              </p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <span className="font-medium text-blue-700">APY:</span>
              <p className="text-blue-900">{contractDetails.apy}%</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <span className="font-medium text-blue-700">Minimum Stake:</span>
              <p className="text-blue-900">
                {contractDetails.minStake.toString()} TNC
              </p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <span className="font-medium text-blue-700">Start Date:</span>
              <p className="text-blue-900">{contractDetails.startDate}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <span className="font-medium text-blue-700">End Date:</span>
              <p className="text-blue-900">{contractDetails.endDate}</p>
            </div>
          </div>
        </div>

        {/* User Details */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-800 border-b border-blue-200 pb-2">
            Your Staking Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-green-50 p-3 rounded-lg">
              <span className="font-medium text-green-700">Stake Amount:</span>
              <p className="text-green-900">{userDetails.stakeAmount} TNC</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <span className="font-medium text-green-700">Reward Amount:</span>
              <p className="text-green-900">{userDetails.rewardAmount} TNC</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <span className="font-medium text-green-700">
                Claimed Rewards:
              </span>
              <p className="text-green-900">{userDetails.claimedRewards} TNC</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <span className="font-medium text-green-700">
                Last Stake Time:
              </span>
              <p className="text-green-900">{userDetails.lastStakeTime}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <span className="font-medium text-green-700">
                Last Calculation Time:
              </span>
              <p className="text-green-900">
                {userDetails.lastCalculationTime}
              </p>
            </div>
          </div>
        </div>

        {/* Staking Actions */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-800 border-b border-blue-200 pb-2">
            Staking Actions
          </h3>
          <div className="space-y-4">
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleActionChange("stake")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeAction === "stake"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-100"
                }`}
              >
                Stake
              </button>
              <button
                onClick={() => handleActionChange("unstake")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeAction === "unstake"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-100"
                }`}
              >
                unstake
              </button>
              <button
                onClick={() => handleActionChange("claim")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeAction === "claim"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-100"
                }`}
              >
                Claim Reward
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {activeAction === "stake"
                    ? "Stake Amount"
                    : activeAction === "unstake"
                    ? "Withdraw Amount"
                    : "Claim Total Reward"}
                </label>
                {activeAction !== "claim" && (
                  <input
                    type="number"
                    id="amount"
                    value={inputAmount}
                    onChange={(e) => setInputAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                {activeAction === "stake"
                  ? "Stake"
                  : activeAction === "unstake"
                  ? "unstake"
                  : "Claim Reward"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
