import Icon from '@/components/ui/icon';
import { SectionHeader, AnimatedBar } from './shared';

const filterMaterials = [
  {
    layer: 'Слой 1',
    material: 'Полипропиленовое волокно (PP)',
    role: 'Механическая предфильтрация',
    retention: '5–50 мкм',
    note: 'Задерживает взвеси, ржавчину, песок',
    icon: 'Layers',
    color: 'text-blue-400',
  },
  {
    layer: 'Слой 2',
    material: 'Активированный уголь (GAC)',
    role: 'Адсорбция органики и хлора',
    retention: '< 1 мкм',
    note: 'Кокосовый или угольный, площадь поверхности до 1500 м²/г',
    icon: 'Circle',
    color: 'text-slate-400',
  },
  {
    layer: 'Слой 3',
    material: 'Катионообменная смола (Na⁺-форма)',
    role: 'Умягчение — замена Ca²⁺/Mg²⁺ на Na⁺',
    retention: 'Ионный обмен',
    note: 'Сульфостирольная матрица, ёмкость 50–100 мг-экв/л',
    icon: 'RefreshCw',
    color: 'text-emerald-400',
  },
  {
    layer: 'Слой 4',
    material: 'Мембрана обратного осмоса (TFC)',
    role: 'Удаление растворённых солей',
    retention: '> 99% солей',
    note: 'Тонкоплёночный композит, поры 0.0001 мкм',
    icon: 'Waves',
    color: 'text-cyan-400',
  },
  {
    layer: 'Слой 5',
    material: 'Угольный постфильтр (CTO)',
    role: 'Финальная доочистка и улучшение вкуса',
    retention: 'Остаточная органика',
    note: 'Прессованный активированный уголь',
    icon: 'Sparkles',
    color: 'text-amber-400',
  },
];

const filtrationSteps = [
  {
    step: '1',
    title: 'Подача исходной воды',
    desc: 'Водопроводная вода под давлением 2–6 атм поступает в систему. Жёсткость — 10–25 °dH, содержание хлора — 0.3–0.5 мг/л.',
    param: '2–6 атм',
  },
  {
    step: '2',
    title: 'Грубая механическая очистка',
    desc: 'PP-картридж задерживает частицы крупнее 5 мкм: ржавчину, песок, ил. Ресурс — 3–6 месяцев при стандартной нагрузке.',
    param: '≥ 5 мкм',
  },
  {
    step: '3',
    title: 'Адсорбция на активированном угле',
    desc: 'Хлор, хлорамины, летучие органические соединения (ЛОС), запах и привкус поглощаются пористой структурой угля.',
    param: '> 95% Cl₂',
  },
  {
    step: '4',
    title: 'Ионный обмен / умягчение',
    desc: 'Ионы кальция и магния замещаются натрием на смоляной матрице. Жёсткость снижается с 15 до < 1 °dH. Регенерация NaCl.',
    param: '< 1 °dH',
  },
  {
    step: '5',
    title: 'Обратноосмотическая мембрана',
    desc: 'Молекулы воды проходят сквозь мембрану под давлением, оставляя позади 99%+ солей, нитратов, тяжёлых металлов и микробов.',
    param: '99%+ солей',
  },
  {
    step: '6',
    title: 'Финальная доочистка',
    desc: 'Постфильтр устраняет любые остаточные запахи из накопительного бака. Вода готова к подаче потребителю.',
    param: 'pH 6.5–7.5',
  },
];

const usageAreas = [
  {
    area: 'Котельное оборудование',
    benefit: 'Отсутствие накипи продлевает ресурс котла в 3–5 раз',
    saving: '−40% энергии',
    icon: 'Flame',
  },
  {
    area: 'Парогенераторы и автоклавы',
    benefit: 'Чистая подпиточная вода — ноль отложений в теплообменнике',
    saving: '−60% простоев',
    icon: 'Wind',
  },
  {
    area: 'Системы охлаждения (HVAC)',
    benefit: 'Фильтрованный хладагент сохраняет коэффициент теплопередачи',
    saving: '−25% затрат',
    icon: 'Thermometer',
  },
  {
    area: 'Бытовые приборы',
    benefit: 'Чайники, кофемашины, утюги с парогенератором — ресурс × 4',
    saving: 'Срок ×4',
    icon: 'Coffee',
  },
  {
    area: 'Пищевая промышленность',
    benefit: 'Соответствие ГОСТ Р 51232 и SanPin по минеральному составу',
    saving: 'ГОСТ Р 51232',
    icon: 'UtensilsCrossed',
  },
  {
    area: 'Фармацевтика / лаборатории',
    benefit: 'Вода классов PW и WFI: проводимость < 1.3 мкСм/см',
    saving: '< 1.3 мкСм/см',
    icon: 'FlaskConical',
  },
];

