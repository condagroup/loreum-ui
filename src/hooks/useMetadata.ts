import { create } from "zustand";

import { links } from "../data";

export type NftAttribute = {
  trait_type: string;
  value: string;
  hex: string;
  weight: string;
};

export type NftMetadata = {
  title: string;
  tokenid: string;
  image: string;
  attributes: NftAttribute[];
};

export interface FetchStore {
  isFetching: boolean;
  fetched: boolean;
  failed: boolean;
  error: any | null;
  data: NftMetadata | null;
  fetch: (tokenId: string) => void;
}

const initialState = {
  isFetching: false,
  fetched: false,
  failed: false,
  error: null,
  data: null,
};

export const useMetadata = create<FetchStore>((set) => ({
  ...initialState,
  fetch: async (tokenId) => {
    try {
      set({ ...initialState, isFetching: true });
      const result = await fetch(links.ipfsJsonUrl + tokenId);
      set({ ...initialState, data: await result.json(), fetched: true });
    } catch (error) {
      set({ ...initialState, failed: true, error });
    }
  },
}));
