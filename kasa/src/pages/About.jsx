import React, {useState, useEffect } from "react";
import background from "../assets/images/background_2.png"

import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";

export default function About () {
    const [aboutList, setAboutList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/about.json")
	        .then(reponse => reponse.json())
	        .then(array => setAboutList(array))      
    },[])
    
    return (
        <div className="aboutContainer">
            <Banner background={background}/>
            <div>
                {aboutList.map((element) => (
                <Dropdown key={element.title} data={element}/>
                ))}
            </div>     
        </div>
    );
};
