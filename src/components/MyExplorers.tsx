import { TransferTx } from "../../.graphclient";
import { Link } from "react-router-dom";
import { links } from "../data";
import { TokenIdText, NftCollection, NftImage } from "../app.styles";

type MyExplorerProps = {
  transfers: TransferTx[];
  address?: string;
};

function MyExplorers({ transfers, address }: MyExplorerProps) {
  const nfts = transfers
    .filter((tx) => tx.from !== address)
    .sort((a, b) => b.tokenId - a.tokenId)
    .map((nft, i) => (
      <div key={i}>
        <TokenIdText># {nft.tokenId}</TokenIdText>
        <Link to={`/explorer/${nft.tokenId}`}>
          <NftImage src={links.ipfsImageUrl + nft.tokenId} />
        </Link>
      </div>
    ));
  return <NftCollection>{nfts}</NftCollection>;
}

export default MyExplorers;
