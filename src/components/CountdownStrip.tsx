import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

const WEDDING_TARGET_MS = new Date('2027-06-27T10:00:00+05:30').getTime();

function computeTimeLeft(): TimeLeft {
  const diff = WEDDING_TARGET_MS - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, isPast: false };
}

export function CountdownStrip() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => computeTimeLeft());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(computeTimeLeft());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (timeLeft.isPast) {
    return (
      <p className="text-sm font-serif italic text-[#9D3158]">
        Celebrating our wedding day — 27 June 2027
      </p>
    );
  }

  const units = [
    { label: 'Days', value: String(timeLeft.days) },
    { label: 'Hours', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Minutes', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Seconds', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <div
      className="flex items-center justify-center gap-4 sm:gap-7 py-4 border-y border-[#D8C3A5]/65"
      aria-label="Countdown to the wedding"
    >
      {units.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-4 sm:gap-7">
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#9D3158] tabular-nums leading-none">
              {unit.value}
            </span>
            <span className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-[#665057] font-medium">
              {unit.label}
            </span>
          </div>
          {index < units.length - 1 && (
            <span className="text-[#D8C3A5] text-lg font-serif select-none" aria-hidden="true">
              ·
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
