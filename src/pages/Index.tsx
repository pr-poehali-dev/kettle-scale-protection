import { useState, useEffect } from 'react';
import { sections } from '@/components/scale/shared';
import PageHeader from '@/components/scale/PageHeader';
import ContentSections from '@/components/scale/ContentSections';
import ComparisonAndConclusions from '@/components/scale/ComparisonAndConclusions';

export default function Index() {
  const [activeSection, setActiveSection] = useState('intro');
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActiveSection(s.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <PageHeader
        activeSection={activeSection}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        scrollTo={scrollTo}
      />
      <div className="max-w-5xl mx-auto px-6">
        <ContentSections />
        <ComparisonAndConclusions />
      </div>
    </div>
  );
}
