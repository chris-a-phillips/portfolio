import styled from 'styled-components'

export const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    min-height: 10%;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    color: white;
    z-index: 3;
`

export const NavLogo = styled.h1`
justify-self: flex-start
`
export const NavUL = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
`

export const NavLI = styled.li`
    margin: 5px;
`