import React from 'react';
import { NavUL, NavLI, NavWrapper, NavLogo } from './NavElements'

const Nav = () => {
    return (
        <>
        <NavWrapper>
            <NavLogo>Nav</NavLogo>
            <NavUL>
                <NavLI>about</NavLI>
                <NavLI>projects</NavLI>
                <NavLI>contact</NavLI>
                <NavLI>resume</NavLI>
            </NavUL>
        </NavWrapper>
        </>
    );
};

export default Nav;