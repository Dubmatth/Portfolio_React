import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "../config/emailjs";
import { personalInfo } from "../data/portfolio";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBMIT_TIMEOUT_MS = 10000;
const SUCCESS_CLEAR_DELAY_MS = 5000;

const Contact = ({ contactRef }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (submitStatus?.type !== "success") return;
    const timer = setTimeout(() => setSubmitStatus(null), SUCCESS_CLEAR_DELAY_MS);
    return () => clearTimeout(timer);
  }, [submitStatus]);

  const updateField = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    if (!EMAIL_REGEX.test(formData.email)) {
      setSubmitStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), SUBMIT_TIMEOUT_MS)
    );

    try {
      await Promise.race([
        emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: personalInfo.name,
          },
          emailjsConfig.publicKey
        ),
        timeout,
      ]);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I will reply to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error.message === "timeout"
            ? "The request timed out. Please try again or contact me directly."
            : "Error sending. Please try again or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm focus:border-purple-400 focus:outline-none transition-colors text-white placeholder-gray-300";

  return (
    <section ref={contactRef} className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's connect and share ideas
          </h2>
          <p className="text-gray-300 text-lg">
            Whether it's a project idea, a question, or just saying hi — feel
            free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <Mail className="text-purple-400" size={20} />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <MapPin className="text-purple-400" size={20} />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send an email"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6" noValidate>
            <label htmlFor="contact-name" className="sr-only">
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={updateField("name")}
              className={inputClass}
            />
            <label htmlFor="contact-email" className="sr-only">
              Your Email
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={updateField("email")}
              className={inputClass}
            />
            <label htmlFor="contact-message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="contact-message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={updateField("message")}
              className={`${inputClass} resize-none`}
            />
            <div aria-live="polite" aria-atomic="true">
              {submitStatus && (
                <div
                  className={`p-4 rounded-lg backdrop-blur-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 border border-green-500/30 text-green-300"
                      : "bg-red-500/20 border border-red-500/30 text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
