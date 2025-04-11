import { Suspense, lazy } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ExperienceCard from '@/components/ui/ExperienceCard';
import portfolioData from '@/data/portfolio';

// Lazy load the CertificationsGallery component
const CertificationsGallery = lazy(() => import('@/components/certifications/CertificationsGallery'));

// Component loader with skeleton
const ComponentLoader = () => (
  <div className="py-20">
    <div className="container mx-auto px-4">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6 animate-pulse"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-10 animate-pulse"></div>
      <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded mb-6 animate-pulse"></div>
    </div>
  </div>
);

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

      {/* Certifications Gallery Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Suspense fallback={<ComponentLoader />}>
            <CertificationsGallery />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
