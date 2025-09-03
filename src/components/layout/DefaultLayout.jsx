import {useLocation} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const DefaultLayout = ({ children }) => {
  const location = useLocation();
  const isViewPage = location.pathname.includes('/feed/view');
  
  return (
    <div id="defaultLayout">
      {!isViewPage && <Header />}
      {children}
      {!isViewPage && <Footer />}
    </div>
  );
};

export default DefaultLayout;