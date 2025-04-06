import Hero from '@/components/home/Hero';
import SkillsSection from '@/components/home/SkillsSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <SkillsSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
