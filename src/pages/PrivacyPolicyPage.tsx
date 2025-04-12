import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Privacy Policy"
            subtitle="How we handle your data and respect your privacy"
            centered
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg dark:prose-invert mx-auto mt-12"
          >
            <h2>Introduction</h2>
            <p>
              This Privacy Policy explains how we collect, use, and protect your personal information
              when you visit our portfolio website. We respect your privacy and are committed to
              protecting your personal data.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website, including
                pages visited, time spent on pages, and navigation paths.
              </li>
              <li>
                <strong>Device Information:</strong> Information about your device, browser type,
                and operating system.
              </li>
              <li>
                <strong>Contact Information:</strong> If you use our contact form, we collect your
                name, email address, and any message content you provide.
              </li>
            </ul>

            <h2>Analytics and Cookies</h2>
            <p>
              We use the following analytics tools to understand how visitors interact with our site:
            </p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> We use Google Analytics to collect anonymous
                information about how visitors use our website. This helps us improve our site and
                provide a better user experience. Google Analytics uses cookies to collect this
                information.
              </li>
              <li>
                <strong>Microsoft Clarity:</strong> We use Microsoft Clarity to collect anonymous
                heatmaps and session recordings to understand how users interact with our website.
                This helps us identify usability issues and improve the user experience.
              </li>
            </ul>

            <h2>Cookie Consent</h2>
            <p>
              We use Cookiebot to manage cookie consent on our website. When you first visit our
              site, you'll be asked to consent to the use of cookies. You can change your preferences
              at any time by clicking the "Cookie Settings" link in the footer.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Improve our website and user experience</li>
              <li>Respond to your inquiries when you contact us</li>
              <li>Analyze how visitors use our site to make improvements</li>
              <li>Protect our website from security threats</li>
            </ul>

            <h2>Data Sharing and Third Parties</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share
              anonymous, aggregated data with service providers who help us analyze website
              performance and user behavior.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>The right to access your personal data</li>
              <li>The right to correct inaccurate personal data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to restrict or object to processing of your personal data</li>
              <li>The right to data portability</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please
              contact us through our <a href="/contact">contact form</a>.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The latest version will always be
              posted on this page with the effective date.
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
