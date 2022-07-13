import React, {createContext, useState} from 'react';

export const RepoContext = createContext();

export const RepoProvider = (props) => {
    const [repo, setRepo] = useState();

    return(
        <RepoContext.Provider value={[repo, setRepo]}>
            {props.children}
        </RepoContext.Provider>
    )
}
