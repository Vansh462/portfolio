import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Section } from '@/components/ui/Section';


// Real testimonials from colleagues and supervisors
const testimonials = [
  {
    id: 1,
    content: "Brilliant student who led the team perfectly and delivered the Jute Pest project with remarkable results on his first attempt. Initially, I thought the team wouldn't meet the deadline as they started late when other teams had a month to prepare, but they had only 10 days. In those final 10 days, Vansh delivered exceptional results!",
    author: "Nikhil",
    position: "Working Professional, LearnFlu",
  },
  {
    id: 2,
    content: "Demonstrates disciplined and time-managed work delivery with good technical skills and strong potential. Shows excellent problem-solving abilities and should continue developing a broader strategic perspective to see projects through to completion.",
    author: "Harshraj",
    position: "CEO, EMM",
  },
  {
    id: 3,
    content: "I appreciate your thinking approach and the mentality you bring to challenges. Your problem-solving mindset and technical perspective make you someone I would definitely like to collaborate with in future projects.",
    author: "Tarun",
    position: "CEO",
  },
];

export default function TestimonialsSection() {

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
              <h4 className="font-semibold text-dark-400 dark:text-light-100 text-lg">
                {testimonial.author}
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
