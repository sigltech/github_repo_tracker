import React, { useEffect, useState} from "react";
import axios from "axios";
import { RepoCard } from "../../components/RepoCard";
import { useParams } from "react-router-dom";

export default function RepoPage() {
    const {name} = useParams();
    const [repo, setRepo] = useState({});

    useEffect( () => {

        async function fetchRepo(name) {

            const GITHUB_USER_URL = `https://api.github.com/users/${name}/repos`;
            const result = await axios.get(GITHUB_USER_URL)
            setRepo(result.data);
            
        }
        fetchRepo(name);
    }, [name])

    return (
        <>
        <h1>{name}</h1>
        <RepoCard />
        </>
    )
}
