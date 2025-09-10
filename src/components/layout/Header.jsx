import {Link, useLocation} from "react-router-dom";
import classNames from "classnames";
import headerStyle from "./header.module.scss";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const getPageTitle = () => {
    switch (currentPath) {
      case "/feed":
        return "FEED";
      case "/resume":
        return "RESUME";
      default:
        return "";
    }
  };
  
  const navItems = [
    {path: "/feed", label: "FEED"},
    {path: "/resume", label: "RESUME"},
    {path: "/", label: "HOME"}
  ];
  
  return (
    <header className={classNames(headerStyle.header, currentPath === "/" && headerStyle.home_style)}>
      <div className={headerStyle.inner}>
        {currentPath !== "/" && (
          <div className={headerStyle.logo}>
            {getPageTitle()}
          </div>
        )}
        <ul className={headerStyle.gnb}>
          {navItems.map((item) => {
            if (currentPath !== item.path) {
              return (
                <li key={item.path}>
                  <Link to={item.path}>
                    {currentPath === "/" ? "" : "/ "}{item.label}
                  </Link>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;