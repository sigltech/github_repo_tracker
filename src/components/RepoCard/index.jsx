import React from "react";
import { useNavigate } from "react-router-dom";

export default function RepoCard(repo) {
    console.log(repo)

    const navigate = useNavigate();

    function navigateToRepo() {
        navigate(-1)
    }
    console.log(repo.repo.owner.avatar_url)
    return (
        <>
            <h2 >{repo.repo.full_name}</h2>
            <div className="cards">

                <div className="card">
                    <img src={repo.repo.owner.avatar_url} />
                </div>

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
            <button className="goback-btn" onClick={navigateToRepo} >Go Back</button>

        </>
    );
}
