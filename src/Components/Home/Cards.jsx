import React from "react";

const Card = ({ src, brand }) => {
  return (
    <div>
      <div>
        <img src={src} />
        <section>
          <h2>{brand}</h2>
        </section>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <section className="mt-10">
      <div className="text-4xl mb-6">Latest in Beauty and Grooming</div>
      <div className="grid grid-cols-3">
        <Card src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/1850cdd3-e1be-47b3-ac4b-f8f395afce491645791174169-SS22-Beauty-Biotique.jpg" />
        <Card src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/7f7c368a-fa16-44f9-b7a2-8562ec21ba0a1645791174190-SS22-Beauty-ColorBar.jpg" />
        <Card src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/31253277-4623-43ed-9129-9b8015520e901645791174285-SS22-Beauty-Mamaearth.jpg" />
      </div>
    </section>
  );
};

export default Cards;
