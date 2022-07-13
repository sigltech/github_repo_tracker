import React from "react";
import './style.css'
import Logo from '../../images/icons8-github.svg';

export default function IndexPage() {


  return (
    <div className="index-container">

      <h1>Learn about a Github User's information</h1>
      <img className="index-image" src={Logo} alt="github" />
    </div>
    )
}
