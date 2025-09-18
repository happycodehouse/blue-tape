import {Link, useLocation} from "react-router-dom";

import headerStyle from "./header.module.scss";
import {useDirectionalHover} from "../../hooks/useDirectionalHover.js";

const NavItem = ({ item, currentPath }) => {
  const { overlayStyle, getHoverProps } = useDirectionalHover({
    background: "#f5f5f5"
  });
  
  return (
    <li {...getHoverProps()}>
      <div className="overlay" style={overlayStyle} />
      <Link to={item.path}>
        {currentPath === "/" ? "" : "/ "}{item.label}
      </Link>
    </li>
  );
};

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const getPageTitle = () => {
    switch (currentPath) {
      case "/feed":
        return "Feed";
      case "/resume":
        return "Resume";
      default:
        return "";
    }
  };
  
  const navItems = [
    {path: "/feed", label: "Feed"},
    {path: "/resume", label: "Resume"},
    {path: "/", label: "Home"}
  ];
  
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.inner}>
        {currentPath !== "/" && (
          <div className={headerStyle.logo}>
            {getPageTitle()}
          </div>
        )}
        <ul className={headerStyle.nav}>
          {navItems.map((item) => {
            if (currentPath !== item.path) {
              return (
                <NavItem
                  key={item.path}
                  item={item}
                  currentPath={currentPath}
                />
              );
            }
            return null;
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;