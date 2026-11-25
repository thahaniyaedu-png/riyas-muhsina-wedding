import { useState } from 'react';
import { motion } from 'motion/react';
import { CalendarPlus, Check, MapPin, RotateCcw, Share2 } from 'lucide-react';
import { BotanicalDivider, CornerBouquet, RibbonAccent } from './BotanicalOrnament';
import { CountdownStrip } from './CountdownStrip';

interface InvitationCardProps {
  onReplayEnvelope: () => void;
}

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Emerald+Palace+Kurukol+Kunnu';

function downloadCalendarIcs() {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Riyas Mon & Muhsina Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:riyas-muhsina-wedding-20270627@invitation',
    'DTSTAMP:20261124T000000Z',
    'DTSTART;TZID=Asia/Kolkata:20270627T100000',
    'DTEND;TZID=Asia/Kolkata:20270627T143000',
    'SUMMARY:Wedding of Riyas Mon & Muhsina',
    'DESCRIPTION:With the blessings of Allah and the love of our families, join us to celebrate the wedding of Riyas Mon & Muhsina.',
    'LOCATION:Emerald Palace, Kurukol Kunnu',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Riyas-Mon-and-Muhsina-Wedding.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function InvitationCard({ onReplayEnvelope }: InvitationCardProps) {
  const [calendarSaved, setCalendarSaved] = useState(false);
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  const handleSaveCalendar = () => {
    downloadCalendarIcs();
    setCalendarSaved(true);
    window.setTimeout(() => setCalendarSaved(false), 3200);
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareText =
      "Bismillahir Rahmanir Raheem — You're invited to the wedding of Riyas Mon & Muhsina on 27 June 2027 (10:00 AM – 2:30 PM) at Emerald Palace, Kurukol Kunnu.";

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Riyas Mon & Muhsina — Wedding Invitation',
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch {
        // User cancelled native share or fallback to clipboard/WhatsApp
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setShareFeedback('Invitation link copied');
      window.setTimeout(() => setShareFeedback(null), 3000);
    } catch {
      const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
      const tempLink = document.createElement('a');
      tempLink.href = whatsappHref;
      tempLink.target = '_blank';
      tempLink.rel = 'noopener noreferrer';
      tempLink.click();
    }
  };

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `Bismillahir Rahmanir Raheem — You're warmly invited to the wedding of Riyas Mon & Muhsina on 27 June 2027 (10:00 AM – 2:30 PM) at Emerald Palace, Kurukol Kunnu. ${typeof window !== 'undefined' ? window.location.href : ''}`
  )}`;

  return (
    <motion.main
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-dvh w-full beige-backdrop paper-grain py-6 sm:py-12 px-3 sm:px-6 flex flex-col items-center"
    >
      {/* Main Ivory Invitation Stationery Card */}
      <article className="relative w-full max-w-[780px] paper-canvas rounded-2xl shadow-[0_24px_60px_-15px_rgba(44,30,35,0.16)] border border-[#D8C3A5] overflow-hidden">
        {/* Delicate Inner Hairline Frame */}
        <div
          className="pointer-events-none absolute inset-3 sm:inset-5 rounded-xl border border-[#D8C3A5]/80 z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-4 sm:inset-6 rounded-lg border border-[#9D3158]/15 z-10"
          aria-hidden="true"
        />

        {/* Floral Corner Clusters (Dark Rani Pink Roses, Ivory Flowers, Leaves & Ribbons) */}
        <CornerBouquet
          className="absolute -top-9 -left-9 sm:-top-6 sm:-left-6 w-32 h-32 sm:w-48 sm:h-48 opacity-85 sm:opacity-95 z-0"
          rotateDeg={-12}
        />
        <CornerBouquet
          className="absolute -top-9 -right-9 sm:-top-6 sm:-right-6 w-32 h-32 sm:w-48 sm:h-48 opacity-85 sm:opacity-95 z-0"
          flipX
          rotateDeg={12}
        />
        <CornerBouquet
          className="absolute -bottom-9 -left-9 sm:-bottom-6 sm:-left-6 w-32 h-32 sm:w-48 sm:h-48 opacity-85 sm:opacity-95 z-0"
          flipY
          rotateDeg={12}
        />
        <CornerBouquet
          className="absolute -bottom-9 -right-9 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-48 sm:h-48 opacity-85 sm:opacity-95 z-0"
          flipX
          flipY
          rotateDeg={-12}
        />

        {/* Clean Central Typography & Invitation Content */}
        <div className="relative z-20 px-7 sm:px-16 md:px-20 pt-20 pb-16 sm:py-24 flex flex-col items-center text-center">
          {/* Silk Ribbon Motif */}
          <RibbonAccent className="w-24 h-6 mb-4" />

          {/* Arabic Bismillah Calligraphic Accent */}
          <p
            lang="ar"
            dir="rtl"
            className="font-serif text-xl sm:text-2xl text-[#9D3158] leading-relaxed"
          >
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>

          {/* Exact English Bismillah */}
          <p className="mt-1.5 text-xs sm:text-sm tracking-[0.18em] uppercase text-[#665057] font-medium">
            Bismillahir Rahmanir Raheem
          </p>

          <BotanicalDivider className="my-7 sm:my-8" />

          {/* Exact Header */}
          <p className="text-xs sm:text-sm tracking-[0.28em] uppercase text-[#9D3158] font-semibold">
            WEDDING INVITATION
          </p>

          <p className="mt-3 font-serif italic text-lg sm:text-xl text-[#665057]">
            Together with our families
          </p>

          {/* Couple Names */}
          <h1 className="mt-6 sm:mt-7 flex flex-col items-center text-balance">
            <span className="font-serif text-4xl sm:text-6xl font-semibold tracking-[0.06em] text-[#2C1E23] leading-tight">
              RIYAS MON
            </span>
            <span className="my-2 sm:my-3 font-serif italic text-3xl sm:text-4xl text-[#9D3158] font-normal">
              &amp;
            </span>
            <span className="font-serif text-4xl sm:text-6xl font-semibold tracking-[0.06em] text-[#2C1E23] leading-tight">
              MUHSINA
            </span>
          </h1>

          {/* Elegant Invitation Message */}
          <p className="mt-7 sm:mt-8 max-w-lg text-[15px] sm:text-base text-[#4A373D] leading-[1.8]">
            With the blessings of Allah and the love of our families, we joyfully invite you
            to join us as we unite in marriage and begin our life together. Your presence and
            heartfelt prayers will make our celebration truly blessed and memorable.
          </p>

          <BotanicalDivider className="my-8 sm:my-10" />

          {/* Wedding Details Grid (Hairline Editorial Layout — No Nested Boxes) */}
          <section
            aria-label="Wedding Ceremony Details"
            className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 py-6 border-y border-[#D8C3A5]/80"
          >
            <div className="flex flex-col items-center px-2">
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#9D3158] font-semibold">
                Wedding Date
              </span>
              <span className="mt-2 font-serif text-xl sm:text-2xl font-medium text-[#2C1E23]">
                27 June 2027
              </span>
              <span className="mt-0.5 text-xs text-[#665057]">Sunday</span>
            </div>

            <div className="flex flex-col items-center px-2 sm:border-x sm:border-[#D8C3A5]/70">
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#9D3158] font-semibold">
                Time
              </span>
              <span className="mt-2 font-serif text-xl sm:text-2xl font-medium text-[#2C1E23] tabular-nums">
                10:00 AM – 2:30 PM
              </span>
              <span className="mt-0.5 text-xs text-[#665057]">Nikah &amp; Reception</span>
            </div>

            <div className="flex flex-col items-center px-2">
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#9D3158] font-semibold">
                Venue
              </span>
              <span className="mt-2 font-serif text-xl sm:text-2xl font-medium text-[#2C1E23]">
                Emerald Palace
              </span>
              <span className="mt-0.5 text-xs sm:text-sm text-[#665057]">
                Kurukol Kunnu
              </span>
            </div>
          </section>

          {/* Live Countdown */}
          <div className="w-full max-w-md mt-8">
            <CountdownStrip />
          </div>

          {/* Interactive Action Controls */}
          <div className="mt-9 w-full max-w-lg flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleSaveCalendar}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-full bg-[#9D3158] hover:bg-[#7B2242] active:scale-[0.98] text-[#F7F2E9] text-xs font-medium tracking-[0.12em] uppercase inline-flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9D3158] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2E9]"
            >
              {calendarSaved ? (
                <>
                  <Check className="w-4 h-4" aria-hidden="true" />
                  <span>Saved to Calendar</span>
                </>
              ) : (
                <>
                  <CalendarPlus className="w-4 h-4" aria-hidden="true" />
                  <span>Save the Date</span>
                </>
              )}
            </button>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-full bg-transparent hover:bg-[#D8C3A5]/30 border border-[#9D3158]/45 text-[#9D3158] text-xs font-medium tracking-[0.12em] uppercase inline-flex items-center justify-center gap-2 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9D3158] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2E9]"
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Venue Map</span>
            </a>

            <button
              type="button"
              onClick={handleShare}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-full bg-transparent hover:bg-[#D8C3A5]/30 border border-[#D8C3A5] text-[#2C1E23] text-xs font-medium tracking-[0.12em] uppercase inline-flex items-center justify-center gap-2 transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9D3158] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2E9]"
            >
              <Share2 className="w-4 h-4 text-[#9D3158]" aria-hidden="true" />
              <span>Share Card</span>
            </button>
          </div>

          {shareFeedback && (
            <p role="status" className="mt-3 text-xs font-medium text-[#526B4B]">
              {shareFeedback}
            </p>
          )}

          {/* Direct WhatsApp Forward Link */}
          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 min-h-[40px] px-3 text-xs text-[#665057] hover:text-[#9D3158] underline underline-offset-4 decoration-[#D8C3A5] transition-colors"
          >
            Forward invitation on WhatsApp
          </a>

          {/* Traditional Wedding Dua Closing */}
          <div className="mt-10 pt-8 border-t border-[#D8C3A5]/60 max-w-md">
            <p className="font-serif italic text-base sm:text-lg text-[#9D3158] leading-relaxed">
              &ldquo;Barakallahu Lakuma wa Baraka Alaikuma wa Jama&apos;a Bainakuma fi Khair&rdquo;
            </p>
            <p className="mt-1.5 text-xs text-[#665057] leading-relaxed">
              May Allah bless both of you, shower His blessings upon you, and unite you both in
              goodness.
            </p>
          </div>

          <RibbonAccent className="w-20 h-5 mt-8" />
        </div>
      </article>

      {/* Subtle footer control to replay the envelope opening */}
      <footer className="mt-6 mb-4 flex items-center justify-center">
        <button
          type="button"
          onClick={onReplayEnvelope}
          className="min-h-[44px] px-4 py-2 text-xs text-[#665057] hover:text-[#9D3158] inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9D3158] rounded-full"
        >
          <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Replay Envelope</span>
        </button>
      </footer>
    </motion.main>
  );
}
