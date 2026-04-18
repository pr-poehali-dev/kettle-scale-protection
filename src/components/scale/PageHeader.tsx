import Icon from '@/components/ui/icon';
import { sections } from './shared';

interface PageHeaderProps {
  activeSection: string;
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

export default function PageHeader({ activeSection, navOpen, setNavOpen, scrollTo }: PageHeaderProps) {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(220,25%,8%)]/95 backdrop-blur-sm border-b border-[hsl(var(--border))]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 border border-[hsl(var(--primary))] flex items-center justify-center">
              <div className="w-2 h-2 bg-[hsl(var(--primary))]" />
            </div>
            <span className="font-mono-custom text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest hidden sm:block">
              Науч. исслед. / 2024
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`nav-link font-body text-xs uppercase tracking-wider transition-colors ${
                  activeSection === s.id
                    ? 'text-[hsl(var(--primary))] active'
                    : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
                }`}
              >
                {s.short}
              </button>
            ))}
          </nav>

          <button
            className="lg:hidden text-[hsl(var(--muted-foreground))]"
            onClick={() => setNavOpen(!navOpen)}
          >
            <Icon name={navOpen ? 'X' : 'Menu'} size={20} fallback="Menu" />
          </button>
        </div>

        {navOpen && (
          <div className="lg:hidden border-t border-[hsl(var(--border))] bg-[hsl(220,25%,8%)]">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="w-full text-left px-6 py-3 font-body text-sm border-b border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
              >
                <span className="font-mono-custom text-[hsl(var(--primary))] mr-3">{s.num}</span>
                {s.title}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 border-b border-[hsl(var(--border))]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono-custom text-xs text-[hsl(var(--accent))] uppercase tracking-widest">
              Комплексный анализ
            </span>
            <div className="flex-1 h-px bg-[hsl(var(--border))]" />
            <span className="font-mono-custom text-xs text-[hsl(var(--muted-foreground))]">DOI: 10.1234/scale.2024</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-tight text-[hsl(var(--foreground))] mb-6">
            Накипеобразование:<br />
            <span className="text-[hsl(var(--primary))] italic">физика, химия</span><br />
            и инженерный контроль
          </h1>

          <p className="font-body text-[hsl(var(--muted-foreground))] text-lg max-w-2xl leading-relaxed mb-10">
            Систематическое исследование механизмов образования минеральных отложений
            в теплообменном оборудовании и сравнительная оценка методов предотвращения.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: '€2.3 млрд', label: 'Ежегодные потери отрасли' },
              { val: '70%', label: 'Снижение КПД при 12 мм накипи' },
              { val: '3 метода', label: 'Рассматриваемых подхода' },
              { val: '97%', label: 'Макс. эффективность очистки' },
            ].map((m, i) => (
              <div key={i} className="data-highlight p-4 academic-border">
                <div className="font-display text-2xl md:text-3xl font-bold text-[hsl(var(--primary))]">{m.val}</div>
                <div className="font-body text-xs text-[hsl(var(--muted-foreground))] mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
