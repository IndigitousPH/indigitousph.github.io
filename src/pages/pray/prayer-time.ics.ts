import type { APIRoute } from 'astro';
import { getSite } from '@/lib/content';

/**
 * "Add it to my calendar" file for the weekly prayer time, built from src/content/site/site.json.
 * Until day/time/weekday are filled in it is an empty calendar, and /pray does not link to it.
 */
export const GET: APIRoute = async ({ site }) => {
  const p = await getSite('prayer');
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Indigitous Philippines//Prayer time//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VTIMEZONE',
    'TZID:Asia/Manila',
    'BEGIN:STANDARD',
    'DTSTART:19700101T000000',
    'TZOFFSETFROM:+0800',
    'TZOFFSETTO:+0800',
    'TZNAME:PHT',
    'END:STANDARD',
    'END:VTIMEZONE',
  ];
  if (p.time && p.weekday) {
    const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    const [hh, mm] = p.time.split(':').map(Number);
    // First occurrence: the next matching weekday from 2026-01-01 (a Thursday).
    const start = new Date(Date.UTC(2026, 0, 1));
    while (days[start.getUTCDay()] !== p.weekday) start.setUTCDate(start.getUTCDate() + 1);
    const pad = (n: number) => String(n).padStart(2, '0');
    const ymd = `${start.getUTCFullYear()}${pad(start.getUTCMonth() + 1)}${pad(start.getUTCDate())}`;
    const endMinutes = hh * 60 + mm + p.durationMinutes;
    const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
    lines.push(
      'BEGIN:VEVENT',
      `UID:prayer-time@${new URL(site ?? 'https://indigitousph.github.io').host}`,
      `DTSTAMP:${stamp}`,
      `DTSTART;TZID=Asia/Manila:${ymd}T${pad(hh)}${pad(mm)}00`,
      `DTEND;TZID=Asia/Manila:${ymd}T${pad(Math.floor(endMinutes / 60) % 24)}${pad(endMinutes % 60)}00`,
      `RRULE:FREQ=WEEKLY;BYDAY=${p.weekday}`,
      'SUMMARY:Indigitous Philippines prayer time',
      `DESCRIPTION:Praying for the Philippines\\, our local networks\\, and people meeting Jesus online.${p.link ? `\\n${p.link}` : ''}`,
      ...(p.link ? [`URL:${p.link}`] : []),
      `LOCATION:${p.platform ?? 'Online'}`,
      'END:VEVENT',
    );
  }
  lines.push('END:VCALENDAR');
  return new Response(lines.join('\r\n') + '\r\n', {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8' },
  });
};
