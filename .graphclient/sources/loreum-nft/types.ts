// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace LoreumNftTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type ApprovalForAllTx = {
  /**  { transaction hash - logIndex }  */
  id: Scalars['ID'];
  /**  Address of Owner  */
  owner: Scalars['Bytes'];
  /**  Operator address  */
  operator: Scalars['Bytes'];
  /**  Is Operator Approved for all  */
  approved: Scalars['Boolean'];
  /**  timestamp  */
  timestamp: Scalars['BigInt'];
};

export type ApprovalForAllTx_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApprovalForAllTx_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ApprovalForAllTx_filter>>>;
};

export type ApprovalForAllTx_orderBy =
  | 'id'
  | 'owner'
  | 'operator'
  | 'approved'
  | 'timestamp';

export type ApprovalTx = {
  /**  { transaction hash - logIndex }  */
  id: Scalars['ID'];
  /** Address of Owner  */
  owner: Scalars['Bytes'];
  /** Approved address */
  approved: Scalars['Bytes'];
  /** NFT tokenId */
  tokenId: Scalars['BigInt'];
  /** timestamp */
  timestamp: Scalars['BigInt'];
};

export type ApprovalTx_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  approved?: InputMaybe<Scalars['Bytes']>;
  approved_not?: InputMaybe<Scalars['Bytes']>;
  approved_gt?: InputMaybe<Scalars['Bytes']>;
  approved_lt?: InputMaybe<Scalars['Bytes']>;
  approved_gte?: InputMaybe<Scalars['Bytes']>;
  approved_lte?: InputMaybe<Scalars['Bytes']>;
  approved_in?: InputMaybe<Array<Scalars['Bytes']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  approved_contains?: InputMaybe<Scalars['Bytes']>;
  approved_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApprovalTx_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ApprovalTx_filter>>>;
};

export type ApprovalTx_orderBy =
  | 'id'
  | 'owner'
  | 'approved'
  | 'tokenId'
  | 'timestamp';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type MintCostUpdatedTx = {
  /**  { transaction hash - logIndex }  */
  id: Scalars['ID'];
  /**  old mint cost  */
  oldMintCost: Scalars['BigInt'];
  /**  new mint cost  */
  newMintCost: Scalars['BigInt'];
  /**  timestamp  */
  timestamp: Scalars['BigInt'];
};

export type MintCostUpdatedTx_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  oldMintCost?: InputMaybe<Scalars['BigInt']>;
  oldMintCost_not?: InputMaybe<Scalars['BigInt']>;
  oldMintCost_gt?: InputMaybe<Scalars['BigInt']>;
  oldMintCost_lt?: InputMaybe<Scalars['BigInt']>;
  oldMintCost_gte?: InputMaybe<Scalars['BigInt']>;
  oldMintCost_lte?: InputMaybe<Scalars['BigInt']>;
  oldMintCost_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldMintCost_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newMintCost?: InputMaybe<Scalars['BigInt']>;
  newMintCost_not?: InputMaybe<Scalars['BigInt']>;
  newMintCost_gt?: InputMaybe<Scalars['BigInt']>;
  newMintCost_lt?: InputMaybe<Scalars['BigInt']>;
  newMintCost_gte?: InputMaybe<Scalars['BigInt']>;
  newMintCost_lte?: InputMaybe<Scalars['BigInt']>;
  newMintCost_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newMintCost_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MintCostUpdatedTx_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MintCostUpdatedTx_filter>>>;
};

export type MintCostUpdatedTx_orderBy =
  | 'id'
  | 'oldMintCost'
  | 'newMintCost'
  | 'timestamp';

export type NFTMintedTx = {
  /**  { transaction hash - logIndex }  */
  id: Scalars['ID'];
  /**  address of minter  */
  mintedBy: Scalars['Bytes'];
  /**  NFT tokenId  */
  tokenId: Scalars['BigInt'];
  /**  cost of mint  */
  cost: Scalars['BigInt'];
  /**  timestamp  */
  timestamp: Scalars['BigInt'];
};

