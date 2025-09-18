import {useLocation} from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const location = useLocation();
  const isViewPage = location.pathname.startsWith("/feed") && location.pathname !== "/feed";
  const isHomePage = location.pathname === "/";
  
  return (
    <div id="wrap">
      {!isViewPage && !isHomePage && <Header />}
      {children}
      {!isViewPage && !isHomePage && <Footer />}
    </div>
  );
};

export default Layout;