import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
