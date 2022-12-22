import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Card from "../components/Card";
import background from "../assets/images/background_1.png"


export default function Home () {
    const [logementsList, setLogementsList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/logement.json")
	        .then(reponse => reponse.json())
	        .then(array => setLogementsList(array))      
    },[])
        //console.log(logementsList)

    return (
        <div>
            <Banner title={"Chez vous, partout et ailleurs"} background={background}/>
            <div>
                <Gallery galleryLogement={logementsList}/>
            </div>
            <div className="logementCard">
                
            </div>
        </div>
    );
};
