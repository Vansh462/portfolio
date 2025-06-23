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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="prose prose-lg dark:prose-invert mx-auto mt-12"
          >
            <h2>Introduction</h2>
            <p>
              This is my personal portfolio website. I've created this privacy policy to be transparent about the minimal data collection that occurs on this site.
            </p>

            <h2>Analytics</h2>
            <p>
              This site uses the following analytics tools to help me understand how visitors interact with my portfolio:
            </p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> Tracks page views and basic visitor information anonymously.
              </li>
              <li>
                <strong>Microsoft Clarity:</strong> Creates heatmaps showing where visitors click and interact with pages.
              </li>
              <li>
                <strong>Vercel Analytics:</strong> Collects basic performance metrics and anonymous page view counts.
              </li>
            </ul>

            <h2>What This Means For You</h2>
            <p>
              The analytics tools on this site collect anonymous data about:
            </p>
            <ul>
              <li>Which pages you visit</li>
              <li>How long you stay on each page</li>
              <li>Which browser and device you're using</li>
              <li>Where you click on the page</li>
            </ul>
            
            <h2>Your Privacy</h2>
            <p>
              This site does not:
            </p>
            <ul>
              <li>Collect personally identifiable information</li>
              <li>Use cookies for advertising</li>
              <li>Share your data with third parties (beyond the analytics providers)</li>
              <li>Track you across other websites</li>
            </ul>

            <h2>Contact</h2>
            <p>
              If you have any questions about this portfolio site, please reach out through the <a href="/contact">contact page</a>.
            </p>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-8">
              This privacy policy is intentionally simple because this is a personal portfolio site with minimal data collection.
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-8">
              Last updated: June 23, 2024
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
