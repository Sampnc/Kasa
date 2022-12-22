import React from "react";
import { useParams } from "react-router-dom";

export default function Logement () {
    console.log(useParams())
    return (
        <div>
            <h1>Logement</h1>
        </div>
    );
};