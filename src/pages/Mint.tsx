import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useSigner, useProvider } from "wagmi";
import { Link } from "react-router-dom";

import { english, links } from "../data";

import {
  Layout,
  MintingButton,
  Wrapper,
  Row,
  TitleWrapper,
  Title,
  Column,
  InfoTitle,
  InfoImage,
  InfoBelt,
  InfoCopyWrapperRight,
  InfoCopyWrapperLeft,
  InfoCopyTitle,
  InfoCopy,
  NftCollection,
  NftImage,
  TitleColumnWrapper,
  MintCopyText,
  MintAmountButton,
  MintHeaderCol,
  MintStatusText,
  MintStatusWrapper,
  EtherScanLink,
  TotalSupply,
  DarkTitle,
  FooterTextLink,
  FooterColumn,
} from "../app.styles";

import { useMaxSupply, usePublicMint, useMintCost, useNftBalance, useTotalSupply, Status } from "../hooks/useContract";

import MyExplorers from "../components/MyExplorers";
import { useNftMintedTxQuery, useTransferTxQuery } from "../hooks/useSubgraph";
import { NFTMintedTx } from "../../.graphclient";

function Mint() {
  const [amount, setAmount] = useState(1);

  const signer = useSigner();
  const account = useAccount();
  const provider = useProvider();

  const publicMint = usePublicMint();
  const nftBalance = useNftBalance();
  const totalSupply = useTotalSupply();
  const mintCost = useMintCost();
  const maxSupply = useMaxSupply();

  const mintedNfts = useNftMintedTxQuery();
  const transfers = useTransferTxQuery();

  useEffect(() => {
    mintedNfts.query();
    transfers.query(account.address);
  }, []);

  useEffect(() => {
    refreshCalls();
    transfers.query(account.address);

    if (publicMint.status === Status.confirmed) {
      new Promise((resolve) => {
        setTimeout(() => {
          publicMint.setStatus(Status.idle);
          resolve(transfers.query(account.address));
          mintedNfts.query();
        }, 4000);
      });
    }
  }, [publicMint.status, account.address]);

  function refreshCalls() {
    // contract
    mintCost.call(provider);
    nftBalance.call(provider, account.address);
    maxSupply.call(provider);
    totalSupply.call(provider);
  }

  const decreaseMintAmount = (amount: number) => {
    if (amount > 1) setAmount(amount - 1);
  };

  const increaseMintAmount = (amount: number) => {
    if (amount < 50) setAmount(amount + 1);
  };

  const mintReady = (): boolean => {
    const ready =
      publicMint.status !== Status.idle &&
      publicMint.status !== Status.failed &&
      publicMint.status !== Status.confirmed;
    return ready;
  };

  return (
    <Layout>
      <Wrapper>
        <Row>
          <TitleWrapper>
            <InfoTitle>
              {english.title} <DarkTitle>DAO</DarkTitle>
            </InfoTitle>
          </TitleWrapper>
        </Row>
        <Row>
          <InfoBelt>{english.titleBelt}</InfoBelt>

          <Link to="https://tally.so/r/mOlj5k">
            <MintingButton>Join Waitlist</MintingButton>
          </Link>
        </Row>
        <Row>
          <InfoImage src={links.ipfsImageUrl + 1} />
          <InfoCopyWrapperRight>
            <InfoCopyTitle>{english.info1Title}</InfoCopyTitle>
            <InfoCopy>{english.info1Copy}</InfoCopy>
          </InfoCopyWrapperRight>
        </Row>
        <Row>
          <InfoCopyWrapperLeft>
            <InfoCopyTitle>{english.info2Title}</InfoCopyTitle>
            <InfoCopy>{english.info2Copy}</InfoCopy>
          </InfoCopyWrapperLeft>
          <InfoImage src={links.ipfsImageUrl + 2} />
        </Row>
        <Row>
          <InfoImage src={links.ipfsImageUrl + 3} />
          <InfoCopyWrapperRight>
            <InfoCopyTitle>{english.info3Title}</InfoCopyTitle>
            <InfoCopy>{english.info3Copy}</InfoCopy>
          </InfoCopyWrapperRight>
        </Row>
        <Row>
          <InfoCopyWrapperLeft>
            <InfoCopyTitle>{english.info4Title}</InfoCopyTitle>
            <InfoCopy>{english.info4Copy}</InfoCopy>
          </InfoCopyWrapperLeft>
          <InfoImage src={links.ipfsImageUrl + 4} />
        </Row>
      </Wrapper>

      {totalSupply.data !== "0" ? (
        <Wrapper>
          <Row>
            <TitleColumnWrapper>
              <Title>
                TOTAL <DarkTitle>EXPLORERS</DarkTitle>
              </Title>
              <TotalSupply>{totalSupply.data + "/" + maxSupply.data}</TotalSupply>
            </TitleColumnWrapper>
          </Row>
          <Row>
            <MintedNfts nfts={mintedNfts.data} />
          </Row>
        </Wrapper>
      ) : null}

      <Wrapper>
        <Row>
          <TitleColumnWrapper>
            <Title>
              MINT <DarkTitle>EXPLORERS</DarkTitle>
            </Title>
            <MintHeaderCol>
              <MintAmountButton onClick={() => decreaseMintAmount(amount)}>-</MintAmountButton>
              <span>{amount}</span>
              <MintAmountButton onClick={() => increaseMintAmount(amount)}>+</MintAmountButton>
            </MintHeaderCol>
            <MintHeaderCol>{(Number(mintCost.data) * amount).toFixed(2)} ETH</MintHeaderCol>
          </TitleColumnWrapper>
        </Row>
        <Row>
          <Column>
            <MintCopyText>{english.fomoLine}</MintCopyText>
          </Column>
          <Column>
            {signer.isFetched ? (
              <MintingButton onClick={() => publicMint.send(signer.data, { amount })} disabled={mintReady()}>
                {publicMint.status === Status.signing
                  ? "Please Confirm"
                  : publicMint.status === Status.pending
                  ? "Please Wait"
                  : "Mint"}
              </MintingButton>
            ) : (
              <div style={{ paddingLeft: "50%" }}>
                <ConnectButton />
              </div>
            )}
          </Column>
        </Row>
        <Row>
          <MintStatusWrapper>
            <MintStatusText>{publicMint.status !== Status.idle ? publicMint.status : null}</MintStatusText>
            {publicMint.tx?.hash ? (
              <EtherScanLink href={`https://etherscan.io/tx/${publicMint.tx.hash}`} target={"_blank"}>
                View Etherscan
              </EtherScanLink>
            ) : null}
          </MintStatusWrapper>
        </Row>
        {publicMint.status !== Status.idle ? (
          <Row>
            <MintProgressBar status={publicMint.status} />
          </Row>
        ) : null}
        {/* {publicMint.error ? <Row><MintCopyText>{publicMint.error.toString()}</MintCopyText></Row> : null } */}
        <Row>
          <TitleWrapper>
            <iframe
              width="100%"
              height="315"
              frameBorder="0"
              src="https://www.youtube.com/embed/SCXnEuzZjCg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </TitleWrapper>
        </Row>
      </Wrapper>

      {nftBalance.data !== "0" ? (
        <Wrapper>
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
        </Wrapper>
      ) : null}

      <Wrapper>
        <Row>
          <FooterColumn>
            <FooterTextLink href={links.discord}>DISCORD</FooterTextLink>
            <FooterTextLink href={links.twitter}>TWITTER</FooterTextLink>
            <FooterTextLink href={links.telegram}>TELEGRAM</FooterTextLink>
          </FooterColumn>
          <FooterColumn>
            {/* <FooterTextLink href={links.loreumDaoLlc}>LOREUM DAO LLC</FooterTextLink> */}
            <FooterTextLink>INVEST@LOREUM.ORG</FooterTextLink>
          </FooterColumn>
        </Row>
      </Wrapper>
    </Layout>
  );
}

type ProgressBarProps = {
  status: Status;
};

function MintProgressBar({ status }: ProgressBarProps) {
  const width =
    status === Status.idle
      ? "0%"
      : status === Status.signing
      ? "30%"
      : status === Status.pending
      ? "60%"
      : status === Status.confirmed
      ? "95%"
      : "0%";

  const styles = {
    display: "flex",
    width,
    height: 20,
    backgroundColor: "#D0D0D0",
  };

  const borderStyles = {
    display: "flex",
    width: "100%",
    height: 20,
    border: status !== Status.idle ? "1px solid white" : "",
  };
  return (
    <div style={borderStyles}>
      <div style={styles}></div>
    </div>
  );
}

type MintedNftProps = {
  nfts: NFTMintedTx[];
};

function MintedNfts({ nfts }: MintedNftProps) {
  const images = nfts.map((nft) => (
    <Link to={`/explorer/${nft.tokenId}`} key={nft.tokenId}>
      <NftImage src={links.ipfsImageUrl + nft.tokenId} />
    </Link>
  ));
  return <NftCollection>{images}</NftCollection>;
}

export default Mint;
