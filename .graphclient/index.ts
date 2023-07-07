// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { LoreumNftTypes } from './sources/loreum-nft/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  ApprovalForAllTx: ResolverTypeWrapper<ApprovalForAllTx>;
  ApprovalForAllTx_filter: ApprovalForAllTx_filter;
  ApprovalForAllTx_orderBy: ApprovalForAllTx_orderBy;
  ApprovalTx: ResolverTypeWrapper<ApprovalTx>;
  ApprovalTx_filter: ApprovalTx_filter;
  ApprovalTx_orderBy: ApprovalTx_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MintCostUpdatedTx: ResolverTypeWrapper<MintCostUpdatedTx>;
  MintCostUpdatedTx_filter: MintCostUpdatedTx_filter;
  MintCostUpdatedTx_orderBy: MintCostUpdatedTx_orderBy;
  NFTMintedTx: ResolverTypeWrapper<NFTMintedTx>;
  NFTMintedTx_filter: NFTMintedTx_filter;
  NFTMintedTx_orderBy: NFTMintedTx_orderBy;
  OrderDirection: OrderDirection;
  OwnershipTransferredTx: ResolverTypeWrapper<OwnershipTransferredTx>;
  OwnershipTransferredTx_filter: OwnershipTransferredTx_filter;
  OwnershipTransferredTx_orderBy: OwnershipTransferredTx_orderBy;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  TransferTx: ResolverTypeWrapper<TransferTx>;
  TransferTx_filter: TransferTx_filter;
  TransferTx_orderBy: TransferTx_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  ApprovalForAllTx: ApprovalForAllTx;
  ApprovalForAllTx_filter: ApprovalForAllTx_filter;
  ApprovalTx: ApprovalTx;
  ApprovalTx_filter: ApprovalTx_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  MintCostUpdatedTx: MintCostUpdatedTx;
  MintCostUpdatedTx_filter: MintCostUpdatedTx_filter;
  NFTMintedTx: NFTMintedTx;
  NFTMintedTx_filter: NFTMintedTx_filter;
  OwnershipTransferredTx: OwnershipTransferredTx;
  OwnershipTransferredTx_filter: OwnershipTransferredTx_filter;
  Query: {};
  String: Scalars['String'];
  Subscription: {};
  TransferTx: TransferTx;
  TransferTx_filter: TransferTx_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ApprovalForAllTxResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApprovalForAllTx'] = ResolversParentTypes['ApprovalForAllTx']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApprovalTxResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApprovalTx'] = ResolversParentTypes['ApprovalTx']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  approved?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type MintCostUpdatedTxResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MintCostUpdatedTx'] = ResolversParentTypes['MintCostUpdatedTx']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  oldMintCost?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  newMintCost?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NFTMintedTxResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NFTMintedTx'] = ResolversParentTypes['NFTMintedTx']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mintedBy?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OwnershipTransferredTxResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OwnershipTransferredTx'] = ResolversParentTypes['OwnershipTransferredTx']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  previousOwner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  newOwner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  approvalTx?: Resolver<Maybe<ResolversTypes['ApprovalTx']>, ParentType, ContextType, RequireFields<QueryapprovalTxArgs, 'id' | 'subgraphError'>>;
  approvalTxes?: Resolver<Array<ResolversTypes['ApprovalTx']>, ParentType, ContextType, RequireFields<QueryapprovalTxesArgs, 'skip' | 'first' | 'subgraphError'>>;
  approvalForAllTx?: Resolver<Maybe<ResolversTypes['ApprovalForAllTx']>, ParentType, ContextType, RequireFields<QueryapprovalForAllTxArgs, 'id' | 'subgraphError'>>;
  approvalForAllTxes?: Resolver<Array<ResolversTypes['ApprovalForAllTx']>, ParentType, ContextType, RequireFields<QueryapprovalForAllTxesArgs, 'skip' | 'first' | 'subgraphError'>>;
  mintCostUpdatedTx?: Resolver<Maybe<ResolversTypes['MintCostUpdatedTx']>, ParentType, ContextType, RequireFields<QuerymintCostUpdatedTxArgs, 'id' | 'subgraphError'>>;
  mintCostUpdatedTxes?: Resolver<Array<ResolversTypes['MintCostUpdatedTx']>, ParentType, ContextType, RequireFields<QuerymintCostUpdatedTxesArgs, 'skip' | 'first' | 'subgraphError'>>;
  nftmintedTx?: Resolver<Maybe<ResolversTypes['NFTMintedTx']>, ParentType, ContextType, RequireFields<QuerynftmintedTxArgs, 'id' | 'subgraphError'>>;
  nftmintedTxes?: Resolver<Array<ResolversTypes['NFTMintedTx']>, ParentType, ContextType, RequireFields<QuerynftmintedTxesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ownershipTransferredTx?: Resolver<Maybe<ResolversTypes['OwnershipTransferredTx']>, ParentType, ContextType, RequireFields<QueryownershipTransferredTxArgs, 'id' | 'subgraphError'>>;
  ownershipTransferredTxes?: Resolver<Array<ResolversTypes['OwnershipTransferredTx']>, ParentType, ContextType, RequireFields<QueryownershipTransferredTxesArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferTx?: Resolver<Maybe<ResolversTypes['TransferTx']>, ParentType, ContextType, RequireFields<QuerytransferTxArgs, 'id' | 'subgraphError'>>;
  transferTxes?: Resolver<Array<ResolversTypes['TransferTx']>, ParentType, ContextType, RequireFields<QuerytransferTxesArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  approvalTx?: SubscriptionResolver<Maybe<ResolversTypes['ApprovalTx']>, "approvalTx", ParentType, ContextType, RequireFields<SubscriptionapprovalTxArgs, 'id' | 'subgraphError'>>;
  approvalTxes?: SubscriptionResolver<Array<ResolversTypes['ApprovalTx']>, "approvalTxes", ParentType, ContextType, RequireFields<SubscriptionapprovalTxesArgs, 'skip' | 'first' | 'subgraphError'>>;
  approvalForAllTx?: SubscriptionResolver<Maybe<ResolversTypes['ApprovalForAllTx']>, "approvalForAllTx", ParentType, ContextType, RequireFields<SubscriptionapprovalForAllTxArgs, 'id' | 'subgraphError'>>;
  approvalForAllTxes?: SubscriptionResolver<Array<ResolversTypes['ApprovalForAllTx']>, "approvalForAllTxes", ParentType, ContextType, RequireFields<SubscriptionapprovalForAllTxesArgs, 'skip' | 'first' | 'subgraphError'>>;
  mintCostUpdatedTx?: SubscriptionResolver<Maybe<ResolversTypes['MintCostUpdatedTx']>, "mintCostUpdatedTx", ParentType, ContextType, RequireFields<SubscriptionmintCostUpdatedTxArgs, 'id' | 'subgraphError'>>;
  mintCostUpdatedTxes?: SubscriptionResolver<Array<ResolversTypes['MintCostUpdatedTx']>, "mintCostUpdatedTxes", ParentType, ContextType, RequireFields<SubscriptionmintCostUpdatedTxesArgs, 'skip' | 'first' | 'subgraphError'>>;
  nftmintedTx?: SubscriptionResolver<Maybe<ResolversTypes['NFTMintedTx']>, "nftmintedTx", ParentType, ContextType, RequireFields<SubscriptionnftmintedTxArgs, 'id' | 'subgraphError'>>;
  nftmintedTxes?: SubscriptionResolver<Array<ResolversTypes['NFTMintedTx']>, "nftmintedTxes", ParentType, ContextType, RequireFields<SubscriptionnftmintedTxesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ownershipTransferredTx?: SubscriptionResolver<Maybe<ResolversTypes['OwnershipTransferredTx']>, "ownershipTransferredTx", ParentType, ContextType, RequireFields<SubscriptionownershipTransferredTxArgs, 'id' | 'subgraphError'>>;
  ownershipTransferredTxes?: SubscriptionResolver<Array<ResolversTypes['OwnershipTransferredTx']>, "ownershipTransferredTxes", ParentType, ContextType, RequireFields<SubscriptionownershipTransferredTxesArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferTx?: SubscriptionResolver<Maybe<ResolversTypes['TransferTx']>, "transferTx", ParentType, ContextType, RequireFields<SubscriptiontransferTxArgs, 'id' | 'subgraphError'>>;
  transferTxes?: SubscriptionResolver<Array<ResolversTypes['TransferTx']>, "transferTxes", ParentType, ContextType, RequireFields<SubscriptiontransferTxesArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type TransferTxResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransferTx'] = ResolversParentTypes['TransferTx']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  ApprovalForAllTx?: ApprovalForAllTxResolvers<ContextType>;
  ApprovalTx?: ApprovalTxResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  MintCostUpdatedTx?: MintCostUpdatedTxResolvers<ContextType>;
  NFTMintedTx?: NFTMintedTxResolvers<ContextType>;
  OwnershipTransferredTx?: OwnershipTransferredTxResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  TransferTx?: TransferTxResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = LoreumNftTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/loreum-nft/introspectionSchema":
      return import("./sources/loreum-nft/introspectionSchema") as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const loreumNftTransforms = [];
