import { AnimatedBar, SectionHeader, comparisonData, removalData } from './shared';

export default function ComparisonAndConclusions() {
  return (
    <>
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
    </>
  );
}
