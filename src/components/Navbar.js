import React from "react";

const Navbar = () => {
    const navLinks = ["Home", "New", "Popular", "Trending", "Categories"];

    const listItems = navLinks.map((link) => {
        return (
            <li key={link.toLowerCase()}>
                <a href="#">{link}</a>
            </li>
        )
    });

    return (
        <nav>
            <ul>
                { listItems }
            </ul>
        </nav>
    )
}

export default Navbar;
