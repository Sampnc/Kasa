import { Link } from "react-router-dom";
import "./index.css";

export default function Card ({ data }) {
    //console?.log(data.cover)
    
    return (
        <div className="cardContainer">
            <Link to={`/logement/{data.logement.id}`}>
                <img src={data.cover} alt="" />
                <h3>hefj</h3>
            </Link>
        </div>
    );
};
