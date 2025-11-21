import { useState } from 'react';
import api from '../services/api';
import { validateContactForm } from '../utils/validators';
import { CONTACT_INFO, SOCIAL_LINKS } from '../utils/constants';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      await api.post('/contact', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Let's Connect!</h2>
        <p className="section-subtitle">
          Have a project in mind? Let's build something amazing together.
        </p>

        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-item-icon">✉️</div>
              <div className="contact-item-content">
                <h4>Email</h4>
                <a href={`mailto:${CONTACT_INFO.email}`}>
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div className="contact-item-content">
                <h4>Phone</h4>
                <a href={`tel:${CONTACT_INFO.phone}`}>
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div className="contact-item-content">
                <h4>Location</h4>
                <p>{CONTACT_INFO.location}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">🔗</div>
              <div className="contact-item-content">
                <h4>Follow Me</h4>
                <div className="about-social" style={{ marginTop: '8px' }}>
                  {SOCIAL_LINKS.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      className="about-social-link" 
                      title={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            {success && (
              <div className="form-success">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {errors.submit && (
              <div style={{ padding: '16px', background: 'rgba(255, 107, 107, 0.2)', border: '1px solid #ff6b6b', color: '#ff6b6b', borderRadius: '12px' }}>
                ❌ {errors.submit}
              </div>
            )}

            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                disabled={loading}
              />
              {errors.name && <small style={{ color: '#ff6b6b', marginTop: '4px' }}>{errors.name}</small>}
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                disabled={loading}
              />
              {errors.email && <small style={{ color: '#ff6b6b', marginTop: '4px' }}>{errors.email}</small>}
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Discussion"
                disabled={loading}
              />
              {errors.subject && <small style={{ color: '#ff6b6b', marginTop: '4px' }}>{errors.subject}</small>}
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                disabled={loading}
              ></textarea>
              {errors.message && <small style={{ color: '#ff6b6b', marginTop: '4px' }}>{errors.message}</small>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary form-submit"
            >
              {loading ? 'Sending...' : 'Send Message ➜'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}