const waterQuality = [
  { param: 'Жёсткость', before: '15–25 °dH', after: '< 0.5 °dH', reduction: 98 },
  { param: 'Хлор остаточный', before: '0.3–0.5 мг/л', after: '< 0.01 мг/л', reduction: 97 },
  { param: 'Нитраты (NO₃⁻)', before: '30–80 мг/л', after: '< 2 мг/л', reduction: 96 },
  { param: 'Железо (Fe²⁺/Fe³⁺)', before: '0.5–2 мг/л', after: '< 0.01 мг/л', reduction: 99 },
  { param: 'Тяжёлые металлы', before: 'До 0.1 мг/л', after: '< 0.001 мг/л', reduction: 99 },
  { param: 'Общая минерализация', before: '500–900 мг/л', after: '< 50 мг/л', reduction: 94 },
];

export default function FilteredWater() {
  return (
    <section id="filtered-water" className="py-16 section-divider">
      <SectionHeader num="08" title="Применение фильтрованной воды" />

      <p className="font-body text-[hsl(var(--muted-foreground))] leading-relaxed mt-6 mb-10 max-w-3xl">
        Фильтрованная вода — ключевой инструмент предотвращения накипи. Ниже описан полный цикл
        многоступенчатой очистки, состав фильтрующих материалов и области применения
        в промышленности и быту.
      </p>

      {/* Материалы фильтра */}
      <div className="mb-12">
        <div className="font-body text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-5">
          Состав фильтрующих материалов — многоступенчатая система
        </div>
        <div className="space-y-3">
          {filterMaterials.map((m, i) => (
            <div key={i} className="data-highlight p-5 grid md:grid-cols-[140px_1fr_160px_200px] gap-4 items-start">
              <div>
                <div className="font-mono-custom text-xs text-[hsl(var(--muted-foreground))] mb-1">{m.layer}</div>
                <div className="flex items-center gap-2">
                  <Icon name={m.icon} size={14} className={m.color} fallback="Circle" />
                  <span className={`font-mono-custom text-xs ${m.color}`}>{m.retention}</span>
                </div>
              </div>
              <div>
                <div className="font-body text-sm font-medium text-[hsl(var(--foreground))] mb-1">{m.material}</div>
                <div className="font-body text-xs text-[hsl(var(--muted-foreground))]">{m.note}</div>
              </div>
              <div className="font-body text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                {m.role}
              </div>
              <div className="hidden md:block">
                <AnimatedBar value={90 - i * 8} delay={i * 120} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Процесс фильтрации */}
      <div className="mb-12">
        <div className="font-body text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-5">
          Процесс фильтрации — пошаговое описание
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {filtrationSteps.map((s, i) => (
            <div key={i} className="flex gap-4 data-highlight p-4">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-8 h-8 border border-[hsl(var(--primary))] flex items-center justify-center font-mono-custom text-xs text-[hsl(var(--primary))]">
                  {s.step}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-display text-base font-semibold">{s.title}</div>
                  <div className="font-mono-custom text-xs text-[hsl(var(--primary))] ml-3 flex-shrink-0">{s.param}</div>
                </div>
                <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Качество воды до/после */}
      <div className="mb-12">
        <div className="font-body text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-4">
          Качество воды до и после фильтрации
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b border-[hsl(var(--border))]">
                {['Показатель', 'До фильтрации', 'После фильтрации', 'Снижение'].map((h) => (
                  <th key={h} className="text-left font-mono-custom text-xs text-[hsl(var(--muted-foreground))] py-3 pr-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {waterQuality.map((row, i) => (
                <tr key={i} className="border-b border-[hsl(var(--border))] table-row-hover">
                  <td className="py-3 pr-4 font-body text-sm">{row.param}</td>
                  <td className="py-3 pr-4 font-mono-custom text-xs text-red-400">{row.before}</td>
                  <td className="py-3 pr-4 font-mono-custom text-xs text-emerald-400">{row.after}</td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-[hsl(220,15%,18%)] rounded-sm overflow-hidden">
                        <div className="h-full chart-bar" style={{ width: `${row.reduction}%` }} />
                      </div>
                      <span className="font-mono-custom text-xs text-[hsl(var(--primary))]">{row.reduction}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Области применения */}
      <div>
        <div className="font-body text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-5">
          Области применения фильтрованной воды
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {usageAreas.map((u, i) => (
            <div key={i} className="data-highlight p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon name={u.icon} size={15} className="text-[hsl(var(--accent))]" fallback="CircleAlert" />
                <span className="font-body text-sm font-medium">{u.area}</span>
              </div>
              <p className="font-body text-xs text-[hsl(var(--muted-foreground))] leading-relaxed mb-3">{u.benefit}</p>
              <div className="font-mono-custom text-xs text-[hsl(var(--primary))] border-t border-[hsl(var(--border))] pt-2">
                {u.saving}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 academic-border pl-4 py-3 bg-[hsl(220,22%,10%)]">
          <div className="font-mono-custom text-xs text-[hsl(var(--accent))] mb-1">Ключевой вывод</div>
          <p className="font-body text-sm text-[hsl(var(--muted-foreground))]">
            Использование пятиступенчатой системы фильтрации позволяет снизить жёсткость воды
            на 98%, устранить накипеобразование полностью и сократить затраты
            на обслуживание теплового оборудования на 40–60% в год.
          </p>
        </div>
      </div>
    </section>
  );
}
