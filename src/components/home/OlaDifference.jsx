import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import img1 from "../../assets/scooty_video_img1.webp";
import img2 from "../../assets/scooty_video_img2.webp";
import img3 from "../../assets/scooty_video_img3.webp";
import img4 from "../../assets/scooty_video_img4.webp";
import "./OlaDifference.css";

const OlaDifference = () => {
  const features = [
    {
      id: 1,
      title: "DIY Mode",
      subtitle: "MoveOS 5",
      description: "Tweak your ride just the way you want, with DIY Mode!",
      image: img1,
      widthRatio: 1,
    },
    {
      id: 2,
      title: "Find my scooter",
      subtitle: "MoveOS 5",
      description:
        "Can't find your scooter? Your app already has Find My Scooter.",
      image: img2,
      widthRatio: 3, // 3 times wider
    },
    {
      id: 3,
      title: "Live Location Sharing",
      subtitle: "MoveOS 5",
      description: "Real-time peace of mind, for you and your loved ones.",
      image: img3,
      widthRatio: 1,
    },
    {
      id: 4,
      title: "Proximity Unlock",
      subtitle: "MoveOS 5",
      description:
        "Just walk up to your scooter and start your ride – keyless and seamless.",
      image: img4,
      widthRatio: 1,
    },
  ];

  return (
    <div className="ola-difference-section">
      <h2 className="ola-difference-title">The difference is Ola Electric</h2>
      <p className="ola-difference-subtitle">
        Go behind the scenes with our latest innovations, product demos, and
        rider stories.
      </p>

      <div className="ola-difference-scroll-container">
        <div className="ola-difference-horizontal">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`ola-difference-item ${
                feature.widthRatio === 3 ? "ola-difference-item-wide" : ""
              }`}
              data-width-ratio={feature.widthRatio}
            >
              <div className="ola-difference-image-container">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="ola-difference-image"
                />
                <div className="ola-difference-play-icon">
                  <BsFillPlayFill size={26} color="black" />
                </div>
              </div>

              <div className="ola-difference-text-content">
                
                <h3 className="ola-difference-feature-title">
                  {feature.title}
                </h3>
                <p className="ola-difference-feature-description">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OlaDifference;
