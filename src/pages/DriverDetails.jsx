/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { f1Teams } from '../data/teamsData';
import './DriverDetails.css';

function DriverDetails() {
  const [selectedDriverId, setSelectedDriverId] = useState(1);

  const selectedTeam = f1Teams.find(team => team.id === selectedDriverId);

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
      'Switzerland': '🇨🇭'
    };
    return flags[country] || '🏁';
  };

  return (
    <div className="driver-details">
      <div className="driver-hero">
        <h1>Driver Profiles</h1>
        <p>Get to know the talented drivers of F1</p>
      </div>

      <div className="driver-container">
        <div className="drivers-list">
          {f1Teams.map(team => (
            <button
              key={team.id}
              className={`driver-selector ${selectedDriverId === team.id ? 'active' : ''}`}
              onClick={() => setSelectedDriverId(team.id)}
              style={{ borderLeftColor: team.teamColor }}
            >
              <img src={team.driver.photo} alt={team.driver.name} />
              <div className="driver-selector-info">
                <h4>{team.driver.name}</h4>
                <p>{team.name}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="driver-details-content">
          {selectedTeam && (
            <>
              <div className="driver-header" style={{ backgroundColor: `${selectedTeam.teamColor}15` }}>
                <div className="driver-photo-large">
                  <img src={selectedTeam.driver.photo} alt={selectedTeam.driver.name} />
                  <div className="driver-number-large" style={{ backgroundColor: selectedTeam.teamColor }}>
                    #{selectedTeam.driver.number}
                  </div>
                </div>

                <div className="driver-header-info">
                  <h2>{selectedTeam.driver.name}</h2>
                  <p className="driver-team">{selectedTeam.name}</p>
                  <p className="driver-nationality">
                    {getFlagEmoji(selectedTeam.driver.nationality)} {selectedTeam.driver.nationality}
                  </p>
                  <p className="team-nationality">
                    {getFlagEmoji(selectedTeam.nationality)} {selectedTeam.nationality}
                  </p>
                </div>
              </div>

              <div className="driver-stats">
                <div className="stat-card">
                  <h3>Racing Number</h3>
                  <p className="stat-value">{selectedTeam.driver.number}</p>
                </div>
                <div className="stat-card">
                  <h3>Team</h3>
                  <p className="stat-value">{selectedTeam.name}</p>
                </div>
                <div className="stat-card">
                  <h3>Nationality</h3>
                  <p className="stat-value">{selectedTeam.driver.nationality}</p>
                </div>
                <div className="stat-card">
                  <h3>Team Country</h3>
                  <p className="stat-value">{selectedTeam.nationality}</p>
                </div>
              </div>

              <div className="driver-bio">
                <h3>About the Driver</h3>
                <p>
                  {selectedTeam.driver.name} is a professional Formula 1 driver competing for {selectedTeam.name} during the 2024 season.
                  With the number {selectedTeam.driver.number}, {selectedTeam.driver.name} brings expertise and determination to every race,
                  representing {selectedTeam.driver.nationality} on the world's most prestigious motorsport stage.
                </p>
                <p>
                  As part of the {selectedTeam.name} team from {selectedTeam.nationality}, {selectedTeam.driver.name} competes alongside
                  their teammates in pursuit of championship glory and podium finishes. The driver's commitment to excellence and passion
                  for racing make them an integral part of their team's success.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DriverDetails;
