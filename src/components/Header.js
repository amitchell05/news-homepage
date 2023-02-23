import "./Header.css";

import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-menu.svg";
// import menuClose from "../assets/images/icon-menu-close.svg";

const Header = () => {
    // const navLinks = ["Home", "New", "Popular", "Trending", "Categories"];

    // const listItems = navLinks.map((link) => {
    //     return (
    //         <li key={link.toLowerCase()}>
    //             <a href="#" target="_self">{link}</a>
    //         </li>
    //     )
    // });

    return (
        <header>
            <nav>
                <div className="header-logo">
                    <a href="foo" target="_self">
                        <img src={ logo } alt="logo" />
                    </a>
                </div>
                <div className="header-menu">
                    <img src={ menu } alt="menu" />
                </div>
                {/* <ul>
                    { listItems }
                </ul> */}
            </nav>
        </header>
    )
}

export default Header;
