import React, {useContext} from "react";
import SearchForm from "../../components/SearchForm";
import { UserContext } from "../../context/UserContext";
import './style.css'


export default function SearchPage() {

    const [submitValue, setSubmitValue] = useContext(UserContext)
    return (
        <>
            <h1 className="searchPage-header">Search For Users</h1>
            <SearchForm submitValue={submitValue} setSubmitValue={setSubmitValue}/>
        </>
    );
}
