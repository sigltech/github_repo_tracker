import React from "react";
import SearchForm from "../../components/SearchForm";
import './style.css'
// import { UserContext } from "../../context/RepoContext";

export default function SearchPage() {
    // const [users, setUsers] = useContext(UserContext)

    return (
        <>
            <h1>Search For Users</h1>
            <SearchForm />
        </>
    );
}
