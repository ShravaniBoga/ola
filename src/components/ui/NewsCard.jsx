import React from "react";
import "./NewsCard.css";

const NewsCard = ({ image, year, title, link }) => {
  return (
    <div className="news-card">
      <img src={image} alt="news logo" className="news-logo" />

      <div className="news-content">
        <p className="news-year">{year}</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="news-title"
          >
            {title}
          </a>
        ) : (
          <p className="news-title">{title}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
