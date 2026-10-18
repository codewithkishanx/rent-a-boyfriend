import { Link } from "react-router-dom";
import { ArrowRight, Heart, Clock } from "lucide-react";

export default function BoyfriendCard({ boyfriend }) {
  return (
    <Link to={`/boyfriend/${boyfriend.id}`} className="card group">
      <div className="card-image">
        <img src={boyfriend.image} alt={boyfriend.name} loading="lazy" />
        <div className="card-badge">
          <Heart size={20} strokeWidth={2} />
          <span>{boyfriend.rate}</span>
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-name">{boyfriend.name}</h3>
        <div className="card-meta">
          <Clock size={16} strokeWidth={2} />
          <span>{boyfriend.rate}</span>
        </div>
        <p className="card-preview">
          {boyfriend.goodHabits.slice(0, 2).join(", ")}…
        </p>
        <div className="card-footer">
          <ArrowRight size={18} strokeWidth={2} />
          <span>View Profile</span>
        </div>
      </div>
    </Link>
  );
}
