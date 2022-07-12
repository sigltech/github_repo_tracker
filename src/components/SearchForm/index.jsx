import React, { useState } from 'react'; 

function SearchForm(){
    const [username, setUsername] = useState('')

    function handleUsername(e){
        setUsername(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault()
        setUsername()
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="enter_username">Type a username</label>
                <input type="text" name="enter_username" OnChange={handleUsername} value={username}/>
                <input type="submit" value="Send!" />
            </form>
        </>
    )
}


export default SearchForm;
