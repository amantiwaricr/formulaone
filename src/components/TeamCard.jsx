/* eslint-disable react/prop-types */
import { useState } from 'react';
import './TeamCard.css';

function TeamCard({ team }) {
  const [isHovered, setIsHovered] = useState(false);

  const getFlagEmoji = (country) => {
    const flags = {
      'Netherlands': '🇳🇱',
      'United Kingdom': '🇬🇧',
      'Monaco': '🇲🇨',
      'Spain': '🇪🇸',
      'France': '🇫🇷',
      'Thailand': '🇹🇭',
      'Finland': '🇫🇮',
      'Austria': '🇦🇹',
      'Germany': '🇩🇪',
      'Italy': '🇮🇹',
      'Switzerland': '🇨🇭',
      'Australia' : 'Au'
    };
    return flags[country] || '🏁';
  };

  return (
    <div
      className={`team-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="team-header" style={{ borderTopColor: team.teamColor }}>
        <div className="team-color-strip" style={{ backgroundColor: team.teamColor }}></div>
        <h2 className="team-name">{team.name}</h2>
        <p className="team-nationality">
          {getFlagEmoji(team.nationality)} {team.nationality}
        </p>
      </div>

      <div className="driver-section">
        <div className="driver-photo-container">
          <img
            src={team.driver.photo}
            alt={team.driver.name}
            className="driver-photo"
          />
          <div className="driver-number" style={{ backgroundColor: team.teamColor }}>
            #{team.driver.number}
          </div>
        </div>

        <div className="driver-info">
          <h3 className="driver-name">{team.driver.name}</h3>
          <p className="driver-nationality">
            {getFlagEmoji(team.driver.nationality)} {team.driver.nationality}
          </p>
        </div>
      </div>

      <div className="card-footer" style={{ backgroundColor: `${team.teamColor}15` }}>
        <span className="primary-badge">Primary Driver</span>
      </div>
    </div>
  );
}

export default TeamCard;
