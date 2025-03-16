import headerStyle from "../../styles/layout/_header.module.scss";

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.header_inner}>
                <div className={headerStyle.logo}>BLUE TAPE</div>
                <ul className={headerStyle.gnb}>
                    <li>
                        <a href="">ABOUT</a>
                    </li>
                    <li>
                        <a href="">WORKS</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;