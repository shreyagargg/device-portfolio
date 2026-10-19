import { useState } from "react";
import { Mail, ExternalLink, Copy, Check, Send } from "lucide-react";
import "./ContactPage.css";
import { contactDetails } from "./../../constants/contact";
import emailjs from "@emailjs/browser";

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Single-field validation helper
  const validateField = (field, value) => {
    const trimmedVal = value.trim();
    let errorMsg = "";

    if (field === "name") {
      if (!trimmedVal) {
        errorMsg = "Name is required.";
      } else if (trimmedVal.length < 2) {
        errorMsg = "Name must be at least 2 characters.";
      } else if (trimmedVal.length > 100) {
        errorMsg = "Name cannot exceed 100 characters.";
      }
    } else if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!trimmedVal) {
        errorMsg = "Email is required.";
      } else if (trimmedVal.length > 254) {
        errorMsg = "Email address is too long.";
      } else if (!emailRegex.test(trimmedVal)) {
        errorMsg = "Please enter a valid email address.";
      }
    } else if (field === "message") {
      if (!trimmedVal) {
        errorMsg = "Message is required.";
      } else if (trimmedVal.length < 10) {
        errorMsg = "Message must be at least 10 characters.";
      } else if (trimmedVal.length > 5000) {
        errorMsg = "Message cannot exceed 5000 characters.";
      }
    }

    return errorMsg;
  };

  // Validate all form fields
  const validateForm = () => {
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    // Filter out empty strings
    const activeErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([, val]) => val !== "")
    );

    setErrors(activeErrors);
    return Object.keys(activeErrors).length === 0;
  };

  // Update field values and clear that field's error
  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  // Run field validation on blur
  const handleBlur = (field) => {
    const errorMsg = validateField(field, formData[field]);
    setErrors((prev) => ({
      ...prev,
      [field]: errorMsg,
    }));
  };

  // Copy contact information
  const handleCopy = async (id, value) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopiedId(id);
      setToastMessage(`${value} copied to clipboard`);

      setTimeout(() => {
        setCopiedId(null);
        setToastMessage(null);
      }, 2000);
    } catch {
      setToastMessage("Unable to copy. Please copy it manually.");

      setTimeout(() => {
        setToastMessage(null);
      }, 2000);
    }
  };

  // Validate and submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateForm()) {
      setToastMessage("Please correct the errors in the form.");
      return;
    }

    setIsSubmitting(true);
    setToastMessage(null);

    try {
      /**
       * IMPORTANT: Verify these keys match the variable placeholders
       * in your EmailJS Email Template (e.g., {{from_name}}, {{from_email}}, {{message}})
       */
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitted(true);
      setToastMessage("Message sent successfully! 💜");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});

      setTimeout(() => {
        setSubmitted(false);
        setToastMessage(null);
      }, 4000);
    } catch (error) {
      // Detailed error reporting to identify 422 payload issues
      console.error("EmailJS full error:", error);
      console.error("EmailJS status:", error?.status);
      console.error("EmailJS message details:", error?.text);

      setToastMessage(
        error?.text
          ? `Failed: ${error.text}`
          : "Unable to send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <div>
          <div className="contact-heading-row">
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

        {/* Doodle note */}
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

      {/* Two-column layout */}
      <div className="contact-grid">
        {/* Contact details */}
        <div className="contact-details-list">
          {contactDetails.map((item) => {
            const IconComponent = item.icon;

            return (
              <div className="contact-detail-card" key={item.id}>
                <div className="contact-detail-main">
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

        {/* Contact form */}
        <div className="contact-form-panel">
          <div className="contact-form-heading">
            <Send className="contact-send-heading-icon" />
            Send a Message
          </div>

          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            {/* Name */}
            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-name">
                Name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => handleFieldChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                placeholder="Your name"
                className={`contact-input ${errors.name ? "input-error" : ""}`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />

              {errors.name && (
                <span id="name-error" className="field-error" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-email">
                Email
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                value={formData.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                placeholder="your@email.com"
                className={`contact-input ${errors.email ? "input-error" : ""}`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />

              {errors.email && (
                <span id="email-error" className="field-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-message">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                maxLength={5000}
                value={formData.message}
                onChange={(e) => handleFieldChange("message", e.target.value)}
                onBlur={() => handleBlur("message")}
                placeholder="Type your message here..."
                className={`contact-input contact-textarea ${
                  errors.message ? "input-error" : ""
                }`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />

              {errors.message && (
                <span id="message-error" className="field-error" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit button */}
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

      {/* Toast notification */}
      {toastMessage && (
        <div className="contact-toast" role="status" aria-live="polite">
          {toastMessage}
        </div>
      )}
    </div>
  );
}