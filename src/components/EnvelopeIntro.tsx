import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CornerBouquet } from './BotanicalOrnament';

const ENVELOPE_TEXTURE_URL = '/src/assets/images/envelope_paper_texture_1795590787580.jpg';

interface EnvelopeIntroProps {
  onOpenComplete: () => void;
}

export function EnvelopeIntro({ onOpenComplete }: EnvelopeIntroProps) {
  const [stage, setStage] = useState<'closed' | 'unsealing' | 'opening'>('closed');
  const [textureFailed, setTextureFailed] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleOpen = () => {
    if (stage !== 'closed') return;
    if (shouldReduceMotion) {
      onOpenComplete();
      return;
    }
    setStage('unsealing');
    window.setTimeout(() => {
      setStage('opening');
    }, 340);
    window.setTimeout(() => {
      onOpenComplete();
    }, 1350);
  };

  const isUnsealing = stage === 'unsealing' || stage === 'opening';
  const isOpening = stage === 'opening';

  return (
    <motion.section
      aria-label="Wedding Invitation Envelope"
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpening ? 0 : 1 }}
      transition={{ duration: isOpening ? 0.45 : 0.6, delay: isOpening ? 0.72 : 0 }}
      className="relative min-h-dvh w-full beige-backdrop paper-grain flex flex-col items-center justify-center px-5 py-10 overflow-hidden"
    >
      {/* Subtle desk corner botanicals on wider screens */}
      <CornerBouquet
        className="hidden md:block absolute -top-10 -left-10 w-64 h-64 opacity-70"
        rotateDeg={12}
      />
      <CornerBouquet
        className="hidden md:block absolute -bottom-10 -right-10 w-64 h-64 opacity-70"
        flipX
        flipY
        rotateDeg={10}
      />

      <div className="relative z-10 w-full max-w-[440px] flex flex-col items-center">
        {/* Quiet top header above envelope */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: isUnsealing ? 0 : 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-xs uppercase tracking-[0.26em] text-[#665057] font-medium mb-6 text-center"
        >
          Riyas Mon &amp; Muhsina
        </motion.p>

        {/* 3D Envelope Assembly */}
        <div
          className="relative w-full aspect-[4/3] max-w-[420px]"
          style={{ perspective: '1200px' }}
        >
          {/* Ambient soft paper shadow */}
          <div
            className="absolute inset-x-6 -bottom-4 h-8 rounded-full bg-[#2C1E23]/15 blur-xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Envelope Back Body */}
          <div className="relative w-full h-full rounded-xl bg-[#D8C3A5] shadow-[0_22px_50px_-14px_rgba(44,30,35,0.22)] border border-[#C6AE8D] overflow-visible">
            {/* Inner Ivory Floral Liner */}
            <div className="absolute inset-2 rounded-lg bg-[#F7F2E9] overflow-hidden border border-[#E5D7C3]">
              <CornerBouquet
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-40 h-40 opacity-55"
                rotateDeg={180}
              />
            </div>

            {/* Rising Invitation Card Preview inside Envelope */}
            <motion.div
              initial={{ y: 8, opacity: 0.96 }}
              animate={{
                y: isOpening ? -135 : 8,
                scale: isOpening ? 1.03 : 1,
                opacity: 1,
              }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-4 top-3 bottom-3 rounded-lg bg-[#F7F2E9] border border-[#D8C3A5] shadow-md flex flex-col items-center justify-start pt-7 px-5 text-center"
            >
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#9D3158] font-medium">
                Bismillahir Rahmanir Raheem
              </span>
              <span className="mt-2 font-serif text-xl sm:text-2xl font-medium text-[#2C1E23]">
                Riyas Mon &amp; Muhsina
              </span>
              <span className="mt-1 text-xs text-[#665057]">27 June 2027</span>
            </motion.div>

            {/* Envelope Front Pocket (Bottom + Side Triangles) */}
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-20">
              {!textureFailed && (
                <img
                  src={ENVELOPE_TEXTURE_URL}
                  alt=""
                  aria-hidden="true"
                  referrerPolicy="no-referrer"
                  onError={() => setTextureFailed(true)}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply"
                />
              )}

              {/* Left flap fold */}
              <svg
                viewBox="0 0 400 300"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
                aria-hidden="true"
              >
                <polygon
                  points="0,0 200,165 0,300"
                  fill="#D2BC9B"
                  stroke="#C4AA85"
                  strokeWidth="0.75"
                />
                <polygon
                  points="400,0 200,165 400,300"
                  fill="#CEB795"
                  stroke="#C4AA85"
                  strokeWidth="0.75"
                />
                <polygon
                  points="0,300 200,145 400,300"
                  fill="#DFCCB1"
                  stroke="#C4AA85"
                  strokeWidth="1"
                />
              </svg>

              {/* Delicate Dark Rani Pink Silk Ribbon */}
              <motion.div
                animate={{ opacity: isUnsealing ? 0 : 1, scaleX: isUnsealing ? 1.06 : 1 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-x-0 top-[56%] -translate-y-1/2 h-3 bg-gradient-to-b from-[#A93961] via-[#9D3158] to-[#7B2242] shadow-sm opacity-90"
              />
            </div>

            {/* Top Envelope Flap (3D Rotating) */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={{
                rotateX: isOpening ? -175 : 0,
                zIndex: isOpening ? 5 : 30,
              }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
              className="absolute inset-x-0 top-0 h-[58%] z-30 pointer-events-none"
            >
              <svg
                viewBox="0 0 400 175"
                preserveAspectRatio="none"
                className="w-full h-full drop-shadow-[0_4px_10px_rgba(44,30,35,0.12)]"
                aria-hidden="true"
              >
                <polygon
                  points="0,0 400,0 200,170"
                  fill="#E4D4BC"
                  stroke="#C4AA85"
                  strokeWidth="1"
                />
                <polygon
                  points="14,6 386,6 200,160"
                  fill="none"
                  stroke="#F7F2E9"
                  strokeOpacity="0.45"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>

            {/* Dark Rani Pink Wax Seal Button (Interactive) */}
            <motion.button
              type="button"
              onClick={handleOpen}
              aria-label="Open wedding invitation"
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: isUnsealing ? 0.72 : 1,
                opacity: isUnsealing ? 0 : 1,
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 z-40 w-16 h-16 rounded-full bg-[#9D3158] text-[#F7F2E9] shadow-[0_6px_18px_rgba(123,34,66,0.45)] border-2 border-[#B84A71] flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9D3158] focus-visible:ring-offset-4 focus-visible:ring-offset-[#DFCCB1]"
            >
              <span className="w-12 h-12 rounded-full border border-[#F7F2E9]/35 flex items-center justify-center font-serif text-base font-medium tracking-wider">
                R&amp;M
              </span>
            </motion.button>
          </div>
        </div>

        {/* Invitation Prompt & Primary CTA below Envelope */}
        <motion.div
          animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? 10 : 0 }}
          transition={{ duration: 0.35 }}
          className="mt-10 flex flex-col items-center text-center"
        >
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#2C1E23] tracking-tight">
            You&apos;re Invited
          </h1>
          <p className="mt-2 text-sm text-[#665057] max-w-xs leading-relaxed">
            Tap below to unseal the wedding invitation of Riyas Mon &amp; Muhsina.
          </p>

          <button
            type="button"
            onClick={handleOpen}
            disabled={stage !== 'closed'}
            className="mt-6 min-h-[48px] px-8 py-3.5 rounded-full bg-[#9D3158] hover:bg-[#7B2242] active:scale-[0.98] text-[#F7F2E9] text-xs sm:text-sm font-medium tracking-[0.18em] uppercase shadow-[0_10px_24px_-6px_rgba(157,49,88,0.45)] transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9D3158] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFE5D6] disabled:opacity-60"
          >
            OPEN INVITATION
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
