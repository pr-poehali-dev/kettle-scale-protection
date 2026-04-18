import Icon from '@/components/ui/icon';
import { AnimatedBar, SectionHeader, chemComposition, lossData } from './shared';

export default function ContentSections() {
  return (
    <>
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

        {/* Магнитный и электромагнитный умягчители */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Магнитный умягчитель */}
          <div className="data-highlight p-6">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Magnet" size={16} className="text-purple-400" fallback="Zap" />
              <span className="font-mono-custom text-xs uppercase tracking-wider text-purple-400">Магнитный умягчитель</span>
            </div>
            <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-5">
              Постоянные магниты создают поле 0.1–0.3 Тл перпендикулярно потоку воды. Под действием
              поля ионы Ca²⁺ и Mg²⁺ образуют кристаллы арагонита вместо кальцита — арагонит
              не прилипает к стенкам и вымывается потоком.
            </p>
            <div className="space-y-2 mb-5">
              {[
                { label: 'Принцип', val: 'Постоянное магнитное поле' },
                { label: 'Напряжённость', val: '0.1–0.3 Тл' },
                { label: 'Монтаж', val: 'Накладной, без врезки' },
                { label: 'Электропитание', val: 'Не требуется' },
                { label: 'Срок службы', val: '10–15 лет' },
                { label: 'Эффективность', val: '70–80%' },
              ].map((r, i) => (
                <div key={i} className="flex justify-between border-b border-[hsl(var(--border))] pb-1">
                  <span className="font-body text-xs text-[hsl(var(--muted-foreground))]">{r.label}</span>
                  <span className="font-mono-custom text-xs text-[hsl(var(--foreground))]">{r.val}</span>
                </div>
              ))}
            </div>
            <div className="academic-border pl-3 py-2 bg-[hsl(220,22%,10%)]">
              <p className="font-body text-xs text-[hsl(var(--muted-foreground))]">
                <span className="text-purple-400 font-medium">Плюсы:</span> нет расходников, нет химии, мгновенный монтаж.<br />
                <span className="text-red-400 font-medium">Минусы:</span> эффект временный при остановке потока, снижается с жёсткостью &gt; 20 °dH.
              </p>
            </div>
          </div>

          {/* Электромагнитный умягчитель */}
          <div className="data-highlight p-6">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Radio" size={16} className="text-cyan-400" fallback="Zap" />
              <span className="font-mono-custom text-xs uppercase tracking-wider text-cyan-400">Электромагнитный умягчитель</span>
            </div>
            <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-5">
              Генератор переменного тока создаёт импульсное электромагнитное поле через обмотку
              на трубе (частота 10–150 кГц). Переменное поле эффективнее постоянного — непрерывно
              меняет ориентацию кристаллов, препятствуя их адгезии к металлу.
            </p>
            <div className="space-y-2 mb-5">
              {[
                { label: 'Принцип', val: 'Переменное ЭМ-поле' },
                { label: 'Частота', val: '10–150 кГц' },
                { label: 'Потребление', val: '3–15 Вт' },
                { label: 'Монтаж', val: 'Катушка на трубу, без врезки' },
                { label: 'Срок службы', val: '15–20 лет' },
                { label: 'Эффективность', val: '80–90%' },
              ].map((r, i) => (
                <div key={i} className="flex justify-between border-b border-[hsl(var(--border))] pb-1">
                  <span className="font-body text-xs text-[hsl(var(--muted-foreground))]">{r.label}</span>
                  <span className="font-mono-custom text-xs text-[hsl(var(--foreground))]">{r.val}</span>
                </div>
              ))}
            </div>
            <div className="academic-border pl-3 py-2 bg-[hsl(220,22%,10%)]">
              <p className="font-body text-xs text-[hsl(var(--muted-foreground))]">
                <span className="text-cyan-400 font-medium">Плюсы:</span> работает при любой жёсткости, управляемая мощность, совместим с пластиком и металлом.<br />
                <span className="text-red-400 font-medium">Минусы:</span> требует 220 В, эффект накапливается 2–4 недели.
              </p>
            </div>
          </div>
        </div>

        {/* Сравнительная таблица двух типов */}
        <div className="mt-6 overflow-x-auto">
          <div className="font-body text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-3">
            Сравнение магнитного и электромагнитного умягчителей
          </div>
          <table className="w-full border-collapse min-w-[480px]">
            <thead>
              <tr className="border-b border-[hsl(var(--border))]">
                {['Критерий', 'Магнитный', 'Электромагнитный'].map((h) => (
                  <th key={h} className="text-left font-mono-custom text-xs text-[hsl(var(--muted-foreground))] py-3 pr-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { criterion: 'Тип поля', mag: 'Постоянное', em: 'Переменное, импульсное' },
                { criterion: 'Источник питания', mag: 'Не нужен', em: '220 В, 3–15 Вт' },
                { criterion: 'Монтаж', mag: 'Накладной зажим', em: 'Намотка катушки' },
                { criterion: 'Диапазон жёсткости', mag: 'До 20 °dH', em: 'До 50 °dH и выше' },
                { criterion: 'Эффективность', mag: '70–80%', em: '80–90%' },
                { criterion: 'Обслуживание', mag: 'Не требуется', em: 'Проверка раз в год' },
                { criterion: 'Стоимость', mag: '1 500–5 000 ₽', em: '3 000–15 000 ₽' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-[hsl(var(--border))] table-row-hover">
                  <td className="py-2.5 pr-4 font-body text-sm text-[hsl(var(--muted-foreground))]">{row.criterion}</td>
                  <td className="py-2.5 pr-4 font-mono-custom text-xs text-purple-400">{row.mag}</td>
                  <td className="py-2.5 pr-4 font-mono-custom text-xs text-cyan-400">{row.em}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
    </>
  );
}