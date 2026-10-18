import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, X, Clock } from "lucide-react";
import { boyfriends } from "../data/boyfriends";

export default function BoyfriendDetail() {
  const { id } = useParams();
  const boyfriend = boyfriends.find((b) => b.id === id);

  if (!boyfriend) {
    return (
      <div className="page detail">
        <Link to="/" className="btn back">
          <ArrowLeft size={20} strokeWidth={2} />
          Back to Home
        </Link>
        <p>Profile not found.</p>
      </div>
    );
  }

  const [mainImage, setMainImage] = useState(boyfriend.image);

  return (
    <div className="page detail">
      <Link to="/" className="btn back">
        <ArrowLeft size={20} strokeWidth={2} />
        Back to Home
      </Link>

      <div className="detail-header">
        <div className="photo-gallery">
          <div className="main-photo">
            <img src={mainImage} alt={boyfriend.name} />
          </div>
          <div className="thumb-grid">
            {boyfriend.photos.map((photo, i) => (
              <button
                key={i}
                className={`thumb ${i === 0 ? "active" : ""}`}
                onClick={() => setMainImage(photo)}
              >
                <img src={photo} alt={`${boyfriend.name} ${i + 1}`} />
              </button>
            ))}
          </div>
        </div>
        <div className="detail-info">
          <h1>{boyfriend.name}</h1>
          <div className="detail-rate">
            <Clock size={20} strokeWidth={2} />
            <span>{boyfriend.rate}</span>
          </div>
        </div>
      </div>

      <div className="detail-body">
        <div className="detail-bio">
          <h2>About</h2>
          <p>{boyfriend.bio}</p>
        </div>

        <div className="habits-grid">
          <div className="habit-card good">
            <h2>
              <Check size={22} strokeWidth={2} />
              Good Habits
            </h2>
            <ul>
              {boyfriend.goodHabits.map((habit, i) => (
                <li key={i}>{habit}</li>
              ))}
            </ul>
          </div>

          <div className="habit-card bad">
            <h2>
              <X size={22} strokeWidth={2} />
              Bad Habits
            </h2>
            <ul>
              {boyfriend.badHabits.map((habit, i) => (
                <li key={i}>{habit}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="detail-actions">
          <a
            href={`mailto:codewithkishanxyz@gmail.com?subject=Booking:${boyfriend.name}&body=Hi, I would like to book ${boyfriend.name} (${boyfriend.rate}). Please let me know availability.`}
            className="btn btn-primary book-btn"
          >
            Book Now
          </a>
          <a
            href={`mailto:codewithkishanxyz@gmail.com?subject=Message for ${boyfriend.name}&body=Hi, I'm interested in ${boyfriend.name}. Tell me more.`}
            className="btn btn-outline"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
}
