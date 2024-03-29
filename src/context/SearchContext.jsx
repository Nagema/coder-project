import React, { createContext, useState } from 'react';

export const Search = createContext()

export const SearchProvider = ({children}) => {

    const [searchInput, setSearchInput] = useState('');

return (
    <Search.Provider value={{searchInput, setSearchInput}}>
        {children}
    </Search.Provider>
    )
}
