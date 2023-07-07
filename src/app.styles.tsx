import { styled } from "./style";

export const Layout = styled("div", {
  minHeight: "100vh",
  overflowY: "visible",
  display: "flex",
  flexFlow: "column nowrap",
  gap: "2rem",
  backgroundColor: "$black",
  [`@media  (max-width: 1250px)`]: {
    gap: "1rem",
    padding: "0rem 0rem",
  },
});

export const Wrapper = styled("div", {
  width: "100%",
  padding: "0 15rem",
  [`@media  (max-width: 1250px)`]: {
    padding: "0 0.5rem 0 0rem",
  },
  // border: '0.5px solid yellow'
});

export const Row = styled("div", {
  display: "flex",
  // padding: '10px',
  width: "80%",
  margin: "3rem 5rem",
  [`@media  (max-width: 1250px)`]: {
    // padding: '10px',
    width: "100%",
    margin: "0.5rem 0.5rem 0rem 0.5rem",
  },
  [`@media  (max-width: 1000px)`]: {
    // padding: '10px',
    flexFlow: "wrap",
    justifyContent: "center",
    width: "100%",
    margin: "0.5rem 0.25rem 0rem 0.25rem",
  },
  // border: '0.5px solid yellow'
});

export const Column = styled("div", {
  display: "flex",
  padding: "10px",
  width: "100%",
  // border: '0.5px solid yellow'
});

export const HeaderWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 10rem 0rem 13rem",
  [`@media  (max-width: 1250px)`]: {
    width: "100%",
    padding: "0rem 0.5rem 0rem 0.5rem",
  },
  // border: '0.5px solid yellow'
});

export const LogoWrapper = styled("div", {
  height: "75px",
  width: "75px",
  display: "flex",
  marginLeft: "rem",
  alignItems: "left",
  columnGap: "0.5rem",
  // border: '0.5px solid yellow'
});

export const LogoImage = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "25px",
});

export const LogoText = styled("a", {
  display: "flex",
  fontFamily: "Cairo",
  textDecoration: "none",
  alignItems: "center",
  height: "100%",
  fontSize: "2rem",
  color: "$white",
  [`@media  (max-width: 1250px)`]: {
    visibility: "hidden",
  },
  // border: '0.5px solid yellow'
});

export const ConnectButtonWrapper = styled("div", {
  // position: 'absolute',
  // display: 'flex',
  justifyContent: "right",
  // border: '0.5px solid yellow'
});

export const TitleWrapper = styled("div", {
  justifyContent: "space-around",
  width: "100%",
  // border: '0.5px solid yellow'
});

export const TitleColumnWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  // border: '0.5px solid yellow'
});

export const Title = styled("h2", {
  width: "100%",
  fontFamily: "Cairo",
  fontWeight: "normal",
  color: "$gray1",
  // border: '0.5px solid yellow'
});

export const TotalSupply = styled("h2", {
  display: "flex",
  width: "30%",
  fontFamily: "Cairo",
  color: "$gray2",
  // border: '0.5px solid yellow'
});

export const DarkTitle = styled("span", {
  color: "$gray3",
});

export const InfoTitle = styled("h1", {
  display: "flex",
  color: "$gray1",
  letterSpacing: "1px",
  fontFamily: "Cairo",
  fontWeight: "normal",
  [`@media  (max-width: 1000px)`]: {
    justifyContent: "center",
  },
  // border: '0.5px solid yellow'
});

export const InfoBelt = styled("h3", {
  display: "flex",
  width: "100%",
  fontWeight: "lighter",
  fontFamily: "Cairo",
  color: "$gray3",
  [`@media  (max-width: 1000px)`]: {
    textAlign: "center",
  },
  // border: '0.5px solid yellow'
});

export const InfoImage = styled("img", {
  height: "200px",
  width: "200px",
  [`@media  (max-width: 1000px)`]: {
    height: "80%",
    width: "80%",
  },
  // border: '0.5px solid yellow'
});

export const InfoCopyWrapperLeft = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "0rem 2rem 0rem 0rem",
  width: "100%",
  [`@media  (max-width: 1000px)`]: {
    justifyContent: "center",
    margin: "1rem 0 0rem 0rem",
  },
  // border: '0.5px solid yellow'
});

export const InfoCopyWrapperRight = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "0rem 0rem 0rem 2rem",
  width: "100%",
  [`@media  (max-width: 1000px)`]: {
    justifyContent: "center",
    margin: "1rem 0 0rem 0rem",
  },
  // border: '0.5px solid yellow'
});

