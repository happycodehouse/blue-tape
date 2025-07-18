import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const DefaultLayout = ({ children }) => {
  return (
    <div id="defaultLayout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;