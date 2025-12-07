/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with the F1 Elite team</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Have a question or feedback? We'd love to hear from you. Reach out to us and we'll respond as soon as possible.</p>

          <div className="info-cards">
            <div className="info-card">
              <h3>Email</h3>
              <p>
                <a href="mailto:support@f1elite.com">support@f1elite.com</a>
              </p>
            </div>

            <div className="info-card">
              <h3>Phone</h3>
              <p>
                <a href="tel:+1-800-F1-ELITE">+1-800-F1-ELITE</a>
              </p>
            </div>

            <div className="info-card">
              <h3>Hours</h3>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>

            <div className="info-card">
              <h3>Address</h3>
              <p>
                123 Pit Lane<br />
                Monaco, MC 98000
              </p>
            </div>
          </div>

          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {submitted && (
            <div className="success-banner">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <p>Thank you for your message! We'll get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Send us a Message</h2>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