export const InfoCopyTitle = styled("span", {
  display: "flex",
  fontSize: "1.5rem",
  letterSpacing: "1px",
  [`@media  (max-width: 1000px)`]: {
    justifyContent: "center",
  },
  color: "$gray2",
  fontFamily: "Cairo",
  // border: '0.5px solid yellow'
});

export const InfoCopy = styled("h4", {
  color: "$gray4",
  fontFamily: "Cairo",
  fontWeight: "lighter",
  fontSize: "1.1rem",
  lineHeight: "1.7rem",
  [`@media  (max-width: 1000px)`]: {
    textAlign: "center",
  },
  // border: '0.5px solid yellow'
});

export const NftCollection = styled("div", {
  display: "flex",
  minHeight: "400px",
  flexWrap: "wrap",
  [`@media  (max-width: 1000px)`]: {
    minHeight: "700px",
  },
  justifyContent: "space-around",
  // border: '0.5px solid yellow'
});

export const NftImage = styled("img", {
  width: "175px",
  height: "175px",
  margin: "0.5rem",
  [`@media  (max-width: 1000px)`]: {
    margin: "0.5rem 1rem",
    width: "125px",
    height: "125px",
  },
  // border: '0.5px solid yellow'
});

export const MintControlWrapper = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "row",
  width: "100%",
  // border: '0.5px solid yellow'
});

export const MintHeaderCol = styled("h2", {
  width: "35%",
  fontFamily: "Cairo",
  fontWeight: "normal",
  color: "$gray1",
  // border: '0.5px solid yellow'
});

export const MintAmountButton = styled("button", {
  backgroundColor: "transparent",
  width: "30px",
  color: "$white",
  cursor: "pointer",
  border: "0px solid black",
});

export const MintCopyText = styled("span", {
  fontFamily: "Cairo",
  fontWeight: "lighter",
  fontSize: "0.85rem",
  letterSpacing: "1px",
  color: "$gray2",
  textTransform: "uppercase",
});

export const MintStatusText = styled("span", {
  fontFamily: "Cairo",
  fontWeight: "lighter",
  fontStyle: "italic",
  letterSpacing: "1px",
  color: "$gray2",
  textTransform: "lowercase capitalize",
});

export const MintingButton = styled("button", {
  width: "100%",
  fontFamily: "Cairo",
  textTransform: "uppercase",
  padding: "1rem 2rem",
  color: "black",
  backgroundColor: "$gray1",
  borderRadius: "0px",
  border: "none",
  outline: "none",
  fontWeight: "bold",
  fontSize: "1.2em",
  cursor: "pointer",
  transition: "background-color 0.1s ease-in-out",

  "&:hover": {
    height: "grow",
    backgroundColor: "$gray4",
  },
  "&:active": {
    backgroundColor: "$gray3",
  },
  "&:disabled": {
    backgroundColor: "$gray4",
    cursor: "not-allowed",
  },
});

export const MintStatusWrapper = styled("div", {
  padding: "1rem 0rem",
});

export const TokenIdText = styled("div", {
  padding: "0 1rem",
  color: "$gray2",
  fontFamily: "Cairo",
});

export const EtherScanLink = styled("a", {
  color: "$gray2",
  textDecoration: "none",
  fontFamily: "Cairo",
  border: "1px solid $gray2",
  textTransform: "uppercase",
  margin: "1rem",
  padding: "0rem 1rem 0rem 1rem",
});

export const FooterTextLink = styled("a", {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  textDecoration: "none",
  width: "100%",
  height: "2rem",
  // flexDirection: 'column',
  fontFamily: "Cairo",
  color: "$gray3",
  // border: '0.5px solid yellow'
});

export const FooterColumn = styled("div", {
  display: "flex",
  // flexDirection: 'column',
  paddingTop: "2rem",
  justifyContent: "center",
  width: "100%",
  // border: '0.5px solid yellow'
});

export const ExplorerColumnWrapper = styled("div", {
  display: "flex",
  flexDirection: "column no-wrap",
  width: "100%",
  // border: '0.5px solid yellow'
});

export const ExplorerTitle = styled("div", {
  display: "flex",
  color: "$gray2",
  width: "100%",
  fontSize: "2.2rem",
  fontFamily: "Cairo",
  // border: '0.5px solid yellow'
});

export const ExplorerNftImage = styled("img", {
  display: "flex",

  width: "50%",
  // border: '0.5px solid yellow'
});

export const ExplorerColorWheel = styled("div", {
  display: "flex",
  width: "100%",
  // border: '0.5px solid yellow'
});
