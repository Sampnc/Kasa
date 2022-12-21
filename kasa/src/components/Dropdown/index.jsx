import "./index.css";
import React, {useState} from "react";

export default function Dropdown (props) {
    const [isOpen, setIsOpen] = useState(false)
    console.log(props)
    return (
        <div className="dropContainer">
            <div className="dropTitle">
                <h3>{props.props.title}</h3>
                <button style={
                    isOpen ? {transform: "rotate(180deg)"}: {transform: "rotate(0deg)"}
                } onClick={() => setIsOpen(!isOpen)}><i className="fa-sharp fa-solid fa-chevron-down"></i></button>
                </div>
            {isOpen && (<div className="dropDescription">
                <p>{props.props.description}</p>
            </div>)}
        </div>
    );
};