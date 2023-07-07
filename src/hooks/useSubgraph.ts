import { getNftMintedTxes, getTransferTxes } from "../subgraph";
import { create } from "zustand";

import { NFTMintedTx, TransferTx } from "../../.graphclient";

export enum QueryStatus {
  idle = "idle",
  fetching = "fetching",
  success = "success",
  failed = "failed",
}

export interface NftQueryStore {
  isFetching: boolean;
  fetched: boolean;
  failed: boolean;
  error: any | null;
  data: NFTMintedTx[];
  query: (args?: object | undefined) => void;
}

export interface TransferQueryStore {
  isFetching: boolean;
  fetched: boolean;
  failed: boolean;
  error: any | null;
  data: TransferTx[];
  query: (address?: string) => void;
}

const initialState = {
  isFetching: false,
  fetched: false,
  failed: false,
  error: null,
  data: [],
};

export const useNftMintedTxQuery = create<NftQueryStore>((set) => ({
  ...initialState,
  query: async () => {
    try {
      set({ ...initialState, isFetching: true });
      const nfts = await getNftMintedTxes({ first: 8, orderBy: "timestamp", orderDirection: "desc" });
      set({ ...initialState, data: nfts.nftmintedTxes, fetched: true });
    } catch (error) {
      set({ ...initialState, failed: true, error });
    }
  },
}));

const filterArray = (array1: TransferTx[], array2: TransferTx[]) => {
  const filtered = array1.filter((el) => {
    return array2.indexOf(el.tokenId) === -1;
  });
  return filtered;
};

export const useTransferTxQuery = create<TransferQueryStore>((set) => ({
  ...initialState,
  query: async (address) => {
    try {
      if (!address) return;
      set({ ...initialState, isFetching: true });

      const from = await getTransferTxes({ filter: { from: address.toLocaleLowerCase() } });
      // get all tokenID in Froms
      const to = await getTransferTxes({ filter: { to: address.toLocaleLowerCase() } });
      const transfers = filterArray(to.transferTxes, from.transferTxes);
      set({ ...initialState, data: transfers, fetched: true });
    } catch (error) {
      set({ ...initialState, failed: true, error });
    }
  },
}));

// const filterTransactions = () => {
//   const from = await getTransferTxes({ filter: { from: address.toLocaleLowerCase() } })
//   const tokenIdFrom = from.map(({ tokenId }) => tokenId)
//   const nftBalance = await getTransferTxes({ filter: {
//       to: isAddress.toLocaleLowerCase(),
//       tokenId_not_in: tokenIdFrom
//     }
//   })

//   return nftBalance
// }