export type NFTMintedTx_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  mintedBy?: InputMaybe<Scalars['Bytes']>;
  mintedBy_not?: InputMaybe<Scalars['Bytes']>;
  mintedBy_gt?: InputMaybe<Scalars['Bytes']>;
  mintedBy_lt?: InputMaybe<Scalars['Bytes']>;
  mintedBy_gte?: InputMaybe<Scalars['Bytes']>;
  mintedBy_lte?: InputMaybe<Scalars['Bytes']>;
  mintedBy_in?: InputMaybe<Array<Scalars['Bytes']>>;
  mintedBy_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  mintedBy_contains?: InputMaybe<Scalars['Bytes']>;
  mintedBy_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cost?: InputMaybe<Scalars['BigInt']>;
  cost_not?: InputMaybe<Scalars['BigInt']>;
  cost_gt?: InputMaybe<Scalars['BigInt']>;
  cost_lt?: InputMaybe<Scalars['BigInt']>;
  cost_gte?: InputMaybe<Scalars['BigInt']>;
  cost_lte?: InputMaybe<Scalars['BigInt']>;
  cost_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cost_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NFTMintedTx_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NFTMintedTx_filter>>>;
};

export type NFTMintedTx_orderBy =
  | 'id'
  | 'mintedBy'
  | 'tokenId'
  | 'cost'
  | 'timestamp';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type OwnershipTransferredTx = {
  /**  { transaction hash - logIndex }  */
  id: Scalars['ID'];
  /**  previous owner address  */
  previousOwner: Scalars['Bytes'];
  /**  new owner address  */
  newOwner: Scalars['Bytes'];
  /**  timestamp  */
  timestamp: Scalars['BigInt'];
};

export type OwnershipTransferredTx_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  previousOwner?: InputMaybe<Scalars['Bytes']>;
  previousOwner_not?: InputMaybe<Scalars['Bytes']>;
  previousOwner_gt?: InputMaybe<Scalars['Bytes']>;
  previousOwner_lt?: InputMaybe<Scalars['Bytes']>;
  previousOwner_gte?: InputMaybe<Scalars['Bytes']>;
  previousOwner_lte?: InputMaybe<Scalars['Bytes']>;
  previousOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousOwner_contains?: InputMaybe<Scalars['Bytes']>;
  previousOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
  newOwner?: InputMaybe<Scalars['Bytes']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnershipTransferredTx_filter>>>;
  or?: InputMaybe<Array<InputMaybe<OwnershipTransferredTx_filter>>>;
};

export type OwnershipTransferredTx_orderBy =
  | 'id'
  | 'previousOwner'
  | 'newOwner'
  | 'timestamp';

export type Query = {
  approvalTx?: Maybe<ApprovalTx>;
  approvalTxes: Array<ApprovalTx>;
  approvalForAllTx?: Maybe<ApprovalForAllTx>;
  approvalForAllTxes: Array<ApprovalForAllTx>;
  mintCostUpdatedTx?: Maybe<MintCostUpdatedTx>;
  mintCostUpdatedTxes: Array<MintCostUpdatedTx>;
  nftmintedTx?: Maybe<NFTMintedTx>;
  nftmintedTxes: Array<NFTMintedTx>;
  ownershipTransferredTx?: Maybe<OwnershipTransferredTx>;
  ownershipTransferredTxes: Array<OwnershipTransferredTx>;
  transferTx?: Maybe<TransferTx>;
  transferTxes: Array<TransferTx>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryapprovalTxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalTxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalTx_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalTx_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalForAllTxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalForAllTxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalForAllTx_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalForAllTx_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintCostUpdatedTxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintCostUpdatedTxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintCostUpdatedTx_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintCostUpdatedTx_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynftmintedTxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynftmintedTxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NFTMintedTx_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NFTMintedTx_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownershipTransferredTxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownershipTransferredTxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OwnershipTransferredTx_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnershipTransferredTx_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferTxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferTxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferTx_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferTx_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  approvalTx?: Maybe<ApprovalTx>;
  approvalTxes: Array<ApprovalTx>;
  approvalForAllTx?: Maybe<ApprovalForAllTx>;
  approvalForAllTxes: Array<ApprovalForAllTx>;
  mintCostUpdatedTx?: Maybe<MintCostUpdatedTx>;
  mintCostUpdatedTxes: Array<MintCostUpdatedTx>;
  nftmintedTx?: Maybe<NFTMintedTx>;
  nftmintedTxes: Array<NFTMintedTx>;
  ownershipTransferredTx?: Maybe<OwnershipTransferredTx>;
  ownershipTransferredTxes: Array<OwnershipTransferredTx>;
  transferTx?: Maybe<TransferTx>;
  transferTxes: Array<TransferTx>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionapprovalTxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalTxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalTx_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalTx_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalForAllTxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalForAllTxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalForAllTx_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalForAllTx_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintCostUpdatedTxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintCostUpdatedTxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintCostUpdatedTx_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintCostUpdatedTx_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnftmintedTxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnftmintedTxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NFTMintedTx_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NFTMintedTx_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownershipTransferredTxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownershipTransferredTxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OwnershipTransferredTx_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnershipTransferredTx_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferTxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferTxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferTx_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferTx_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TransferTx = {
  /**  { transaction hash - logIndex }  */
  id: Scalars['ID'];
  /**  address of sender  */
  from: Scalars['Bytes'];
  /**  address of recipient  */
  to: Scalars['Bytes'];
  /**  tokenId  */
  tokenId: Scalars['BigInt'];
  /**  timestamp  */
  timestamp: Scalars['BigInt'];
};

export type TransferTx_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferTx_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TransferTx_filter>>>;
};

