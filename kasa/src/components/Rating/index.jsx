import React from "react";
import "./index.css";

export default function Rating ({ rating }) {
    const stars = [1, 2, 3, 4, 5];
    // console.log(stars)

    return (
      <div className="rating">
        {/* Boucle pour afficher l'étoile par note */}
        {stars.map((star) =>
          rating >= star ? (
            <i className="fa-solid fa-star star_pink"
            key={star.toString()}
            />
          ) : (
            <i className="fa-solid fa-star star_grey"
            key={star.toString()}
            />
          )
        )}
      </div>
    );
};
