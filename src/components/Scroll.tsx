import { useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const ScrollToTop = ({ children }: Props): any => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;
