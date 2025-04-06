import { motion } from 'framer-motion';
import { ArrowRight, Mail, Calendar } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { fadeIn } from '@/utils/animations';
import { EnvelopeSimple, CalendarCheck, ArrowSquareOut } from '@phosphor-icons/react';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient with mesh */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-95"></div>

      {/* Mesh pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="mesh-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L40 20 M20 0 L20 40" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh-pattern)" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-white opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Content */}
            <div className="lg:col-span-3">
              <motion.div
                variants={fadeIn('right', 0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to bring your <span className="underline decoration-wavy decoration-white/70 underline-offset-8">ideas</span> to life?
                </h2>
              </motion.div>

              <motion.div
                variants={fadeIn('right', 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-lg text-white/90 mb-8">
                  I'm currently available for freelance work and collaborations. If you have a project
                  that needs expertise in AI, Machine Learning, or Web Development, let's discuss how
                  I can help turn your vision into reality.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <LinkButton
                  href="/contact"
                  variant="outline"
                  size="lg"
                  icon={<EnvelopeSimple weight="bold" size={20} />}
                  iconPosition="left"
                  animate
                  className="bg-white text-primary-600 hover:bg-white/90 border-white hover:border-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send a Message
                </LinkButton>

                <LinkButton
                  href="/contact?schedule=true"
                  variant="outline"
                  size="lg"
                  icon={<CalendarCheck weight="bold" size={20} />}
                  iconPosition="left"
                  animate
                  className="bg-transparent text-white border-white hover:bg-white/10 transition-all duration-300"
                >
                  Schedule a Call
                </LinkButton>
              </motion.div>
            </div>

            {/* Card */}
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-primary-600">V</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Vansh Oberoi</h3>
                    <p className="text-white/80">AI Engineer</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                      <EnvelopeSimple weight="bold" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email</p>
                      <p className="text-white">learnsolo462@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                      <CalendarCheck weight="bold" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Availability</p>
                      <p className="text-white">Open for projects</p>
                    </div>
                  </div>
                </div>

                <LinkButton
                  href="/resume.pdf"
                  variant="outline"
                  size="md"
                  icon={<ArrowSquareOut weight="bold" size={18} />}
                  iconPosition="right"
                  animate
                  className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  View Full Resume
                </LinkButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
