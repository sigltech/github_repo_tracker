import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'; 
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';

function SearchForm(){

    const [submitValue, setSubmitValue] = useContext(UserContext);    
    const [username, setUsername] = useState('');
    const [repos, setRepos] = useState([]);
    let navigate = useNavigate();


    function handleUsername(e){
        setUsername(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault()
        setSubmitValue(username)
        setUsername('')
    }

    function navigateToRepo(e){
        navigate(`/search/${e.target.textContent}`)
    }

    useEffect(() => {
        
        async function fetchRepos(username){
            try {
                const GIT_USER_URL = `https://api.github.com/users/${username}/repos`;
                const result = await axios.get(GIT_USER_URL);
                setRepos(result.data);
                console.log(result.data)
            }catch (err) {
                console.log(err)
            }
        }
        fetchRepos(submitValue)
    }, [submitValue])
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className='input-div'>
                <label htmlFor="enter_username">Type a username</label>
                <input type="text" className="form" name="enter_username" onChange={handleUsername} value={username}/>
                </div>
                <input type="submit" className="form" value="Send!" />
            </form>
            <ul>{repos.map((repo, index) => <li key={index} onClick={navigateToRepo}>{repo.name}</li> )}</ul>
        </>
    )
}


export default SearchForm;
