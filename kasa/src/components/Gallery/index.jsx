import "./index.css";
import Card from "../Card";

export default function Gallery ({ galleryLogement }) {
    
    return (
        <div className="galleryContainer">
            <ul>
                {galleryLogement.map((logement) => (
                <li key={logement.id}><Card data={logement}/></li>)
                )}
            </ul>
        </div>
    );
};