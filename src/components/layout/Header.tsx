import React, {FormEvent, useContext, useState} from "react";
import {Btn} from "../common/Btn";

import {SearchContext} from "../../context/search.context";
import './Header.css'


export const Header = () => {
    const {search, setSearch} = useContext(SearchContext)
    const [inputVal, setInputVal] = useState(search)

    const setSearchFromLocalState = (e: FormEvent) => {
        e.preventDefault();
        setSearch(inputVal);    //bierzemy setsearch z kontextu i podajemy to co mamy aktualnie w inpucie
    }


    return (
        <header>
            <h1>
                <strong>MEGA</strong> advertisements
            </h1>
            <Btn to='./add' text="Add advertisement"/>
            <form className="search" onSubmit={setSearchFromLocalState}>

                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
                <Btn text="Search..."/>
            </form>
        </header>
    )
}