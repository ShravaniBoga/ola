import React from "react";

import motorcycle from "../../../../assets/motorcycle_dropdown_img.webp";
import VehicleDropdown from "../VehicleDropdown";

const MotorcycleDropdown = () => {
  const vehicles = [
    {
      name: "Ola Roadster",
      price: "Starting at ₹1,89,999",
      image: motorcycle,
      isNew: true,
    },
    {
      name: "Ola Adventure",
      price: "Starting at ₹2,10,999",
      image: motorcycle,
      isNew: false,
    },
    {
      name: "Ola Cruiser",
      price: "Starting at ₹2,30,999",
      image: motorcycle,
      isNew: true,
    },
  ];

  const moreLinks = [
    "Order now",
    "Book Test Ride",
    "Accessories",
    "Gallery",
    "Finance Options",
  ];

  return (
    <VehicleDropdown
      vehicles={vehicles}
      moreLinks={moreLinks}
      title="More for Motorcycles"
    />
  );
};

export default MotorcycleDropdown;
