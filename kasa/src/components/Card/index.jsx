import { Link } from "react-router-dom";
import "./index.css";

export default function Card ({ data }) {
    //console.log(data.cover)
    return (
        <div className="cardContainer">
            <Link to={`/logement/${data.id}`}>
                <div className="logementTitle">
                    <h3>{data.title}</h3>
                </div>
                <img src={data.cover} alt="" />
                
            </Link>
        </div>
    );
};
