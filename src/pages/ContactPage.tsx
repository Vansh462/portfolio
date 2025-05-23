import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { GithubLogo, LinkedinLogo, TwitterLogo, FacebookLogo, InstagramLogo } from '@phosphor-icons/react';
import SectionHeading from '@/components/ui/SectionHeading';
import portfolioData from '@/data/portfolio';
import { trackFormSubmission, trackEvent } from '@/utils/analytics';

export default function ContactPage() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/mkgjkdbw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Track successful form submission
      trackFormSubmission('contact', true);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');

      // Track failed form submission
      trackFormSubmission('contact', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section id="contact-section" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Contact Me"
            subtitle="Get in touch with me for collaborations or inquiries."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Email
                    </h4>
                    <a
                      href={`mailto:${personal.contact.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      onClick={() => trackEvent('Contact', 'Email Click', 'Contact Page')}
                    >
                      {personal.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Phone
                    </h4>
                    <a
                      href={`tel:${personal.contact.phone}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {personal.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Address
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {personal.contact.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  {personal.contact.socials.map((social) => {
                    // Map social platform to icon component
                    let SocialIcon;
                    switch (social.platform.toLowerCase()) {
                      case 'github':
                        SocialIcon = GithubLogo;
                        break;
                      case 'linkedin':
                        SocialIcon = LinkedinLogo;
                        break;
                      case 'twitter':
                        SocialIcon = TwitterLogo;
                        break;
                      case 'facebook':
                        SocialIcon = FacebookLogo;
                        break;
                      case 'instagram':
                        SocialIcon = InstagramLogo;
                        break;
                      default:
                        SocialIcon = null;
                    }

                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors group relative"
                        aria-label={social.platform}
                        onClick={() => trackEvent('Social', 'Click', social.platform)}
                      >
                        <span className="sr-only">{social.platform}</span>
                        {SocialIcon ? (
                          <SocialIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        ) : (
                          <div className="h-6 w-6 text-primary-600 dark:text-primary-400 flex items-center justify-center">
                            {social.platform.charAt(0)}
                          </div>
                        )}

                        {/* Tooltip */}
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {social.platform}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Me a Message
                </h3>

                {submitSuccess ? (
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-4 rounded-md mb-6">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                ) : null}

                {submitError ? (
                  <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 p-4 rounded-md mb-6">
                    {submitError}
                  </div>
                ) : null}

                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Send Message <Send size={16} className="ml-2" />
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
