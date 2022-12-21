import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="headerContainer">
            <img src="kasa_logo.png" alt="Logo de Kasa" />
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">À Propos</NavLink>
            </nav>
        </div>
    );    
};


