// import React, {useEffect} from "react";
// import {SearchForm} from "../SearchForm";
// import {useParams} from 'react-router-dom';

// export default function RepoCard() {
//     const {name} = useParams(name)
//     const [repo, setRepo] = useState({: {}, : {}});

//     return (
//         <>
//             <h1>{username}\'s Public Repos</h1>

//                 return(
//                     <>
//                         <h2>{repo.name}</h2>
//                         <h3>{repo.full_name}</h3>
//                         <p>{repo.language}</p>
//                         <p>{repo.forks_count}</p>
//                         <p>{repo.updated_at}</p>
//                     </>
//                 )
             
//         </>
//     );
// }

import React, { useState } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";

export function RepoCard(repo) {
    // const { name } = useParams();
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
