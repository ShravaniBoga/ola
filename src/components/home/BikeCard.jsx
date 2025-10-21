import React from "react";
import Button from "../../components/ui/Button";
import bikeHeading from "../../assets/bike_heading.svg";
import blackBike from "../../assets/black_bike.webp";
import "./Cards.css";

const BikeCard = () => {
  const bikeProducts = [
    {
      id: 1,
      name: "ROADSTER X",
      tagline: "Upgrade to electric with style",
      monthlyPrice: "6,250/month",
      totalPrice: "74,999",
      ctaText: "Explore Roadster X",
      image: blackBike,
    },
    {
      id: 2,
      name: "ROADSTER X+",
      tagline: "India's ultimate electric upgrade",
      monthlyPrice: "8,333/month",
      totalPrice: "99,999",
      ctaText: "Explore Roadster X+",
      image: blackBike,
    },
    {
      id: 3,
      name: "ROADSTER",
      tagline: "City limit, not your limits.",
      monthlyPrice: "8,750/month",
      totalPrice: "1,04,999",
      ctaText: "Explore Roadster",
      image: blackBike,
    },
    {
      id: 4,
      name: "ROADSTER",
      tagline: "City limit, not your limits.",
      monthlyPrice: "8,750/month",
      totalPrice: "1,04,999",
      ctaText: "Explore Roadster",
      image: blackBike,
    },
    {
      id: 5,
      name: "ROADSTER",
      tagline: "City limit, not your limits.",
      monthlyPrice: "8,750/month",
      totalPrice: "1,04,999",
      ctaText: "Explore Roadster",
      image: blackBike,
    },
  ];

  return (
    <div className="cards-flow">
      <h2>Introducing Roadster Electric Bikes</h2>

      <div className="cards-scroll-container">
        <div className="cards-horizontal">
          {bikeProducts.map((bike) => (
            <div key={bike.id} className="card">
              <div className="card-image">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="product-image"
                />
              </div>
              <div className="card-content">
                <img
                  src={bikeHeading}
                  alt="Bike Heading"
                  className="card-heading-image"
                />
                <p className="card-subtitle">{bike.tagline}</p>

                <div className="card-price">
                  <div className="price-monthly">Starting at</div>
                  <div>
                    <span className="product-monthly-price-rupee">₹</span>{" "}
                    &nbsp;
                    <span className="product-monthly-price">
                      {bike.monthlyPrice}
                    </span>
                  </div>
                </div>

                <div className="card-actions">
                  <Button
                    text={bike.ctaText}
                    bgColor="black"
                    textColor="white"
                    hasArrow={true}
                  />
                  <Button
                    text="Book Now"
                    bgColor="#fefffeff"
                    textColor="black"
                    hasArrow={true}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
