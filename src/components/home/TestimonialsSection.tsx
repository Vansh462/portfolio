import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Section } from '@/components/ui/Section';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    content: "Vansh is an exceptional AI Engineer who delivered beyond our expectations. His expertise in machine learning and problem-solving abilities are truly impressive.",
    author: "John Doe",
    position: "CTO, TechStart Inc.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    content: "Working with Vansh was a pleasure. He understood our requirements perfectly and implemented an AI solution that significantly improved our business processes.",
    author: "Jane Smith",
    position: "Product Manager, DataFlow",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    content: "Vansh's technical skills and attention to detail made our project a success. He's not only knowledgeable but also communicates complex concepts clearly.",
    author: "Robert Johnson",
    position: "Founder, AI Solutions",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <Section id="testimonials" background="light">
      <SectionHeading
        title="What People Say"
        subtitle="Feedback from clients and colleagues I've worked with."
        centered
        badge="Testimonials"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <div className="mb-6 text-dark-300/80 dark:text-light-300/80 relative z-10">
              "{testimonial.content}"
            </div>
            
            {/* Author */}
            <div className="flex items-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-semibold text-dark-400 dark:text-light-100">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-dark-300/70 dark:text-light-300/70">
                  {testimonial.position}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
