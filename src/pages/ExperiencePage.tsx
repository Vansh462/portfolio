import SectionHeading from '@/components/ui/SectionHeading';
import ExperienceCard from '@/components/ui/ExperienceCard';
import portfolioData from '@/data/portfolio';

export default function ExperiencePage() {
  const { experience } = portfolioData;

  return (
    <div>
      <section className="py-20">
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
        </div>
      </section>
    </div>
  );
}
