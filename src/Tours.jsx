import React from "react";
import Tour from "./Tour";

const Tours = (props) => {
  const { tours, removeTour } = props;

  // 6. Buat tampilin semua tour card
  return (
    <main>
      <div className="title">
        <h1>Our Tours</h1>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          const { id } = tour;

          // Single Tour
          return <Tour key={id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </main>
  );
};

export default Tours;
