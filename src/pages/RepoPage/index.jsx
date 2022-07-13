import React, { useEffect, useState} from "react";
import axios from "axios";
import { RepoCard } from "../../components/RepoCard";
import { useParams } from "react-router-dom";

export default function RepoPage(submitValue) {
    const {name} = useParams();
    const [repo, setRepo] = useState({});

    useEffect( () => {

        async function fetchRepo(name) {

            const GITHUB_USER_URL = `https://api.github.com/repos/sigltech/Cake_website`;
            const result = await axios.get(GITHUB_USER_URL)
            setRepo(result.data);
            console.log(result.data)
            
        }
        fetchRepo(name);
    }, [name])

    return (
        <>
        <h1>Repo Name: {name}</h1>
        <RepoCard repo={repo}/>
        </>
    )
}
