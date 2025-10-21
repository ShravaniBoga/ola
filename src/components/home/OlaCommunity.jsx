import React from "react";
import "./OlaCommunity.css";
import { BsFillPlayFill } from "react-icons/bs";
import community1 from "../../assets/ola_community_img1.webp";
import community2 from "../../assets/ola_community_img2.webp";
import community3 from "../../assets/ola_community_img3.webp";

const communityData = [
  {
    id: 1,
    img: community1,
    title: "Hear it from those who took the Roadster home",
  },
  {
    id: 2,
    img: community2,
    title: "Thirumalesh from Bengaluru is all in on the S1",
  },
  {
    id: 3,
    img: community3,
    title: "Gagan's already made the switch. When are you getting yours?",
  },
];

const OlaCommunity = () => {
  return (
    <div className="ola-community-container">
      <h2 className="ola-community-heading">Voices of our Ola Community</h2>
      <p className="ola-community-subtext">
        From first rides to everyday commutes. Ola Community shares their
        electric journey.
      </p>

      <div className="ola-community-card-wrapper">
        {communityData.map((item) => (
          <div className="ola-community-card" key={item.id}>
            <div className="ola-community-video">
              <img
                src={item.img}
                alt={item.title}
                className="ola-community-img"
              />
              <div className="ola-play-button">
                <BsFillPlayFill size={34} />
              </div>
            </div>
            <h3 className="ola-community-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OlaCommunity;
