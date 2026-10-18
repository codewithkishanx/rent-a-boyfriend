import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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

  return (
    <div className="page detail">
      <Link to="/" className="btn back">
        <ArrowLeft size={20} strokeWidth={2} />
        Back to Home
      </Link>

      <div className="detail-header">
        <img src={boyfriend.image} alt={boyfriend.name} className="detail-image" />
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
          <button className="btn btn-primary book-btn">Book Now</button>
          <button className="btn btn-outline">Message</button>
        </div>
      </div>
    </div>
  );
}
