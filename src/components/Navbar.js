import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
    // const [navbarOpen, setNavbarOpen] = useState(false);
    // const handleToggle = () => {
    //     setNavbarOpen(prev => !prev);
    // }
    const [toggle, setToggle] = useState(false);
    const clickHandler = () => {
        setToggle(!toggle);
    };


    return (
        <nav className="nav">

            <Link to="/Kasia" className="nav__logo">Katarzyna Durbas</Link>
            {/*<button className="nav__toggle-btn" >*/}
                {/*<BiMenu  onClick={clickHandler}/>*/}
            {/*</button>*/}
            <div className="nav__menu">
                <DesktopMenu/>
                <MobileMenu/>

            </div>


        </nav>
    );
};

export default Navbar;