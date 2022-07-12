import React from "react";
import './style.css'
import { useNavigate } from "react-router-dom";

export default function IndexPage() {
  const navigate = useNavigate();

  function navigateToSearch() {
    navigate("/search");
  }

  return (
    <div className="index-container">

      <h1>Learn about a Github Users information</h1>
      <button onClick={navigateToSearch}>Press to begin Search</button>

    </div>
    )
}
