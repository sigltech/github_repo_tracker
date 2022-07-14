import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, Outlet } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();

    function navigateToSearch() {
      try {
        navigate("/search");
      } catch (error) {
        console.log(error);
      }
    }

    return (
        <>
        <header>
            <nav>
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/search">Search</NavLink>
                </div>
                <button aria-label="button" onClick={navigateToSearch}>Press to begin Search</button>
            </nav>
        </header>
        <Outlet />
        </>
    );        
}
