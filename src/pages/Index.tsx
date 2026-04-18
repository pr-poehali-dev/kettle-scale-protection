import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const sections = [
  { id: 'intro', num: '01', title: 'Введение в проблему', short: 'Введение' },
  { id: 'consequences', num: '02', title: 'Негативные последствия', short: 'Последствия' },
  { id: 'mechanisms', num: '03', title: 'Физико-химические механизмы', short: 'Механизмы' },
  { id: 'protection', num: '04', title: 'Методы защиты', short: 'Защита' },
  { id: 'engineering', num: '05', title: 'Инженерные решения', short: 'Инженерия' },
  { id: 'maintenance', num: '06', title: 'Рекомендации', short: 'Обслуживание' },
  { id: 'comparison', num: '07', title: 'Сравнительный анализ', short: 'Сравнение' },
  { id: 'conclusions', num: '08', title: 'Итоги и выводы', short: 'Выводы' },
];

const comparisonData = [
  {
    method: 'Механические фильтры',
    type: 'Физический',
    efficiency: 72,
    cost: 'Низкая',
    maintenance: 'Частое',
    lifespan: '2–5 лет',
    ecology: 'Нейтральный',
    score: 3.2,
  },
  {
    method: 'Ионообменники',
    type: 'Химический',
    efficiency: 91,
    cost: 'Средняя',
    maintenance: 'Умеренное',
    lifespan: '5–10 лет',
    ecology: 'Умеренный',
    score: 4.1,
  },
  {
    method: 'ЭМ-деструкторы',
    type: 'Физический',
    efficiency: 83,
    cost: 'Высокая',
    maintenance: 'Редкое',
    lifespan: '10–15 лет',
    ecology: 'Минимальный',
    score: 4.4,
  },
];

const removalData = [
  { method: 'Лимонная кислота', efficiency: 88, time: '2–4 ч', safety: 'Высокая', cost: '★★☆' },
  { method: 'Уксусная кислота', efficiency: 82, time: '3–6 ч', safety: 'Средняя', cost: '★☆☆' },
  { method: 'Ортофосфорная кислота', efficiency: 95, time: '1–2 ч', safety: 'Низкая', cost: '★★★' },
  { method: 'ЭДТА (хелатный агент)', efficiency: 97, time: '4–8 ч', safety: 'Средняя', cost: '★★★' },
  { method: 'Механическое очищение', efficiency: 65, time: '1–3 ч', safety: 'Высокая', cost: '★★☆' },
  { method: 'Ультразвуковая обработка', efficiency: 91, time: '0.5–1 ч', safety: 'Высокая', cost: '★★★' },
];

const chemComposition = [
  { compound: 'CaCO₃ (кальцит)', percent: 58, color: 'bg-amber-500' },
  { compound: 'CaSO₄ (гипс)', percent: 21, color: 'bg-blue-500' },
  { compound: 'Mg(OH)₂ (брусит)', percent: 12, color: 'bg-emerald-500' },
  { compound: 'SiO₂ (кремнезём)', percent: 6, color: 'bg-purple-500' },
  { compound: 'Fe₂O₃ и прочие', percent: 3, color: 'bg-red-500' },
];

const lossData = [
  { thickness: '1 мм', loss: 10, label: '10%' },
  { thickness: '3 мм', loss: 25, label: '25%' },
  { thickness: '5 мм', loss: 40, label: '40%' },
  { thickness: '8 мм', loss: 55, label: '55%' },
  { thickness: '12 мм', loss: 70, label: '70%' },
];

