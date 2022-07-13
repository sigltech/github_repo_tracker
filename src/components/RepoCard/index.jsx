// import React, {useContext} from "react";
// import {SearchForm} from "../SearchForm";


// export default function RepoCard() {

//     const[repos, setRepos] = useContext(ReposContext);

    // function renderPublicRepoCount(userData){
    //     const count = userData.public_repos;
    //     const span = document.getElementById('repo-count');
    //     span.textContent = count;
    //     const descrip = document.querySelector('#descrip');
    //     descrip.textContent = ' public repos';
    //     document.getElementById('name').value = '';
    // };  
    // return (
    //     <>
    //         <h1>{username}\'s Public Repos</h1>
    //         {repos ? (repos.map((id) => {
    //             return(
    //                 <>
    //                     <h2>{repos.name}</h2>
    //                     <h3>{repos.full_name}</h3>
    //                     <p>{repos.language}</p>
    //                     <p>{repos.forks_count}</p>
    //                     <p>{repos.updated_at}</p>
    //                 </>
    //             )
    //         }) ): 'loading'}
    //     </>
    // );
//}
