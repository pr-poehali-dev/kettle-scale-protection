import { useState, useEffect, useRef } from 'react';

export const sections = [
  { id: 'intro', num: '01', title: 'Введение в проблему', short: 'Введение' },
  { id: 'consequences', num: '02', title: 'Негативные последствия', short: 'Последствия' },
  { id: 'mechanisms', num: '03', title: 'Физико-химические механизмы', short: 'Механизмы' },
  { id: 'protection', num: '04', title: 'Методы защиты', short: 'Защита' },
  { id: 'engineering', num: '05', title: 'Инженерные решения', short: 'Инженерия' },
  { id: 'maintenance', num: '06', title: 'Рекомендации', short: 'Обслуживание' },
  { id: 'comparison', num: '07', title: 'Сравнительный анализ', short: 'Сравнение' },
  { id: 'conclusions', num: '08', title: 'Итоги и выводы', short: 'Выводы' },
];

export const comparisonData = [
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

export const removalData = [
  { method: 'Лимонная кислота', efficiency: 88, time: '2–4 ч', safety: 'Высокая', cost: '★★☆' },
  { method: 'Уксусная кислота', efficiency: 82, time: '3–6 ч', safety: 'Средняя', cost: '★☆☆' },
  { method: 'Ортофосфорная кислота', efficiency: 95, time: '1–2 ч', safety: 'Низкая', cost: '★★★' },
  { method: 'ЭДТА (хелатный агент)', efficiency: 97, time: '4–8 ч', safety: 'Средняя', cost: '★★★' },
  { method: 'Механическое очищение', efficiency: 65, time: '1–3 ч', safety: 'Высокая', cost: '★★☆' },
  { method: 'Ультразвуковая обработка', efficiency: 91, time: '0.5–1 ч', safety: 'Высокая', cost: '★★★' },
];

export const chemComposition = [
  { compound: 'CaCO₃ (кальцит)', percent: 58, color: 'bg-amber-500' },
  { compound: 'CaSO₄ (гипс)', percent: 21, color: 'bg-blue-500' },
  { compound: 'Mg(OH)₂ (брусит)', percent: 12, color: 'bg-emerald-500' },
  { compound: 'SiO₂ (кремнезём)', percent: 6, color: 'bg-purple-500' },
  { compound: 'Fe₂O₃ и прочие', percent: 3, color: 'bg-red-500' },
];

export const lossData = [
  { thickness: '1 мм', loss: 10, label: '10%' },
  { thickness: '3 мм', loss: 25, label: '25%' },
  { thickness: '5 мм', loss: 40, label: '40%' },
  { thickness: '8 мм', loss: 55, label: '55%' },
  { thickness: '12 мм', loss: 70, label: '70%' },
];

export function AnimatedBar({ value, delay = 0 }: { value: number; delay?: number }) {
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

export function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono-custom text-4xl font-bold text-[hsl(var(--primary))] opacity-25">{num}</span>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-[hsl(var(--foreground))]">{title}</h2>
    </div>
  );
}
