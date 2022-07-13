import React from "react";
import { useNavigate } from "react-router-dom";

export function RepoCard(repo) {
    console.log(repo)
    const navigate = useNavigate();

    function navigateToRepo() {
        navigate(-1)
    }
    return (
        <>
        <p className="repo-fullname">{repo.repo.full_name}</p>
        <p>Language: {repo.repo.language}</p>
        <p>Forks: {repo.repo.forks_count}</p>
        <p>Last Updated: {repo.repo.updated_at}</p>
        <button onClick={navigateToRepo} >Go Back</button>
        </>
    );
}
