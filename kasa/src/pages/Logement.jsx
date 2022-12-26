import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
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
    // console.log(logement.tags)
    
    if (!logement) {
        return (<ErrorPage />)        
    }
    return (
        <div className="logementContainer">
            <Slideshow slides={logement.pictures} />
            <div className="logementPlug">                
                <div className="logementInfos">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    {/* Le ? dit que si ça existe tu l'affiches */}
                    <ul className="tagCategory">
                        {logement?.tags?.map((tag) => (
                        <Tag key={tag} tag={tag} />
                        ))}
                    </ul>
                </div>                    
                <div className="hostProfile">
                    <Host host={logement.host} />
                    <Rating rating={logement.rating} />
                    
                </div>              
            </div>
            <div className="dropdownBlock">
                <div className="dropdown">
                    <Dropdown title={"Description"} content={logement.description} />
                </div> 
                <div className="dropdown">   
                    <Dropdown title={"Équipements"} content={logement.equipments} />
                </div>
            </div>
            
        </div>
    );
};
