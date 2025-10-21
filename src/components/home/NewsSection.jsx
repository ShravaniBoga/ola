import React from "react";
import NewsCard from "../ui/NewsCard";
import BorderlessButton from "../ui/BorderlessButton";
import etLogo from "../../assets/news_letter_et.webp"; // replace with your actual image path
import "./NewsSection.css";

const newsItems = [
  {
    id: 1,
    image: etLogo,
    year: "2025",
    title:
      "Ola Electric bags PLI Certification for its Gen 3 scooter portfolio",
    link: "#",
  },
  {
    id: 2,
    image: etLogo,
    year: "2024",
    title: "Tesla to expand EV charging network across India",
    link: "#",
  },
  {
    id: 3,
    image: etLogo,
    year: "2023",
    title: "Hero launches India’s first hydrogen scooter prototype",
    link: "#",
  },
  {
    id: 4,
    image: etLogo,
    year: "2022",
    title: "Ather Energy announces new smart charging infrastructure",
    link: "#",
  },
];

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="news-section-header">
        <h2>Watch the Electric Revolution Unfold</h2>
      </div>

      <div className="news-grid">
        {newsItems.map((item) => (
          <NewsCard
            key={item.id}
            image={item.image}
            year={item.year}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
      <BorderlessButton text="Read more" />
    </section>
  );
};

export default NewsSection;
