import { useContext } from "react";
import "./Card.css";
import { LanguageContext } from "./LanguageContext";

interface CardProps {
  src: string;
  title: string;
  duration: number;
  category: string;
}

export default function Card({ src, title, duration, category }: CardProps) {
  const { language } = useContext(LanguageContext);

  return (
    <div className="card">
      <img src={src} className="card-image" />
      <div className="card-category">{category}</div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-meta">
          <span className="card-duration">{language === "en" ? `Duration: ${duration} days` : `Trajanje: ${duration} dana`}</span>
        </div>
      </div>
    </div>
  );
}
