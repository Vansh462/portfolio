import { motion } from 'framer-motion';
import { Quote, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Section } from '@/components/ui/Section';
import portfolioData from '@/data/portfolio';

export default function TestimonialsSection() {
  const { testimonials } = portfolioData;

  return (
    <Section 
      id="testimonials" 
      background="light"
      backgroundVariant="gradient"
      backgroundIntensity="low"
      animatedBackground={true}
    >
      <SectionHeading
        title="What Colleagues Say"
        subtitle="Real feedback from team leads, CEOs, and supervisors I've worked with."
        centered
        badge="Testimonials"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card p-6 relative"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-6 text-primary-100 dark:text-primary-900/30">
              <Quote size={40} />
            </div>
            
            {/* Content */}
            <div className="mb-6 text-dark-300/80 dark:text-light-300/80 relative z-10 text-center italic">
              "{testimonial.content}"
            </div>
            
            {/* Author */}
            <div className="text-center">
              <h4 className="font-semibold text-dark-400 dark:text-light-100 text-lg flex items-center justify-center gap-2">
                {testimonial.linkedIn ? (
                  <a
                    href={testimonial.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-500 transition-colors flex items-center gap-1"
                  >
                    {testimonial.author}
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  testimonial.author
                )}
              </h4>
              <p className="text-sm text-dark-300/70 dark:text-light-300/70 mt-1">
                {testimonial.position}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
