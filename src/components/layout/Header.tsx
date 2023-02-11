import React, {FormEvent, useContext, useState} from "react";
import {Btn} from "../common/Btn";

import {SearchContext} from "../../context/search.context";
import './Header.css'
import { Link } from "react-router-dom";


export const Header = () => {
    const {search, setSearch} = useContext(SearchContext)
    const [inputVal, setInputVal] = useState(search)

    const setSearchFromLocalState = (e: FormEvent) => {
        e.preventDefault();
        setSearch(inputVal);    //bierzemy setsearch z kontextu i podajemy to co mamy aktualnie w inpucie
    }


    return (
        <header>
            <h1><Link className="link" to={'/'}>
                <strong>MEGA</strong> advertisements

            </Link>
            </h1>
            <Btn to='./add' text="Add advertisement"/>
            <form className="search" onSubmit={setSearchFromLocalState}>

                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
                <Btn text="Search..."/>
            </form>
        </header>
    )
}