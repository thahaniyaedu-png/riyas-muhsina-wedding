import { useState } from 'react';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { EnvelopeIntro } from './components/EnvelopeIntro';
import { InvitationCard } from './components/InvitationCard';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenComplete = () => {
    setIsOpened(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayEnvelope = () => {
    setIsOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-dvh w-full bg-[#F7F2E9] text-[#2C1E23]">
        <AnimatePresence mode="wait">
          {!isOpened ? (
            <EnvelopeIntro key="envelope" onOpenComplete={handleOpenComplete} />
          ) : (
            <InvitationCard key="invitation" onReplayEnvelope={handleReplayEnvelope} />
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
