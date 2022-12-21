import "./index.css";
import React, {useState} from "react";

export default function Dropdown (props) {
    const [isOpen, setIsOpen] = useState(false)
    console.log(props)
    return (
        <div className="dropdownContainer">
            <div className="dropdownTitle">
                <h3>{props.data.title}</h3>
                <button style={
                    isOpen ? {transform: "rotate(180deg)"}: {transform: "rotate(0deg)"}
                } onClick={() => setIsOpen(!isOpen)}><i className="fa-sharp fa-solid fa-chevron-down"></i></button>
                </div>
            {isOpen && (<div className="dropdownDescription">
                <p>{props.data.description}</p>
            </div>)}
        </div>
    );
};