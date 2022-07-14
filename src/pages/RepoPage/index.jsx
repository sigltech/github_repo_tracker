import React, { useEffect, useState, useContext} from "react";
import RepoCard from "../../components/RepoCard";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import './style.css'

export default function RepoPage() {
    const [submitValue, setSubmitValue] = useContext(UserContext)
    const {name} = useParams();
    const [repo, setRepo] = useState({owner: {avatar_url: ''}});

    useEffect( () => {

        async function fetchRepo(name) {

            const GITHUB_USER_URL = `https://api.github.com/repos/${submitValue}/${name}`;
            const result = await axios.get(GITHUB_USER_URL)
            setRepo(result.data);
            console.log(result.data)
            
        }
        fetchRepo(name);
    }, [name, submitValue])

    return (    
        <>
        <h1 className="repo-h1-name">Repo Name: {name}</h1>
        <RepoCard repo={repo}/>
        </>
    )
}
