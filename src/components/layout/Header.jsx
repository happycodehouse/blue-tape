import {Link, useLocation} from "react-router-dom";
import headerStyle from "./header.module.scss";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const getPageTitle = () => {
    switch (currentPath) {
      case "/resume":
        return "Resume";
      case "/feed":
        return "Feed";
      default:
        return "BLUE-Tape";
    }
  };
  
  const navItems = [
    {path: "/resume", label: "Resume"},
    {path: "/feed", label: "Feed"},
    {path: "/", label: "Home"}
  ];
  
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.inner}>
        <div className={headerStyle.logo}>
          {getPageTitle()}
        </div>
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