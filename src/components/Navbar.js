import React, {useState} from 'react';
import {Link} from "react-router-dom";
// import {Spin as Hamburger} from 'hamburger-react'
import {BiMenu} from "react-icons/bi";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const clickHandler = () => {
        setToggle(!toggle);
    };
    return (
        <nav className="nav">
            <div className="nav__mobile">
                <Link to="/Kasia" className="nav__mobile-logo">Katarzyna Durbas</Link>
                <BiMenu className="nav__toggle-btn" onClick={clickHandler}/>
            </div>
            <div className="nav__menu">
                <DesktopMenu/>
                {toggle && <MobileMenu/>}
            </div>
        </nav>
    );
};

export default Navbar;