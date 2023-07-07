import React, { useEffect, ReactElement } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useParams } from "react-router-dom";
import { useAccount, useProvider } from "wagmi";

import {
  Wrapper,
  Row,
  ExplorerColumnWrapper,
  ExplorerColorWheel,
  ExplorerTitle,
  DarkTitle,
  ExplorerNftImage,
  TitleColumnWrapper,
  TotalSupply,
  Title,
  Layout,
} from "../app.styles";
import MyExplorers from "../components/MyExplorers";

import { links } from "../data";
import { NftMetadata, useMetadata } from "../hooks/useMetadata";
import { useTransferTxQuery } from "../hooks/useSubgraph";
import { useNftBalance } from "../hooks/useContract";

function Explorer(): ReactElement {
  const params = useParams();
  const metadata = useMetadata();

  const account = useAccount();
  const transfers = useTransferTxQuery();
  const nftBalance = useNftBalance();
  const provider = useProvider();

  useEffect(() => {
    if (params.tokenId) {
      metadata.fetch(params.tokenId);
      transfers.query(account.address);
      nftBalance.call(provider, account.address);
    }
  }, [params.tokenId, account.address]);

  const parseData = (data: NftMetadata | null): any => {
    if (!data) return;
    return data.attributes.map(({ value, weight, hex }) => {
      return { title: value, value: Number(weight), color: `#${hex}` };
    });
  };

  return (
    <Layout>
      <Wrapper>
        <ExplorerTitle>
          LOREUM <DarkTitle>&nbsp;EXPLORER&nbsp;</DarkTitle> #{params.tokenId}
        </ExplorerTitle>

        <ExplorerColumnWrapper>
          <ExplorerNftImage src={links.ipfsImageUrl + params.tokenId} />
          <ExplorerColorWheel>
            {metadata.data ? (
              <PieChart
                data={parseData(metadata.data)}
                label={({ dataEntry }) => `${dataEntry.title}`}
                labelStyle={() => ({
                  fill: "white",
                  color: "white",
                  fontSize: "3px",
                  fontFamily: "Cairo",
                })}
                radius={30}
                labelPosition={112}
              />
            ) : null}
          </ExplorerColorWheel>
        </ExplorerColumnWrapper>
        {nftBalance.data !== "0" ? (
          <>
            <Row>
              <TitleColumnWrapper>
                <Title>
                  MY <DarkTitle>EXPLORERS</DarkTitle>
                </Title>
                <TotalSupply>{nftBalance.data}</TotalSupply>
              </TitleColumnWrapper>
            </Row>
            <Row>
              <MyExplorers transfers={transfers.data} address={account?.address} />
            </Row>
          </>
        ) : null}
      </Wrapper>
    </Layout>
  );
}

export default Explorer;
