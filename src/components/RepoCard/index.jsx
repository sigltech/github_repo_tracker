import React from "react";

export function RepoCard(repo) {
    console.log(repo)
    return (
        <>
        <h2>Repo Name: {repo.repo.name}</h2>
        <h3>Full Name: {repo.repo.full_name}</h3>
        <p>Language: {repo.repo.language}</p>
        <p>Forks: {repo.repo.forks_count}</p>
        <p>Last Updated: {repo.repo.updated_at}</p>
        </>
    );
}
