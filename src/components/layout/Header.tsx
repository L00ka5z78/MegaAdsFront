import React from "react";
import {Btn} from "../../common/Btn";

import './Header.css'


export const Header = () => (
    <header>
        <h1>
            <strong>MEGA</strong> advertisements
        </h1>
    <Btn text="Add advertisement"/>
        <div className="search">
            <input type="text"/>
            <Btn text="Search..."/>
        </div>
    </header>
)