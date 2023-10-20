import React from "react";
import news from "../shared/News";

export default function News() {
  return (
    <div className="new-container">
      <h1>Latest News</h1>
      <div className="info-container">
        <ul>
          {news.map((newsItem, index) => (
            <li key={index}>
              <h3>{newsItem.title}</h3>
              <img src={newsItem.image} alt={newsItem.title} />
              <p>{newsItem.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
