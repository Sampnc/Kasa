import React from "react";
import "./style.css";
import kasa_logo from "../../assets/images/kasa_logo.png"
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="headerContainer">
            <img src={kasa_logo} alt="Logo de Kasa" />
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">À Propos</NavLink>
            </nav>
        </div>
    );    
};


