import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Tag from "../components/Tag";


export default function Logement () {
    console.log(useParams())
    const { id } = useParams();
    const [logement, setLogement] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/logement.json")
	        .then(reponse => reponse.json())
            .then (array => {
                console.log(array)
                const test = array.filter((e) => e.id === id);
                console.log(test[0]) 
            })      
    },[])

    return (
        <div>
            <div className="logementPlug"></div>
                <div className="LogementInfos">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                </div>
                <div className="tagContainer">
                    <ul className="tagCategory">
                        {logement.tags?.map((tag) => (
                        <Tag key={tag} tag={tag} />
                        ))}
                    </ul>
                </div>

        </div>
    );
};
