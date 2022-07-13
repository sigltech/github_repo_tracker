
import React, { useState, useEffect } from 'react'; 

function SearchForm(){
    const [username, setUsername] = useState('')
    const [submitValue, setSubmitValue] = useState('')

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
                console.log(result)
                const data = await result.json();
                console.log(data)

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
                <input type="text" name="enter_username" onChange={handleUsername} value={username}/>
                <input type="submit" value="Send!" />
            </form>
        </>
    )
}


export default SearchForm;
