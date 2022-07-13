import React, { useState } from "react";


export function RepoCard(repo) {
    // const { name } = useParams();
    console.log(repo)
    return (
        <>
            <h2>{repo.repo.full_name}</h2>
            <div className="cards">

                <div className="card">
                    <p className="title">Language:</p>
                    <p>{repo.repo.language}</p>
                </div>

                <div className="card">
                    <p className="title">Forks:</p>
                    <p>{repo.repo.forks_count}</p>
                </div>

                <div className="card">
                    <p className="title">Last Updated:</p>
                    <p>{repo.repo.updated_at}</p>
                </div>

            </div>
        </>
    );
}
