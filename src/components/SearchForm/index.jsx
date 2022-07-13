import React, { useState, useEffect } from 'react'; 
import { useNavigate } from "react-router-dom";

function SearchForm(){
    const [username, setUsername] = useState('');
    const [submitValue, setSubmitValue] = useState('');
    const [showRepos, setShowRepos] = useState([]);
    const navigate = useNavigate();

    function handleUsername(e){
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
                const result = await fetch(`https://api.github.com/users/${username}/repos`);
                const data = await result.json();
                setShowRepos(data);
                console.log(showRepos)
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
                <input type="text" className="form" name="enter_username" onChange={handleUsername} value={username}/>
                <input type="submit" className="form" value="Send!" />
            </form>
            {/* <ul>{showRepos.map((repo) => <li>{repo.name}</li> )}</ul> */}
        </>
    )
}


export default SearchForm;
