import React, { ReactElement } from "react";
import { Outlet, Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { Layout, HeaderWrapper, LogoWrapper, LogoImage, ConnectButtonWrapper } from "../app.styles";

function PageLayout(): ReactElement {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}

function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link to={"/"}>
          <LogoImage src="https://cdn.loreum.org/logos/white.svg" />
        </Link>
      </LogoWrapper>
      <ConnectButtonWrapper>
        <ConnectButton />
      </ConnectButtonWrapper>
    </HeaderWrapper>
  );
}

export default PageLayout;
