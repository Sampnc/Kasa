import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Tag from "../components/Tag";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Dropdown from "../components/Dropdown";

export default function Logement () {
    console.log(useParams())
    const { id } = useParams();
    const [logement, setLogement] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/logement.json")
	        .then(reponse => reponse.json())
            .then (array => {
                console.log(array)
                const dataLogement = array.filter((e) => e.id == id);
                setLogement(dataLogement[0])
                console.log(dataLogement[0])
                
            })      
    },[id])
    console.log(logement.tags) 
    return (
        <div>
            <div>
            <Slideshow slides={logement.pictures} />
            </div>
            <div className="logementPlug">
                <div className="LogementInfos">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                </div>
                <div className="tagContainer">
                    {/* Le ? dit que si ça existe tu l'affiches */}
                    <ul className="tagCategory">
                        {logement?.tags?.map((tag) => (
                        <Tag key={tag} tag={tag} />
                        ))}
                    </ul>
                </div>
                <div className="hostProfile">
                    <Rating rating={logement.rating} />
                    <Host host={logement.host} />
                </div>              
            </div>
            <div className="dropdown">
                <Dropdown title={"Description"} content={logement.description} />
                <Dropdown title={"Équipements"} content={logement.equipments} />
            </div>
            
        </div>
    );
};