const additionalTypeDefs = [] as any[];
const loreumNftHandler = new GraphqlHandler({
              name: "loreum-nft",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/xhad/explorers"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("loreum-nft"),
              logger: logger.child("loreum-nft"),
              importFn,
            });
sources[0] = {
          name: 'loreum-nft',
          handler: loreumNftHandler,
          transforms: loreumNftTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: GetApprovalTxesDocument,
        get rawSDL() {
          return printWithCache(GetApprovalTxesDocument);
        },
        location: 'GetApprovalTxesDocument.graphql'
      },{
        document: GetApprovalForAllTxesDocument,
        get rawSDL() {
          return printWithCache(GetApprovalForAllTxesDocument);
        },
        location: 'GetApprovalForAllTxesDocument.graphql'
      },{
        document: GetMintCostUpdatedTxesDocument,
        get rawSDL() {
          return printWithCache(GetMintCostUpdatedTxesDocument);
        },
        location: 'GetMintCostUpdatedTxesDocument.graphql'
      },{
        document: GetOwnershipTransferredTxesDocument,
        get rawSDL() {
          return printWithCache(GetOwnershipTransferredTxesDocument);
        },
        location: 'GetOwnershipTransferredTxesDocument.graphql'
      },{
        document: GetTransferTxesDocument,
        get rawSDL() {
          return printWithCache(GetTransferTxesDocument);
        },
        location: 'GetTransferTxesDocument.graphql'
      },{
        document: GetNftMintedTxesDocument,
        get rawSDL() {
          return printWithCache(GetNftMintedTxesDocument);
        },
        location: 'GetNftMintedTxesDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
  return createMeshHTTPHandler<MeshContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type getApprovalTxesQueryVariables = Exact<{
  filter?: InputMaybe<ApprovalTx_filter>;
}>;


export type getApprovalTxesQuery = { approvalTxes: Array<Pick<ApprovalTx, 'id' | 'owner' | 'approved' | 'tokenId' | 'timestamp'>> };

export type getApprovalForAllTxesQueryVariables = Exact<{
  filter?: InputMaybe<ApprovalForAllTx_filter>;
}>;


export type getApprovalForAllTxesQuery = { approvalForAllTxes: Array<Pick<ApprovalForAllTx, 'id' | 'owner' | 'operator' | 'approved' | 'timestamp'>> };

export type getMintCostUpdatedTxesQueryVariables = Exact<{
  filter?: InputMaybe<MintCostUpdatedTx_filter>;
}>;


export type getMintCostUpdatedTxesQuery = { mintCostUpdatedTxes: Array<Pick<MintCostUpdatedTx, 'id' | 'oldMintCost' | 'newMintCost' | 'timestamp'>> };

export type getOwnershipTransferredTxesQueryVariables = Exact<{
  filter?: InputMaybe<OwnershipTransferredTx_filter>;
}>;


export type getOwnershipTransferredTxesQuery = { ownershipTransferredTxes: Array<Pick<OwnershipTransferredTx, 'id' | 'previousOwner' | 'newOwner' | 'timestamp'>> };

export type getTransferTxesQueryVariables = Exact<{
  filter?: InputMaybe<TransferTx_filter>;
}>;


export type getTransferTxesQuery = { transferTxes: Array<Pick<TransferTx, 'id' | 'from' | 'to' | 'tokenId' | 'timestamp'>> };

export type getNftMintedTxesQueryVariables = Exact<{
  filter?: InputMaybe<NFTMintedTx_filter>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NFTMintedTx_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;


export type getNftMintedTxesQuery = { nftmintedTxes: Array<Pick<NFTMintedTx, 'id' | 'mintedBy' | 'tokenId' | 'cost' | 'timestamp'>> };


export const getApprovalTxesDocument = gql`
    query getApprovalTxes($filter: ApprovalTx_filter) {
  approvalTxes(first: 50, where: $filter) {
    id
    owner
    approved
    tokenId
    timestamp
  }
}
    ` as unknown as DocumentNode<getApprovalTxesQuery, getApprovalTxesQueryVariables>;
export const getApprovalForAllTxesDocument = gql`
    query getApprovalForAllTxes($filter: ApprovalForAllTx_filter) {
  approvalForAllTxes(first: 50, where: $filter) {
    id
    owner
    operator
    approved
    timestamp
  }
}
    ` as unknown as DocumentNode<getApprovalForAllTxesQuery, getApprovalForAllTxesQueryVariables>;
export const getMintCostUpdatedTxesDocument = gql`
    query getMintCostUpdatedTxes($filter: MintCostUpdatedTx_filter) {
  mintCostUpdatedTxes(first: 50, where: $filter) {
    id
    oldMintCost
    newMintCost
    timestamp
  }
}
    ` as unknown as DocumentNode<getMintCostUpdatedTxesQuery, getMintCostUpdatedTxesQueryVariables>;
export const getOwnershipTransferredTxesDocument = gql`
    query getOwnershipTransferredTxes($filter: OwnershipTransferredTx_filter) {
  ownershipTransferredTxes(first: 50, where: $filter) {
    id
    previousOwner
    newOwner
    timestamp
  }
}
    ` as unknown as DocumentNode<getOwnershipTransferredTxesQuery, getOwnershipTransferredTxesQueryVariables>;
export const getTransferTxesDocument = gql`
    query getTransferTxes($filter: TransferTx_filter) {
  transferTxes(first: 100, where: $filter) {
    id
    from
    to
    tokenId
    timestamp
  }
}
    ` as unknown as DocumentNode<getTransferTxesQuery, getTransferTxesQueryVariables>;
export const getNftMintedTxesDocument = gql`
    query getNftMintedTxes($filter: NFTMintedTx_filter, $first: Int, $orderBy: NFTMintedTx_orderBy, $orderDirection: OrderDirection) {
  nftmintedTxes(
    first: $first
    where: $filter
    orderBy: $orderBy
    orderDirection: $orderDirection
  ) {
    id
    mintedBy
    tokenId
    cost
    timestamp
  }
}
    ` as unknown as DocumentNode<getNftMintedTxesQuery, getNftMintedTxesQueryVariables>;







export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    getApprovalTxes(variables?: getApprovalTxesQueryVariables, options?: C): Promise<getApprovalTxesQuery> {
      return requester<getApprovalTxesQuery, getApprovalTxesQueryVariables>(getApprovalTxesDocument, variables, options) as Promise<getApprovalTxesQuery>;
    },
    getApprovalForAllTxes(variables?: getApprovalForAllTxesQueryVariables, options?: C): Promise<getApprovalForAllTxesQuery> {
      return requester<getApprovalForAllTxesQuery, getApprovalForAllTxesQueryVariables>(getApprovalForAllTxesDocument, variables, options) as Promise<getApprovalForAllTxesQuery>;
    },
    getMintCostUpdatedTxes(variables?: getMintCostUpdatedTxesQueryVariables, options?: C): Promise<getMintCostUpdatedTxesQuery> {
      return requester<getMintCostUpdatedTxesQuery, getMintCostUpdatedTxesQueryVariables>(getMintCostUpdatedTxesDocument, variables, options) as Promise<getMintCostUpdatedTxesQuery>;
    },
    getOwnershipTransferredTxes(variables?: getOwnershipTransferredTxesQueryVariables, options?: C): Promise<getOwnershipTransferredTxesQuery> {
      return requester<getOwnershipTransferredTxesQuery, getOwnershipTransferredTxesQueryVariables>(getOwnershipTransferredTxesDocument, variables, options) as Promise<getOwnershipTransferredTxesQuery>;
    },
    getTransferTxes(variables?: getTransferTxesQueryVariables, options?: C): Promise<getTransferTxesQuery> {
      return requester<getTransferTxesQuery, getTransferTxesQueryVariables>(getTransferTxesDocument, variables, options) as Promise<getTransferTxesQuery>;
    },
    getNftMintedTxes(variables?: getNftMintedTxesQueryVariables, options?: C): Promise<getNftMintedTxesQuery> {
      return requester<getNftMintedTxesQuery, getNftMintedTxesQueryVariables>(getNftMintedTxesDocument, variables, options) as Promise<getNftMintedTxesQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;