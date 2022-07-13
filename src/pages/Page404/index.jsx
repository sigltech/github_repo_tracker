import React from "react";
import NotFound from '../../images/undraw_page_not_found_re_e9o6.svg';
import './style.css'

export default function Page404() {
    return (
        <>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <img className="errorpage-image" src={NotFound} alt="404 error" />
        </>
    );
}
