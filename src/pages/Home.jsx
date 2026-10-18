import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { boyfriends } from "../data/boyfriends";
import BoyfriendCard from "../components/BoyfriendCard";

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = boyfriends.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page home">
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

      <section className="cards-section">
        <div className="cards-grid">
          {filtered.length === 0 ? (
            <p className="empty">No matches found.</p>
          ) : (
            filtered.map((boyfriend) => (
              <BoyfriendCard key={boyfriend.id} boyfriend={boyfriend} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
