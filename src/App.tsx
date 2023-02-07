import React, {useState} from 'react';
import {Header} from "./components/layout/Header";
import {Map} from "./components/Map/Map";
import {SearchContext} from './context/search.context';

export const App = () => {
    const [search, setSearch] = useState('');   // dajemy kontext w rozne miejsca aplikacji


    return (
        <>
            <SearchContext.Provider value={{search, setSearch}}>
                <Header/>
                <Map/>
            </SearchContext.Provider>
        </>
    );
}



