import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Card from "../components/Card";
import background from "../assets/images/background_1.png"


export default function Home () {
        
    return (
        <div>
            <Banner title={"Chez vous, partout et ailleurs"} background={background}/>
            <div>
                <Gallery />
            </div>
            <div>
                <Card />
            </div>
        </div>
    );
};
