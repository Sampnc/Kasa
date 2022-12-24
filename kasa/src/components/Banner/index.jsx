import "./index.css";

export default function Banner (props) {
    // console.log(props);
    return (
        <div className="bannerContainer">
            <img src={props.background} alt="Paysage" />
            {props.title && (<h1>{props.title}</h1>)}
        </div>
    );
};