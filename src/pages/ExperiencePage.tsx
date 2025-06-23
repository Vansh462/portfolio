import SectionHeading from '@/components/ui/SectionHeading';
import ExperienceCard from '@/components/ui/ExperienceCard';
import TechnologiesCloud from '@/components/home/TechnologiesCloud';
import portfolioData from '@/data/portfolio';
import { TECH_LOGOS } from '@/utils/assets';

export default function ExperiencePage() {
  const { experience } = portfolioData;

  return (
    <div className="min-h-screen">
      <section className="py-20 pb-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey and the roles I've held."
          />
          <div className="mt-12 max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
          
          {/* Technologies I Use */}
          <div className="mt-20 max-w-5xl mx-auto">
            <TechnologiesCloud technologies={Object.keys(TECH_LOGOS)} />
          </div>
        </div>
      </section>
    </div>
  );
}