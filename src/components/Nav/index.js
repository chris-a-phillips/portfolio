import React from 'react';
import { NavUL, NavLI } from './NavElements'

const Nav = () => {
    return (
        <div>
            Nav
            <NavUL>
                <NavLI>logo or home button on the left</NavLI>
                <NavLI>about</NavLI>
                <NavLI>projects</NavLI>
                <NavLI>contact</NavLI>
                <NavLI>resume</NavLI>
            </NavUL>
        </div>
    );
};

export default Nav;