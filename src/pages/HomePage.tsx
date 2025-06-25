import Hero from '@/components/home/Hero';
import SkillsSection from '@/components/home/SkillsSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <main className="overflow-hidden" role="main" aria-label="Vansh Oberoi Portfolio Homepage">
      <Hero />
      <SkillsSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
