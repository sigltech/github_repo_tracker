import axios from 'axios';
import React, { useState, useEffect } from 'react'; 
import { useNavigate } from "react-router-dom";

function SearchForm(){

    const [username, setUsername] = useState('');
    const [submitValue, setSubmitValue] = useState('');
    const [repos, setRepos] = useState([]);
    const navigate = useNavigate();

    function handleUsername(e){
        console.log(e.target.value)
        setUsername(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault()
        setSubmitValue(username)
        setUsername('')
    }

    useEffect(() => {
        
        async function fetchRepos(username){
            try{
                const GIT_USER_URL = `https://api.github.com/users/${username}/repos`;
                const result = await axios.get(GIT_USER_URL);
                setRepos(result.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchRepos(submitValue)
    }, [submitValue])

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="enter_username">Type a username</label>
                <input type="text" className="form" id="enter_username" onChange={handleUsername} value={username}/>
                <input type="submit" className="form" value="Send!" />
            </form>
            <ul>{repos.map((repo, index) => <li key={index} onClick={() => navigate(`/search/${repo.name}`)}>{repo.name}</li>)}</ul>
            
        </>
    )
}


export default SearchForm;
