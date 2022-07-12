import React from "react";
import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <header>
            <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/search">Search</NavLink>
            </nav>
        </header>
    );
}