export type TransferTx_orderBy =
  | 'id'
  | 'from'
  | 'to'
  | 'tokenId'
  | 'timestamp';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  approvalTx: InContextSdkMethod<Query['approvalTx'], QueryapprovalTxArgs, MeshContext>,
  /** null **/
  approvalTxes: InContextSdkMethod<Query['approvalTxes'], QueryapprovalTxesArgs, MeshContext>,
  /** null **/
  approvalForAllTx: InContextSdkMethod<Query['approvalForAllTx'], QueryapprovalForAllTxArgs, MeshContext>,
  /** null **/
  approvalForAllTxes: InContextSdkMethod<Query['approvalForAllTxes'], QueryapprovalForAllTxesArgs, MeshContext>,
  /** null **/
  mintCostUpdatedTx: InContextSdkMethod<Query['mintCostUpdatedTx'], QuerymintCostUpdatedTxArgs, MeshContext>,
  /** null **/
  mintCostUpdatedTxes: InContextSdkMethod<Query['mintCostUpdatedTxes'], QuerymintCostUpdatedTxesArgs, MeshContext>,
  /** null **/
  nftmintedTx: InContextSdkMethod<Query['nftmintedTx'], QuerynftmintedTxArgs, MeshContext>,
  /** null **/
  nftmintedTxes: InContextSdkMethod<Query['nftmintedTxes'], QuerynftmintedTxesArgs, MeshContext>,
  /** null **/
  ownershipTransferredTx: InContextSdkMethod<Query['ownershipTransferredTx'], QueryownershipTransferredTxArgs, MeshContext>,
  /** null **/
  ownershipTransferredTxes: InContextSdkMethod<Query['ownershipTransferredTxes'], QueryownershipTransferredTxesArgs, MeshContext>,
  /** null **/
  transferTx: InContextSdkMethod<Query['transferTx'], QuerytransferTxArgs, MeshContext>,
  /** null **/
  transferTxes: InContextSdkMethod<Query['transferTxes'], QuerytransferTxesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  approvalTx: InContextSdkMethod<Subscription['approvalTx'], SubscriptionapprovalTxArgs, MeshContext>,
  /** null **/
  approvalTxes: InContextSdkMethod<Subscription['approvalTxes'], SubscriptionapprovalTxesArgs, MeshContext>,
  /** null **/
  approvalForAllTx: InContextSdkMethod<Subscription['approvalForAllTx'], SubscriptionapprovalForAllTxArgs, MeshContext>,
  /** null **/
  approvalForAllTxes: InContextSdkMethod<Subscription['approvalForAllTxes'], SubscriptionapprovalForAllTxesArgs, MeshContext>,
  /** null **/
  mintCostUpdatedTx: InContextSdkMethod<Subscription['mintCostUpdatedTx'], SubscriptionmintCostUpdatedTxArgs, MeshContext>,
  /** null **/
  mintCostUpdatedTxes: InContextSdkMethod<Subscription['mintCostUpdatedTxes'], SubscriptionmintCostUpdatedTxesArgs, MeshContext>,
  /** null **/
  nftmintedTx: InContextSdkMethod<Subscription['nftmintedTx'], SubscriptionnftmintedTxArgs, MeshContext>,
  /** null **/
  nftmintedTxes: InContextSdkMethod<Subscription['nftmintedTxes'], SubscriptionnftmintedTxesArgs, MeshContext>,
  /** null **/
  ownershipTransferredTx: InContextSdkMethod<Subscription['ownershipTransferredTx'], SubscriptionownershipTransferredTxArgs, MeshContext>,
  /** null **/
  ownershipTransferredTxes: InContextSdkMethod<Subscription['ownershipTransferredTxes'], SubscriptionownershipTransferredTxesArgs, MeshContext>,
  /** null **/
  transferTx: InContextSdkMethod<Subscription['transferTx'], SubscriptiontransferTxArgs, MeshContext>,
  /** null **/
  transferTxes: InContextSdkMethod<Subscription['transferTxes'], SubscriptiontransferTxesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["loreum-nft"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
