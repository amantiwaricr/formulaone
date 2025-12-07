import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>About F1 Elite</h1>
        <p>Your Premier Destination for Formula 1</p>
      </div>

      <div className="about-container">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            F1 Elite is dedicated to bringing the thrilling world of Formula 1 closer to fans around the globe.
            We provide comprehensive information about teams, drivers, and exclusive merchandise from the pinnacle
            of motorsport. Our mission is to create an engaging platform where F1 enthusiasts can explore, learn,
            and celebrate their passion for racing.
          </p>
        </section>

        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            Founded by passionate F1 fans, F1 Elite has grown to become a trusted source for authentic team
            merchandise, driver information, and exclusive content. We work directly with teams and drivers to
            bring you genuine, high-quality products and up-to-date information about the 2024 racing season.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="offers-grid">
            <div className="offer-card">
              <h3>Teams & Drivers</h3>
              <p>Detailed profiles of all F1 teams and their primary drivers for the 2024 season</p>
            </div>
            <div className="offer-card">
              <h3>Official Merchandise</h3>
              <p>Premium quality team apparel, accessories, and collectibles from all F1 teams</p>
            </div>
            <div className="offer-card">
              <h3>Driver Profiles</h3>
              <p>In-depth information about drivers, their careers, and achievements</p>
            </div>
            <div className="offer-card">
              <h3>Secure Shopping</h3>
              <p>Easy and secure online shopping with fast worldwide shipping</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <div className="values-list">
            <div className="value-item">
              <h4>Authenticity</h4>
              <p>We provide genuine products and accurate information about F1</p>
            </div>
            <div className="value-item">
              <h4>Excellence</h4>
              <p>We maintain the highest standards in quality and customer service</p>
            </div>
            <div className="value-item">
              <h4>Passion</h4>
              <p>We share the passion of F1 fans around the world</p>
            </div>
            <div className="value-item">
              <h4>Community</h4>
              <p>We build a community of F1 enthusiasts and supporters</p>
            </div>
          </div>
        </section>

        <section className="about-section highlight">
          <h2>Why Choose F1 Elite?</h2>
          <ul>
            <li>Authentic official merchandise from all F1 teams</li>
            <li>Comprehensive driver and team information</li>
            <li>Competitive pricing and regular promotions</li>
            <li>Fast and reliable worldwide shipping</li>
            <li>Dedicated customer support</li>
            <li>Secure payment options</li>
            <li>Easy returns and exchanges</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
