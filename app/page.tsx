import type { ReactNode } from 'react';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Partner from '../components/sections/Partner';
import Stats from '../components/sections/Stats';
import Team from '../components/sections/Team';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import Faq from '../components/sections/Faq';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import BackToTop from '../components/ui/BackToTop';
import { pages, sections } from '../components/types';

const shell = new Set(['Header', 'Footer', 'BackToTop']);

const sectionMap: Record<string, ReactNode> = {
  Header: <Header data={sections.header} />,
  Hero: <Hero data={sections.hero} />,
  About: <About data={sections.about} />,
  Services: <Services data={sections.services} />,
  Partner: <Partner data={sections.partner} />,
  Stats: <Stats data={sections.stats} />,
  Team: <Team data={sections.team} />,
  Process: <Process data={sections.process} />,
  Testimonials: <Testimonials data={sections.testimonials} />,
  Faq: <Faq data={sections.faq} />,
  Contact: <Contact data={sections.contact} />,
  Footer: <Footer data={sections.footer} />,
  BackToTop: <BackToTop data={sections.backToTop} />,
};

export const metadata = {
  title: pages.home.metadata.title,
  description: pages.home.metadata.description,
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      {pages.home.components.filter((block) => block.component === 'Header').map((block) => (
        <div key={block.key} className="sticky top-0 z-50">{sectionMap[block.component]}</div>
      ))}
      <main className="flex-1">
        {pages.home.components.filter((block) => !shell.has(block.component)).map((block) => (
          <div key={block.key}>{sectionMap[block.component]}</div>
        ))}
      </main>
      {pages.home.components.filter((block) => block.component === 'Footer' || block.component === 'BackToTop').map((block) => (
        <div key={block.key}>{sectionMap[block.component]}</div>
      ))}
    </div>
  );
}
