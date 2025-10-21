import React from "react";
import card1 from "../../assets/bike1.webp";
import card2 from "../../assets/bike2.webp";
import card3 from "../../assets/bike3.webp";
import card4 from "../../assets/bike4.webp";
import Button from "../../components/ui/Button";
import scotyHeading from "../../assets/heading.svg"; // ADDED IMAGE IMPORT
import "./Cards.css";

const Cards = () => {
  // Sample product data with corresponding images
  const products = [
    {
      id: 1,
      name: "OLA S1 Pro+ 3rd Gen",
      description: "Our most powerful scooter yet",
      monthlyPrice: "5,185/month",
      totalPrice: "1,52,999",
      exploreText: "Explore S1 Pro+",
      image: card1,
    },
    {
      id: 2,
      name: "OLA S1 Air",
      description: "Lightweight and efficient",
      monthlyPrice: "3,999/month",
      totalPrice: "1,09,999",
      exploreText: "Explore S1 Air",
      image: card2,
    },
    {
      id: 3,
      name: "OLA S1 X",
      description: "Perfect for city commute",
      monthlyPrice: "4,299/month",
      totalPrice: "1,19,999",
      exploreText: "Explore S1 X",
      image: card3,
    },
    {
      id: 4,
      name: "OLA S1 X+",
      description: "Extended range version",
      monthlyPrice: "4,599/month",
      totalPrice: "1,29,999",
      exploreText: "Explore S1 X+",
      image: card4,
    },
  ];

  return (
    <div className="cards-flow">
      <h2>Introducing Ola S1 3rd Gen portfolio</h2>

      <div className="cards-scroll-container">
        <div className="cards-horizontal">
          {products.map((product) => (
            <div key={product.id} className="card">
              <div className="card-image">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="card-content">
                {/* CHANGED: Replaced text heading with image */}
                <img
                  src={scotyHeading}
                  alt="OLA Scooter"
                  className="card-heading-image"
                />
                <p className="card-subtitle">{product.description}</p>

                <div className="card-price">
                  <div className="price-monthly">Starting at</div>
                  <div>
                    <span className="product-monthly-price-rupee">₹</span>{" "}
                    &nbsp;
                    <span className="product-monthly-price">
                      {product.monthlyPrice}
                    </span>
                  </div>
                  <div className="price-or">
                    <span>OR</span>
                    &nbsp;
                    <span> ₹</span>
                    <span className="price-total"> {product.totalPrice}</span>
                  </div>
                </div>
                <div className="card-actions">
                  <Button
                    text={product.exploreText}
                    bgColor="black"
                    textColor="white"
                    hasArrow={true}
                  />
                  <Button
                    text="Buy Now"
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

export default Cards;
