import { Link } from "react-router-dom";
import "../styles/index.css";
export default function ErrorPage () {
    return (
        <div className="errorContainer">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>

            <Link to="/">Retournez sur la page d'accueil</Link>
        </div>
    );
};
