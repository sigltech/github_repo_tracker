import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [submitValue, setSubmitValue] = useState('');

    return(
        <UserContext.Provider value={[submitValue, setSubmitValue]}>
            {props.children}
        </UserContext.Provider>
    )
}
