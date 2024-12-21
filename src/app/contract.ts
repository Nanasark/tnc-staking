import { getContract } from "thirdweb";
import { Strings } from "./strings";
import { client } from "./client";
import { chain } from "./chain";
import { contractABI } from "./abi";

export const thirtyDays = getContract({
  address: Strings.thirtydaysContract,
  chain: chain,
  client: client,
  abi: contractABI,
});

export const sixtyDays = getContract({
  address: Strings.sixtydaysContract,
  chain: chain,
  client: client,
  abi: contractABI,
});

export const ninetyDays = getContract({
  address: Strings.ninetydaysContract,
  chain: chain,
  client: client,
  abi: contractABI,
});

export const one80Days = getContract({
  address: Strings.one80daysContract,
  chain: chain,
  client: client,
  abi: contractABI,
});
