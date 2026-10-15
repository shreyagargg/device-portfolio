import React, { useState } from "react";
import { Mail, ExternalLink, Copy, Check, Send} from "lucide-react";
import "./ContactPage.css";
import { contactDetails } from "./../../constants/contact"

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toastMessage, setToastMessage] = useState(null);

  const handleCopy = async (id, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setToastMessage(`${value} copied to clipboard`);
      setTimeout(() => {
        setCopiedId(null);
        setToastMessage(null);
      }, 2000);
    } catch (error) {
      setToastMessage("Unable to copy. Please copy it manually.");
      setTimeout(() => setToastMessage(null), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setToastMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitted(false);
        setToastMessage(null);
      }, 4000);
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Header Header & Doodle */}
      <div className="contact-header">
        <div>
          <div className="contact-heading-row">
            {/* Envelope Doodle Icon */}
            <div className="contact-envelope-icon">
              <Mail className="contact-envelope-svg" />
            </div>
            <h1 className="contact-title">Contact</h1>
          </div>
          <p className="contact-intro">
            Have a project in mind, a question, or just want to say hi? I'd love
            to connect! 💜
          </p>
        </div>

        {/* Top Right Hand-drawn Doodle Note */}
        <div className="contact-doodle-note">
          <span className="contact-doodle-text">Drop a message anytime 💜</span>
          <svg
            className="contact-doodle-arrow"
            viewBox="0 0 60 30"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              d="M 10 5 C 30 5, 45 15, 35 25"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M 28 22 L 35 25 L 37 17"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Two Column Grid Layout */}
      <div className="contact-grid">
        {/* Left Column: Contact Links Cards Stack */}
        <div className="contact-details-list">
          {contactDetails.map((item) => {
            const IconComponent = item.icon;

            return (
              <div className="contact-detail-card" key={item.id}>
                <div className="contact-detail-main">
                  {/* Colorful Square Icon Badge */}
                  <div
                    className="contact-detail-icon"
                    style={{
                      backgroundColor: item.bgColor,
                      color: item.iconColor,
                    }}
                  >
                    <IconComponent className="contact-detail-icon-svg" />
                  </div>

                  <div className="contact-detail-copy">
                    <span className="contact-detail-label">{item.label}</span>
                    <span className="contact-detail-value">{item.value}</span>
                  </div>
                </div>

                {/* Action Button: Copy or Link */}
                {item.type === "copy" ? (
                  <button
                    type="button"
                    onClick={() => handleCopy(item.id, item.value)}
                    className="contact-action-button"
                    title="Copy to clipboard"
                    aria-label={`Copy ${item.label}`}
                  >
                    {copiedId === item.id ? (
                      <Check className="contact-action-icon contact-copy-success" />
                    ) : (
                      <Copy className="contact-action-icon" />
                    )}
                  </button>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-action-button"
                    title="Open link"
                    aria-label={`Open ${item.label}`}
                  >
                    <ExternalLink className="contact-action-icon" />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Send Message Form */}
        <div className="contact-form-panel">
          <div className="contact-form-heading">
            <Send className="contact-send-heading-icon" />
            Send a Message
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your name"
                className="contact-input"
              />
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="your@email.com"
                className="contact-input"
              />
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Type your message here..."
                className="contact-input contact-textarea"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="contact-submit-button"
            >
              <Send className="contact-submit-icon" />
              {isSubmitting ? "Sending..." : submitted ? "Sent!" : "Send"}
            </button>
          </form>
        </div>
      </div>

      {toastMessage && (
        <div className="contact-toast" role="status">
          {toastMessage}
        </div>
      )}
    </div>
  );
}