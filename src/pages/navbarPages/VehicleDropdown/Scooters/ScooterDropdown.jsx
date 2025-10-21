import React from "react";
import scooter from "../../../../assets/scooter_dropdown_img.webp";

import VehicleDropdown from "../VehicleDropdown";

const ScooterDropdown = () => {
  const vehicles = [
    {
      name: "Ola S1 Pro Sport",
      price: "Starting at ₹1,49,999",
      image: scooter,
      isNew: true,
    },
    {
      name: "Ola S1 Pro+",
      price: "Starting at ₹1,52,999",
      image: scooter,
      isNew: true,
    },
    {
      name: "Ola S1 X+",
      price: "Starting at ₹1,14,999",
      image: scooter,
      isNew: true,
    },
  ];

  const moreLinks = [
    "Order now",
    "Test Ride",
    "Accessories",
    "View in 360°",
    "Calculate EMI",
  ];

  return (
    <VehicleDropdown
      vehicles={vehicles}
      moreLinks={moreLinks}
      title="More for S1"
    />
  );
};

export default ScooterDropdown;
