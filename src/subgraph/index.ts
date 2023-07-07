import {
  getApprovalTxesDocument,
  getApprovalForAllTxesDocument,
  getApprovalForAllTxesQueryVariables,
  getApprovalForAllTxesQuery,
  getMintCostUpdatedTxesDocument,
  getMintCostUpdatedTxesQueryVariables,
  getMintCostUpdatedTxesQuery,
  getOwnershipTransferredTxesDocument,
  getOwnershipTransferredTxesQueryVariables,
  getOwnershipTransferredTxesQuery,
  getTransferTxesDocument,
  getTransferTxesQueryVariables,
  getTransferTxesQuery,
  execute,
  getNftMintedTxesQuery,
  getNftMintedTxesQueryVariables,
  getNftMintedTxesDocument,
} from "../../.graphclient";

export const getApprovalTxes = async (
  filter?: getApprovalForAllTxesQueryVariables
): Promise<getApprovalForAllTxesQuery> => {
  const { data } = await execute(getApprovalTxesDocument, filter || {});
  return data;
};

export const getApprovalForAllTxes = async (
  filter?: getApprovalForAllTxesQueryVariables
): Promise<getApprovalForAllTxesQuery> => {
  const { data } = await execute(getApprovalForAllTxesDocument, filter || {});
  return data;
};

export const getMintCostUpdatedTxes = async (
  filter?: getMintCostUpdatedTxesQueryVariables
): Promise<getMintCostUpdatedTxesQuery> => {
  const { data } = await execute(getMintCostUpdatedTxesDocument, filter || {});
  return data;
};

export const getOwnershipTransferredTxes = async (
  filter?: getOwnershipTransferredTxesQueryVariables
): Promise<getOwnershipTransferredTxesQuery> => {
  const { data } = await execute(getOwnershipTransferredTxesDocument, filter || {});
  return data;
};

export const getTransferTxes = async (filter?: getTransferTxesQueryVariables): Promise<getTransferTxesQuery> => {
  const { data } = await execute(getTransferTxesDocument, filter || {});
  return data;
};

export const getNftMintedTxes = async (filter?: getNftMintedTxesQueryVariables): Promise<getNftMintedTxesQuery> => {
  const { data } = await execute(getNftMintedTxesDocument, filter || {});
  return data;
};
