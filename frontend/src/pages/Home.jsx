import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SkillsSection from '../components/SkillsSection';
import ChessSection from '../components/ChessSection';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsSection />
      <Projects />
      <ChessSection />
      <Contact />
    </>
  );
}