function AnimatedBar({ value, delay = 0 }: { value: number; delay?: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(value), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div ref={ref} className="h-2 bg-[hsl(220,15%,18%)] rounded-sm overflow-hidden">
      <div
        className="h-full chart-bar scale-bar"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono-custom text-4xl font-bold text-[hsl(var(--primary))] opacity-25">{num}</span>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-[hsl(var(--foreground))]">{title}</h2>
    </div>
  );
}

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

      <div className="max-w-5xl mx-auto px-6">

        {/* 01 — Введение */}
        <section id="intro" className="py-16 section-divider">
          <SectionHeader num="01" title="Введение в проблему образования накипи" />
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <p className="font-body text-[hsl(var(--foreground))] leading-relaxed mb-4">
                Накипь — это слой минеральных отложений, образующийся на внутренних поверхностях
                трубопроводов, котлов, теплообменников и бытовых приборов при нагреве жёсткой воды.
                Проблема актуальна для промышленности, ЖКХ и бытового сектора.
              </p>
              <p className="font-body text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                Жёсткость воды определяется концентрацией ионов Ca²⁺ и Mg²⁺. При нагреве
                растворимость карбонатов снижается по принципу инверсной растворимости,
                что приводит к их преципитации на горячих поверхностях.
              </p>
              <div className="academic-border pl-4 py-2">
                <p className="font-mono-custom text-sm text-[hsl(var(--accent))]">
                  Ca²⁺ + 2HCO₃⁻ → CaCO₃↓ + H₂O + CO₂
                </p>
                <p className="font-body text-xs text-[hsl(var(--muted-foreground))] mt-1">
                  Основная реакция образования кальцита
                </p>
              </div>
            </div>
            <div>
              <div className="font-body text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-3">
                Химический состав накипи (типовой)
              </div>
              <div className="space-y-3">
                {chemComposition.map((c, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono-custom text-sm text-[hsl(var(--foreground))]">{c.compound}</span>
                      <span className="font-mono-custom text-sm text-[hsl(var(--primary))]">{c.percent}%</span>
                    </div>
                    <AnimatedBar value={c.percent} delay={i * 100} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Последствия */}
        <section id="consequences" className="py-16 section-divider">
          <SectionHeader num="02" title="Негативные последствия накипи для техники" />
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'Flame',
                title: 'Тепловые потери',
                text: 'Коэффициент теплопроводности накипи в 30–40 раз ниже, чем у металла. Слой в 1 мм снижает КПД нагрева на 10%.',
                stat: '−10% / мм',
              },
              {
                icon: 'Zap',
                title: 'Перерасход энергии',
                text: 'При толщине накипи 12 мм энергопотребление котлового оборудования возрастает до 70% от нормы.',
                stat: '+70% энергии',
              },
              {
                icon: 'AlertTriangle',
                title: 'Аварийный риск',
                text: 'Перегрев металла под слоем накипи приводит к деформации труб, разрыву и аварийным остановкам производства.',
                stat: 'Критично',
              },
            ].map((c, i) => (
              <div key={i} className="data-highlight p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name={c.icon} size={18} className="text-[hsl(var(--accent))]" fallback="AlertTriangle" />
                  <span className="font-display text-lg font-semibold">{c.title}</span>
                </div>
                <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-3">{c.text}</p>
                <div className="font-mono-custom text-xs text-[hsl(var(--primary))] border-t border-[hsl(var(--border))] pt-3">
                  {c.stat}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 data-highlight p-6">
            <div className="font-body text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-5">
              Зависимость потерь КПД от толщины слоя накипи
            </div>
            <div className="flex items-end gap-3 h-40">
              {lossData.map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <span className="font-mono-custom text-xs text-[hsl(var(--primary))]">{d.label}</span>
                  <div className="w-full bg-[hsl(220,15%,18%)] relative rounded-sm overflow-hidden" style={{ height: '100px' }}>
                    <div
                      className="absolute bottom-0 left-0 right-0 chart-bar"
                      style={{ height: `${d.loss}%` }}
                    />
                  </div>
                  <span className="font-mono-custom text-xs text-[hsl(var(--muted-foreground))]">{d.thickness}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — Механизмы */}
        <section id="mechanisms" className="py-16 section-divider">
          <SectionHeader num="03" title="Физико-химические механизмы образования накипи" />
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  phase: 'Фаза I',
                  title: 'Пересыщение раствора',
                  desc: 'При нагреве выше 60°C растворимость CaCO₃ снижается. Создаётся пересыщенный раствор — предпосылка кристаллизации.',
                  temp: '> 60°C',
                },
                {
                  phase: 'Фаза II',
                  title: 'Нуклеация',
                  desc: 'Образование первичных зародышей кристаллов. Гетерогенная нуклеация на стенках трубы предпочтительна — энергетический барьер ниже.',
                  temp: '70–85°C',
                },
                {
                  phase: 'Фаза III',
                  title: 'Рост кристаллов',
                  desc: 'Присоединение ионов Ca²⁺ и CO₃²⁻ к поверхности зародышей. Скорость роста зависит от температуры, pH и гидродинамики.',
                  temp: '> 80°C',
                },
                {
                  phase: 'Фаза IV',
                  title: 'Консолидация слоя',
                  desc: 'Кристаллический матрикс уплотняется. Включение сульфатов и силикатов значительно повышает твёрдость и адгезию к металлу.',
                  temp: 'Хроническая',
                },
              ].map((ph, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 border border-[hsl(var(--primary))] flex items-center justify-center font-mono-custom text-xs text-[hsl(var(--primary))]">
                      {i + 1}
                    </div>
                    {i < 3 && <div className="w-px flex-1 bg-[hsl(var(--border))] mt-2" />}
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono-custom text-xs text-[hsl(var(--accent))]">{ph.phase}</span>
                      <span className="font-mono-custom text-xs text-[hsl(var(--muted-foreground))]">• {ph.temp}</span>
                    </div>
                    <div className="font-display text-lg font-semibold mb-1">{ph.title}</div>
                    <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{ph.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="font-body text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-4">
                Факторы, ускоряющие образование накипи
              </div>
              <div className="space-y-3">
                {[
                  { factor: 'Температура воды', impact: 95, note: 'Главный фактор' },
                  { factor: 'Жёсткость воды (Ca²⁺/Mg²⁺)', impact: 90, note: 'Выше 10 °dH — критично' },
                  { factor: 'pH среды (щелочность)', impact: 75, note: 'pH > 8.5 ускоряет процесс' },
                  { factor: 'Скорость потока', impact: 60, note: 'Турбулентность снижает осадок' },
                  { factor: 'Концентрация CO₂', impact: 50, note: 'Растворённый CO₂ тормозит' },
                  { factor: 'Шероховатость поверхности', impact: 40, note: 'Центры нуклеации' },
                ].map((f, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="font-body text-sm">{f.factor}</span>
                      <span className="font-mono-custom text-xs text-[hsl(var(--muted-foreground))]">{f.note}</span>
                    </div>
                    <AnimatedBar value={f.impact} delay={i * 80} />
                  </div>
                ))}
              </div>
              <div className="mt-6 academic-border pl-4 py-2 bg-[hsl(220,22%,10%)]">
                <p className="font-mono-custom text-xs text-[hsl(var(--muted-foreground))]">
                  λ металл ≈ 50 Вт/(м·К) &nbsp;|&nbsp; λ накипь ≈ 0.5–2 Вт/(м·К)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — Защита */}
        <section id="protection" className="py-16 section-divider">
          <SectionHeader num="04" title="Методы защиты и предотвращения накипи" />
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              {
                icon: 'Filter',
                category: 'Механическая фильтрация',
                methods: ['Сетчатые фильтры', 'Картриджные системы', 'Фильтры обратного осмоса', 'Магнитные ловушки частиц'],
                principle: 'Механическое задержание взвешенных частиц и предотвращение их оседания на поверхностях.',
                color: 'text-blue-400',
              },
              {
                icon: 'RefreshCw',
                category: 'Ионный обмен',
                methods: ['Na-катионирование', 'H-катионирование', 'Смешанные смолы', 'Регенерация хлоридом натрия'],
                principle: 'Замена ионов Ca²⁺ и Mg²⁺ на Na⁺ через смолы-катиониты, что исключает образование карбонатов.',
                color: 'text-emerald-400',
              },
              {
                icon: 'Zap',
                category: 'ЭМ-деструкторы',
                methods: ['Постоянное магнитное поле', 'Переменное электромагнитное', 'Электроимпульсная обработка', 'Акустические деструкторы'],
                principle: 'Изменение структуры кристаллов CaCO₃ в объёме воды — кристаллы не прилипают к поверхностям.',
                color: 'text-amber-400',
              },
            ].map((m, i) => (
              <div key={i} className="data-highlight p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name={m.icon} size={16} className={m.color} fallback="CircleAlert" />
                  <span className={`font-mono-custom text-xs uppercase tracking-wider ${m.color}`}>{m.category}</span>
                </div>
                <p className="font-body text-xs text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">{m.principle}</p>
                <div className="space-y-1">
                  {m.methods.map((mt, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-[hsl(var(--primary))] rounded-full flex-shrink-0" />
                      <span className="font-body text-sm text-[hsl(var(--foreground))]">{mt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 05 — Инженерия */}
        <section id="engineering" className="py-16 section-divider">
          <SectionHeader num="05" title="Технические аспекты и инженерные решения" />
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <div className="font-body text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-4">
                Схема системы водоподготовки
              </div>
              <div className="data-highlight p-5 space-y-3">
                {[
                  { step: 'Ввод воды', icon: 'Droplets', note: 'Жёсткость 15–25 °dH' },
                  { step: 'Грубая фильтрация', icon: 'Filter', note: 'Задержка ≥ 100 мкм' },
                  { step: 'ЭМ-деструктор', icon: 'Zap', note: 'Изменение структуры' },
                  { step: 'Ионообменник', icon: 'RefreshCw', note: 'Умягчение до 1 °dH' },
                  { step: 'Тонкая фильтрация', icon: 'Layers', note: 'Задержка ≥ 5 мкм' },
                  { step: 'Потребитель', icon: 'Home', note: 'Жёсткость < 2 °dH' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 border border-[hsl(var(--border))] flex items-center justify-center flex-shrink-0">
                      <Icon name={s.icon} size={13} className="text-[hsl(var(--accent))]" fallback="Circle" />
                    </div>
                    <div className="flex-1 flex justify-between items-center">
                      <span className="font-body text-sm">{s.step}</span>
                      <span className="font-mono-custom text-xs text-[hsl(var(--muted-foreground))]">{s.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-body text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-4">
                Ключевые инженерные параметры
              </div>
              <div className="space-y-4">
                {[
                  { param: 'Оптимальная скорость потока', val: '0.5–2.5 м/с', note: 'Предотвращает оседание' },
                  { param: 'Рабочий диапазон pH', val: '7.0–8.5', note: 'Минимальная кристаллизация' },
                  { param: 'Целевая жёсткость воды', val: '< 2 °dH', note: 'После умягчения' },
                  { param: 'Периодичность регенерации смол', val: '7–14 дней', note: 'При нагрузке 5 м³/сут' },
                  { param: 'Давление ЭМ-воздействия', val: '80–120 мТл', note: 'Оптимальная напряжённость' },
                  { param: 'Порог активации накипи', val: '60°C', note: 'Начало интенсивной кристал.' },
                ].map((p, i) => (
                  <div key={i} className="flex justify-between items-start border-b border-[hsl(var(--border))] pb-3">
                    <div>
                      <div className="font-body text-sm">{p.param}</div>
                      <div className="font-body text-xs text-[hsl(var(--muted-foreground))]">{p.note}</div>
                    </div>
                    <div className="font-mono-custom text-sm text-[hsl(var(--primary))] text-right ml-4 flex-shrink-0">{p.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 06 — Обслуживание */}
        <section id="maintenance" className="py-16 section-divider">
          <SectionHeader num="06" title="Практические рекомендации по обслуживанию" />
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <div className="font-body text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-4">
                Регламент технического обслуживания
              </div>
              <div className="space-y-3">
                {[
                  { freq: 'Ежемесячно', actions: ['Визуальный осмотр фильтров', 'Проверка давления на манометрах', 'Контроль жёсткости выходной воды'] },
                  { freq: 'Раз в квартал', actions: ['Промывка сетчатых фильтров', 'Диагностика ионообменных смол', 'Проверка ЭМ-индукторов'] },
                  { freq: 'Раз в год', actions: ['Замена картриджей фильтров', 'Регенерация или замена смол', 'Полная очистка системы'] },
                  { freq: 'При необходимости', actions: ['Химическая промывка котла', 'Замена уплотнений и прокладок', 'Калибровка датчиков'] },
                ].map((r, i) => (
                  <div key={i} className="data-highlight p-4">
                    <div className="font-mono-custom text-xs text-[hsl(var(--accent))] mb-2">{r.freq}</div>
                    <div className="space-y-1">
                      {r.actions.map((a, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <Icon name="Check" size={12} className="text-[hsl(var(--primary))]" fallback="Check" />
                          <span className="font-body text-sm text-[hsl(var(--muted-foreground))]">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-body text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-4">
                Диагностические показатели тревоги
              </div>
              <div className="space-y-3 mb-6">
                {[
                  { sign: 'Рост давления на вводе > 20%', level: 'Высокий', color: 'text-red-400' },
                  { sign: 'Снижение температуры нагрева', level: 'Высокий', color: 'text-red-400' },
                  { sign: 'Шум и вибрация в трубопроводах', level: 'Средний', color: 'text-amber-400' },
                  { sign: 'Жёсткость воды > 5 °dH на выходе', level: 'Средний', color: 'text-amber-400' },
                  { sign: 'Изменение цвета воды', level: 'Низкий', color: 'text-blue-400' },
                  { sign: 'Увеличение расхода реагентов', level: 'Низкий', color: 'text-blue-400' },
                ].map((s, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-[hsl(var(--border))] pb-2">
                    <span className="font-body text-sm">{s.sign}</span>
                    <span className={`font-mono-custom text-xs ${s.color}`}>{s.level}</span>
                  </div>
                ))}
              </div>

              <div className="academic-border pl-4 py-3 bg-[hsl(220,22%,10%)]">
                <div className="font-mono-custom text-xs text-[hsl(var(--accent))] mb-1">Правило 10/10</div>
                <p className="font-body text-sm text-[hsl(var(--muted-foreground))]">
                  Каждые 10 °dH жёсткости воды при 80°C дают 10% снижения КПД нагрева за 6 месяцев эксплуатации.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — Сравнение */}
        <section id="comparison" className="py-16 section-divider">
          <SectionHeader num="07" title="Сравнительные таблицы методов" />

          <div className="mt-8 overflow-x-auto">
            <div className="font-body text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-3">
              Сводная таблица — методы защиты от накипи
            </div>
            <table className="w-full border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[hsl(var(--border))]">
                  {['Метод', 'Тип', 'Эффект.', 'Стоимость', 'Обслуживание', 'Срок службы', 'Экология', 'Оценка'].map((h) => (
                    <th key={h} className="text-left font-mono-custom text-xs text-[hsl(var(--muted-foreground))] py-3 pr-4 last:text-center">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b border-[hsl(var(--border))] table-row-hover">
                    <td className="py-3 pr-4 font-body text-sm font-medium">{row.method}</td>
                    <td className="py-3 pr-4 font-mono-custom text-xs text-[hsl(var(--muted-foreground))]">{row.type}</td>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <div className="w-14 h-1.5 bg-[hsl(220,15%,18%)] rounded-sm overflow-hidden">
                          <div className="h-full chart-bar" style={{ width: `${row.efficiency}%` }} />
                        </div>
                        <span className="font-mono-custom text-xs text-[hsl(var(--primary))]">{row.efficiency}%</span>
                      </div>
                    </td>
                    <td className="py-3 pr-4 font-body text-sm text-[hsl(var(--muted-foreground))]">{row.cost}</td>
                    <td className="py-3 pr-4 font-body text-sm text-[hsl(var(--muted-foreground))]">{row.maintenance}</td>
                    <td className="py-3 pr-4 font-mono-custom text-xs text-[hsl(var(--foreground))]">{row.lifespan}</td>
                    <td className="py-3 pr-4 font-body text-sm text-[hsl(var(--muted-foreground))]">{row.ecology}</td>
                    <td className="py-3 text-center">
                      <span className={`font-mono-custom text-sm font-bold ${row.score >= 4.3 ? 'text-emerald-400' : row.score >= 4 ? 'text-amber-400' : 'text-[hsl(var(--muted-foreground))]'}`}>
                        {row.score.toFixed(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 overflow-x-auto">
            <div className="font-body text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-3">
              Методы удаления уже образовавшейся накипи
            </div>
            <table className="w-full border-collapse min-w-[520px]">
              <thead>
                <tr className="border-b border-[hsl(var(--border))]">
                  {['Метод удаления', 'Эффективность', 'Время обработки', 'Безопасность', 'Стоимость'].map((h) => (
                    <th key={h} className="text-left font-mono-custom text-xs text-[hsl(var(--muted-foreground))] py-3 pr-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {removalData.map((row, i) => (
                  <tr key={i} className="border-b border-[hsl(var(--border))] table-row-hover">
                    <td className="py-3 pr-4 font-body text-sm">{row.method}</td>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <div className="w-14 h-1.5 bg-[hsl(220,15%,18%)] rounded-sm overflow-hidden">
                          <div className="h-full chart-bar" style={{ width: `${row.efficiency}%` }} />
                        </div>
                        <span className="font-mono-custom text-xs text-[hsl(var(--primary))]">{row.efficiency}%</span>
                      </div>
                    </td>
                    <td className="py-3 pr-4 font-mono-custom text-xs text-[hsl(var(--foreground))]">{row.time}</td>
                    <td className={`py-3 pr-4 font-body text-sm ${row.safety === 'Высокая' ? 'text-emerald-400' : row.safety === 'Средняя' ? 'text-amber-400' : 'text-red-400'}`}>
                      {row.safety}
                    </td>
                    <td className="py-3 font-mono-custom text-sm text-[hsl(var(--primary))]">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 08 — Выводы */}
        <section id="conclusions" className="py-16 pb-24">
          <SectionHeader num="08" title="Итоги и выводы исследования" />
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  num: '1',
                  title: 'Комплексный подход эффективнее',
                  text: 'Сочетание механической фильтрации, ионного обмена и ЭМ-воздействия даёт синергетический эффект — суммарная защита до 99.2%.',
                },
                {
                  num: '2',
                  title: 'ЭМ-деструкторы — оптимальны для ТЭЦ',
                  text: 'Для промышленных установок ЭМ-деструкторы обеспечивают наилучшее соотношение TCO и эффективности (оценка 4.4/5).',
                },
                {
                  num: '3',
                  title: 'Профилактика дешевле лечения',
                  text: 'Стоимость предотвращения накипи составляет в среднем 12% от стоимости аварийной остановки и чистки оборудования.',
                },
                {
                  num: '4',
                  title: 'Температурный контроль критичен',
                  text: 'Поддержание рабочей температуры ниже 60°C или использование антинакипного оборудования выше этого порога обязательно.',
                },
              ].map((c, i) => (
                <div key={i} className="flex gap-4 data-highlight p-4">
                  <div className="font-display text-3xl font-bold text-[hsl(var(--primary))] opacity-30 leading-none mt-1">{c.num}</div>
                  <div>
                    <div className="font-display text-lg font-semibold mb-1">{c.title}</div>
                    <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="font-body text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-4">
                Итоговая рейтинговая оценка методов
              </div>
              <div className="space-y-4 mb-8">
                {[
                  { method: 'Механические фильтры', score: 3.2, rank: 3, highlight: false },
                  { method: 'Ионообменники', score: 4.1, rank: 2, highlight: false },
                  { method: 'ЭМ-деструкторы', score: 4.4, rank: 1, highlight: false },
                  { method: 'Комплексная система', score: 4.9, rank: 0, highlight: true },
                ].map((m, i) => (
                  <div key={i} className={`${m.highlight ? 'academic-border pl-3' : ''}`}>
                    <div className="flex justify-between mb-1">
                      <span className={`font-body text-sm ${m.highlight ? 'text-[hsl(var(--primary))] font-medium' : ''}`}>
                        {m.rank > 0 && <span className="font-mono-custom text-xs text-[hsl(var(--muted-foreground))] mr-2">#{m.rank}</span>}
                        {m.method}
                      </span>
                      <span className="font-mono-custom text-sm text-[hsl(var(--primary))]">{m.score}/5.0</span>
                    </div>
                    <AnimatedBar value={m.score * 20} delay={i * 100} />
                  </div>
                ))}
              </div>

              <div className="data-highlight p-5 border border-[hsl(var(--primary))]/20">
                <div className="font-mono-custom text-xs text-[hsl(var(--accent))] uppercase tracking-wider mb-2">
                  Рекомендация исследования
                </div>
                <p className="font-display text-xl leading-relaxed text-[hsl(var(--foreground))]">
                  Оптимальная стратегия — установка ЭМ-деструктора на вводе
                  в связке с ионообменным умягчителем для объектов
                  с жёсткостью воды более 10 °dH.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <div className="font-mono-custom text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest mb-1">
              Научное исследование
            </div>
            <div className="font-display text-lg text-[hsl(var(--foreground))]">
              Накипеобразование и методы контроля
            </div>
          </div>
          <div className="font-mono-custom text-xs text-[hsl(var(--muted-foreground))] text-right">
            <div>Версия 1.0 · Апрель 2024</div>
            <div>Все данные носят ознакомительный характер</div>
          </div>
        </div>
      </footer>
    </div>
  );
}