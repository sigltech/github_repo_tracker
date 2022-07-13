import React from "react";
import SearchForm from "../../components/SearchForm";
import './style.css'


export default function SearchPage() {

    return (
        <>
            <h1 className="searchPage-header">Search For Users</h1>
            <SearchForm />
        </>
    );
}
