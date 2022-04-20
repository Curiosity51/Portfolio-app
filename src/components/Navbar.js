import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react'
import { BiMenu } from "react-icons/bi";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import NavItems from "./NavItems";

const Navbar = () => {
    // const [navbarOpen, setNavbarOpen] = useState(false);
    // const handleToggle = () => {
    //     setNavbarOpen(prev => !prev);
    // }
    const [toggle, setToggle] = useState(false);
    const clickHandler = () => {
         setToggle(!toggle);
        };

    //     console.log('wtf')
    // }
    //


    return (
        <nav className="nav">

            <div className="test">
                <Link to="/Kasia" className="nav__logo">Katarzyna Durbas</Link>
                <BiMenu className="nav__toggle-btn" onClick={clickHandler}/>
                {/*<Hamburger toggled={isOpen} toggle={setOpen} />*/}



            </div>


            <div className="nav__menu">
                <DesktopMenu/>
                {toggle && <MobileMenu />}
                {/*<MobileMenu />*/}

            </div>


        </nav>
    );
};

export default Navbar;