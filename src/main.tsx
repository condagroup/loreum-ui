import "./polyfills";
import React from "react";
import ReactDOM from "react-dom/client";

// eslint-disable-next-line node/no-missing-import
import { Analytics } from "@vercel/analytics/react";

import { getDefaultWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, goerli, hardhat } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@rainbow-me/rainbowkit/styles.css";

import Explorer from "./pages/Explorer";
import PageLayout from "./pages/Layout";
import Mint from "./pages/Mint";
import Nothing from "./pages/Nothing";
import ScrollToTop from "./components/Scroll";

const { chains, provider } = configureChains(
  [mainnet, goerli, hardhat],
  [
    alchemyProvider({ apiKey: "077UtG2uFmjjvV8DEe-zU7VD58r47LHS" }),
    alchemyProvider({ apiKey: "KcmQtD-WPO5En016ukx2x-g6NvqbYf0w" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Minting App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Analytics debug={false} />
    <BrowserRouter>
      <ScrollToTop>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              accentColor: "#D0D0D0",
              accentColorForeground: "#000",
              borderRadius: "none",
              fontStack: "system",
            })}
          >
            <Routes>
              <Route path="/" element={<PageLayout />}>
                <Route index element={<Mint />} />
                <Route path="explorer/:tokenId" element={<Explorer />} />
                <Route path="*" element={<Nothing />} />
              </Route>
            </Routes>
          </RainbowKitProvider>
        </WagmiConfig>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);
