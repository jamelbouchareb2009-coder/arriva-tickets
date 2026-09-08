import { useEffect, useState } from "react";

export function useLiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return now;
}

export function formatHms(date: Date) {
  return date.toLocaleTimeString("en-GB", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function controlCode(date: Date) {
  const bucket = Math.floor(date.getTime() / 10_000);
  return String(((bucket * 7919) % 900) + 100);
}
