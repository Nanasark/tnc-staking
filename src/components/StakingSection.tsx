"use client";

import React, { useState } from "react";
import StakingInfo from "./StakingInfo";
import { thirtyDays, sixtyDays, ninetyDays, one80Days } from "@/app/contract";
import { useReadContract } from "thirdweb/react";
import { toEther } from "thirdweb";
import { useActiveAccount } from "thirdweb/react";
import { toLocaleDate } from "./toDate";

const stakingPeriods = [30, 60, 90, 180]; // Updated staking periods

export default function StakingSection() {
  const account = useActiveAccount();
  const address = account ? account.address : "";
  const [selectedPeriod, setSelectedPeriod] = useState(30);
  const contract =
    selectedPeriod === 60
      ? sixtyDays
      : selectedPeriod === 90
      ? ninetyDays
      : selectedPeriod === 180
      ? one80Days
      : thirtyDays;

  const { data: minStake, error: minStakeError } = useReadContract({
    contract,
    method: "getMinimumStakingAmount",
  });

  const minimumStake =
    minStake && minStakeError === null
      ? Number(toEther(minStake))
      : "loading ..";

  const {
    data: apy,
    error: apyError,
    isLoading: apyLoading,
  } = useReadContract({
    contract,
    method: "getApy",
  });

  const apyPercent =
    apy && apyError === null ? Number(apy) : apyLoading ? "loading.." : 0;

  const {
    data: startD,
    error: startDError,
    isLoading: startDLoading,
  } = useReadContract({
    contract,
    method: "getStakeStartDate",
  });

  const startDate =
    startD && startDError === null
      ? toLocaleDate(startD)
      : startDLoading
      ? "loading.."
      : "---";

  const {
    data: endD,
    error: endDError,
    isLoading: endDLoading,
  } = useReadContract({
    contract,
    method: "getStakeEndDate",
  });

  const endDate =
    endD && endDError === null
      ? toLocaleDate(endD)
      : endDLoading
      ? "loading.."
      : "---";

  console.log("endd", endD);

  const {
    data: status,
    error: statusError,
    isLoading: statusLoading,
  } = useReadContract({
    contract,
    method: "getStakingStatus",
  });

  const contractStatus = statusLoading ? "loading" : status;
  const contractDetails = {
    address: contract.address,
    apy: apyPercent,
    minStake: minimumStake,
    startDate: startDate,
    endDate: endDate,
    status: contractStatus,
  };

  const {
    data: userDetail,
    error: userDetailError,
    isLoading: userDetailLoading,
  } = useReadContract({
    contract,
    method: "getUser",
    params: [address],
  });

  // const {
  //   data: stakeAmount,
  //   error: stakeAmountError,
  //   isLoading: stakeAmountLoading,
  // } = useReadContract({
  //   contract,
  //   method: "getTotalStakedTokens",
  // });

  // const stakeAmnt =
  //   stakeAmount && stakeAmountError === null
  //     ? Number(toEther(stakeAmount))
  //     : stakeAmountLoading
  //     ? "loading.."
  //     : 0;

  const stakeAmnt =
    userDetail && userDetailError === null
      ? Number(toEther(userDetail.stakeAmount))
      : userDetailLoading
      ? "loading.. "
      : 0;
  const reward =
    userDetail && userDetailError === null
      ? Number(toEther(userDetail.rewardAmount))
      : userDetailLoading
      ? "loading.. "
      : 0;
  const rewardsClaimed =
    userDetail && userDetailError === null
      ? Number(toEther(userDetail.rewardsClaimedSoFar))
      : userDetailLoading
      ? "loading.. "
      : 0;

  const laststaketime =
    userDetail && userDetailError === null
      ? toLocaleDate(userDetail.lastStakeTime)
      : userDetailLoading
      ? "loading.. "
      : "---";

  const lastCalculationtime =
    userDetail && userDetailError === null
      ? toLocaleDate(userDetail.lastRewardCalculationTime)
      : userDetailLoading
      ? "loading.. "
      : "---";
  const userDetails = {
    stakeAmount: stakeAmnt,
    rewardAmount: reward,
    claimedRewards: rewardsClaimed,
    lastStakeTime: laststaketime,
    lastCalculationTime: lastCalculationtime,
  };

  const handlePeriodChange = (period: number) => {
    setSelectedPeriod(period);
    // In a real scenario, this would trigger data fetching or updates
  };

  return (
    <section className="py-10 bg-gradient-to-b from-blue-100 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          TNC Staking Platform
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700 text-center">
            Select Staking Period
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {stakingPeriods.map((period) => (
              <button
                key={period}
                onClick={() => handlePeriodChange(period)}
                className={`px-6 py-3 rounded-full transition-colors text-lg font-medium ${
                  selectedPeriod === period
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-100"
                }`}
              >
                {period} Days
              </button>
            ))}
          </div>
        </div>

        <StakingInfo
          contractDetails={contractDetails}
          userDetails={userDetails}
          selectedPeriod={selectedPeriod}
        />
      </div>
    </section>
  );
}
