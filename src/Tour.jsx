import React, { useState } from "react";

const Tour = (props) => {
  // 7. Buat nama objek yang ada di data tour
  const { id, image, name, price, info, removeTour } = props;

  // 11. useState read more
  const [readMore, setReadMore] = useState(false);

  // 8. Buat single tour card
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {/**12. readmore handler */}
          {readMore ? info : `${info.substring(0, 300)}...`}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "readmore"}
          </button>
        </p>
      </div>
      <button
        className="btn btn-block delete-btn"
        onClick={() => removeTour(id)}
      >
        not interested
      </button>
    </article>
  );
};

export default Tour;
