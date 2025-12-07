import { useState, useEffect } from 'react';
import TeamCard from '../components/TeamCard';
import { f1Teams } from '../data/teamsData';
import './Home.css';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-f1">F1</span>
            <span className="title-main">Formula 1</span>
            <span className="title-sub">2025 Season</span>
          </h1>
          <p className="hero-description">
            Meet the teams and their primary drivers competing at the pinnacle of motorsport. <br />
            At switzerland on December 7 2025.
          </p>
        </div>
        <div className="hero-background">
          <img className='hero-image' src="../public/hero.avif" alt="" aria-hidden=
            "true" />
        </div>
      </div>

      <div className="container">
        <div className={`teams-grid ${isLoaded ? 'loaded' : ''}`}>
          {f1Teams.map((team, index) => (
            <div
              key={team.id}
              className="team-card-wrapper"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TeamCard team={team} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
