import { Link } from "react-router-dom";
import "./index.css";

export default function Card ({ data }) {
    //console.log(data.cover)
    return (
        <div className="cardContainer">
            <Link to={`/logement/${data.id}`}>
                <img src={data.cover} alt="" />
                <h3>{data.title}</h3>
            </Link>
        </div>
    );
};
