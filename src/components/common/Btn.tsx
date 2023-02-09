import React from "react";

import './Btn.css'
import {Link} from "react-router-dom";

interface Props {
    text: string;
    to?: string;
}

export const Btn = (props: Props) => (
  props.to
      ? <Link className="btn" to={props.to}>{props.text}</Link> : <button>{props.text}</button>
)
/*/jak w propsie bedzie TO to wtedy robimy cos innego,a mianowice LinK a jak nie to wyswietl buttona z tekstem*/