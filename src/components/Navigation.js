import React from 'react';
import { useAuth } from '../contexts/AuthContext';

import { StyledNavWrap, StyledNav, NavLink } from '../styles/GlobalStyles';

const Navigation = () => {
    const { currentUser } = useAuth();

    return (
        <StyledNavWrap>
            <StyledNav>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                {currentUser && (
                    <li>
                        <NavLink to="/create">Create</NavLink>
                    </li>
                )}
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </StyledNav>
            {!currentUser && (
                <StyledNav>
                    <li>
                        <NavLink to="/signup">Singup</NavLink>
                    </li>
                </StyledNav>
            )}
        </StyledNavWrap>
    );
};
export default Navigation;
