import { create } from "zustand";
import { z } from "zod";

import { ContractReceipt, ContractTransaction, Signer, providers, BigNumber } from "ethers";
import { addresses } from "../data";
import { formatEther } from "ethers/lib/utils.js";
import { LoreumNFT__factory } from "@loreum/loreum-nft/typechain";

export enum Status {
  idle = "idle",
  signing = "signing",
  pending = "pending",
  confirmed = "confirmed",
  failed = "failed",
}

const mintInput = z.object({ amount: z.number().positive() });
export type MintInput = z.infer<typeof mintInput>;

export interface SendStore {
  status: Status;
  error: any | null;
  tx: ContractTransaction | null;
  receipt: ContractReceipt | null;
  setStatus: (status: Status) => void;
  send: (signer: Signer | any, input: MintInput) => void;
}

export interface CallStore {
  status: Status;
  error: any | null;
  data: string;
  call: (provider: providers.BaseProvider | Signer, args?: string) => void;
}

export const usePublicMint = create<SendStore>((set) => ({
  status: Status.idle,
  error: null,
  tx: null,
  receipt: null,
  setStatus: (status) => set({ status }),
  send: async (signer: Signer | undefined, input: MintInput) => {
    if (!signer) return;
    set({ status: Status.signing, error: null, tx: null, receipt: null });
    try {
      const { amount } = mintInput.parse(input);
      const loruemNft = LoreumNFT__factory.connect(addresses.nftAddress, signer);
      const cost = await loruemNft.mintCost();
      if (!cost) return;

      const totalCost = BigNumber.from(cost).mul(input.amount);
      console.log("cost:", cost, "totalCost:", totalCost);

      const tx = await loruemNft.publicMint(amount, { value: totalCost });

      set({ tx, status: Status.pending });
      const receipt = await tx.wait();
      return set({ receipt, status: Status.confirmed });
    } catch (error) {
      set({ error, status: Status.failed });
    }
  },
}));

const initialCallState = {
  status: Status.idle,
  error: null,
};

export const useTotalSupply = create<CallStore>((set) => ({
  ...initialCallState,
  data: "0",
  call: async (provider) => {
    set({ status: Status.pending, error: null });
    try {
      const loruemNft = LoreumNFT__factory.connect(addresses.nftAddress, provider);
      const supply = await loruemNft.totalSupply();
      set({ data: supply.toString(), status: Status.confirmed, error: null });
    } catch (error) {
      set({ error, status: Status.failed });
    }
  },
}));

export const useMaxSupply = create<CallStore>((set) => ({
  ...initialCallState,
  data: "10000",
  call: async (provider) => {
    set({ status: Status.pending, error: null });
    try {
      const loruemNft = LoreumNFT__factory.connect(addresses.nftAddress, provider);
      const supply = await loruemNft.MAX_SUPPLY();
      set({ data: supply.toString(), status: Status.confirmed, error: null });
    } catch (error) {
      set({ error, status: Status.failed });
    }
  },
}));

export const useNftBalance = create<CallStore>((set) => ({
  ...initialCallState,
  data: "0",
  call: async (provider, address) => {
    if (!address) return set({ data: "0" });
    set({ status: Status.pending, error: null });
    try {
      const loruemNft = LoreumNFT__factory.connect(addresses.nftAddress, provider);
      const balance = await loruemNft.balanceOf(address);
      set({ data: balance.toString(), status: Status.confirmed, error: null });
    } catch (error) {
      set({ error, status: Status.failed });
    }
  },
}));

export const useMintCost = create<CallStore>((set) => ({
  ...initialCallState,
  data: "0",
  call: async (provider) => {
    set({ status: Status.pending, error: null });
    try {
      const loruemNft = LoreumNFT__factory.connect(addresses.nftAddress, provider);
      const cost = await loruemNft.mintCost();
      set({ data: formatEther(cost.toString()), status: Status.confirmed, error: null });
    } catch (error) {
      set({ error, status: Status.failed });
    }
  },
}));
