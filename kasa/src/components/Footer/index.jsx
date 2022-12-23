import "./style.css";
import kasa_logo_nb from "../../assets/images/kasa_logo_nb.png"
export default function Footer() {
    return (
        <div className="footerContainer">
            <img src={kasa_logo_nb} alt="logo de Kasa" />
            <h2>© 2022 Kasa. All rights reserved</h2>
        </div>
    );
};
