import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { boyfriends } from "../data/boyfriends";

export default function Landing() {
  const [search, setSearch] = useState("");

  const filtered = boyfriends.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page home landing-page">
      <nav className="navbar">
        <Link to="/" className="logo">
          Rent a Boyfriend
        </Link>
        <div className="nav-actions">
          <input
            type="text"
            placeholder="Search by name…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="nav-search"
          />
        </div>
      </nav>

      <header className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Gentle companionship, on your terms.</p>
          <h1>Find your perfect match</h1>
          <p>
            Choose a kind, well-mannered boyfriend for coffee dates, dinners,
            events, or just good conversation. No pressure, no awkward
            questions.
          </p>
          <div className="hero-actions">
            <Link to="/boys" className="btn btn-main">
              View All Boys
            </Link>
          </div>
          <div className="search-box">
            <Search size={20} strokeWidth={2} />
            <input
              type="text"
              placeholder="Search by name…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      <section className="cards-section">
        <div className="section-header">
          <h2>Available Companions</h2>
          <p>{filtered.length} profile{filtered.length !== 1 ? "s" : ""} available</p>
        </div>
        <div className="cards-grid">
          {filtered.length === 0 ? (
            <p className="empty">No matches found.</p>
          ) : (
            filtered.map((boyfriend) => (
              <div key={boyfriend.id} className="card-item">
                <a href={`/boyfriend/${boyfriend.id}`} className="card-link">
                  <div className="card-image">
                    <img src={boyfriend.image} alt={boyfriend.name} />
                  </div>
                  <div className="card-body">
                    <h3>{boyfriend.name}</h3>
                    <div className="card-rate">{boyfriend.rate}</div>
                  </div>
                </a>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="booking-section">
        <div className="booking-card">
          <h2>Book a Date</h2>
          <p>
            Ready to meet your perfect companion? Email us at{" "}
            <a href={`mailto:rentaboyfriend404@gmail.com`}>
              rentaboyfriend404@gmail.com
            </a>
          </p>
          <p>
            Include your name, preferred date, time, and which companion
            you'd like to book.
          </p>
          <a href="mailto:rentaboyfriend404@gmail.com" className="btn btn-main">
            Send Booking Email
          </a>
        </div>
      </section>
    </div>
  );
}
