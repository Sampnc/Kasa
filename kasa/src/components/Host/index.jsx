import "./index.css";

export default function Host ({ host }) {

    console.log(host)

    return (
        <div className="hostContainer">
          <h3>{host.name}</h3>
          <img src={host.picture} alt={host.name} />
        </div>
    );
};