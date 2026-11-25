import { useState } from 'react';

const FLORAL_CLUSTER_URL = '/src/assets/images/floral_corner_cluster_1795590786790.jpg';

interface CornerBouquetProps {
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
  rotateDeg?: number;
}

export function CornerBouquet({
  className = '',
  flipX = false,
  flipY = false,
  rotateDeg = 0,
}: CornerBouquetProps) {
  const [imgError, setImgError] = useState(false);

  const transformStyle = `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1}) rotate(${rotateDeg}deg)`;

  if (imgError) {
    return (
      <svg
        viewBox="0 0 180 180"
        fill="none"
        aria-hidden="true"
        className={className}
        style={{ transform: transformStyle }}
      >
        <path
          d="M22 152C44 114 78 78 134 38"
          stroke="#526B4B"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M52 108C34 94 26 76 34 62C50 66 64 84 52 108Z"
          fill="#526B4B"
          fillOpacity="0.35"
        />
        <path
          d="M84 82C102 64 124 62 134 74C118 92 98 94 84 82Z"
          fill="#526B4B"
          fillOpacity="0.4"
        />
        <circle cx="58" cy="112" r="22" fill="#9D3158" fillOpacity="0.88" />
        <circle cx="58" cy="112" r="13" fill="#7B2242" fillOpacity="0.7" />
        <circle cx="96" cy="76" r="16" fill="#9D3158" fillOpacity="0.75" />
        <circle cx="118" cy="52" r="8" fill="#F7F2E9" stroke="#D8C3A5" strokeWidth="1.2" />
        <path
          d="M16 128C42 134 64 152 78 168"
          stroke="#9D3158"
          strokeWidth="2.4"
          strokeOpacity="0.55"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <img
      src={FLORAL_CLUSTER_URL}
      alt=""
      aria-hidden="true"
      referrerPolicy="no-referrer"
      onError={() => setImgError(true)}
      className={`pointer-events-none select-none mix-blend-multiply object-contain ${className}`}
      style={{ transform: transformStyle }}
    />
  );
}

export function BotanicalDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D8C3A5]" />
      <svg width="44" height="18" viewBox="0 0 44 18" fill="none">
        <path
          d="M4 9C10 9 14 4 19 9C14 14 10 9 4 9Z"
          fill="#526B4B"
          fillOpacity="0.45"
        />
        <path
          d="M40 9C34 9 30 4 25 9C30 14 34 9 40 9Z"
          fill="#526B4B"
          fillOpacity="0.45"
        />
        <circle cx="22" cy="9" r="3.2" fill="#9D3158" />
        <circle cx="22" cy="9" r="6" stroke="#D8C3A5" strokeWidth="0.9" />
      </svg>
      <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D8C3A5]" />
    </div>
  );
}

export function RibbonAccent({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 26"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8 14C28 6 42 18 60 12C78 6 92 18 112 10"
        stroke="#9D3158"
        strokeWidth="1.5"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M60 12C53 4 46 6 48 12C50 16 56 15 60 12Z"
        fill="#9D3158"
        fillOpacity="0.22"
        stroke="#9D3158"
        strokeWidth="1"
      />
      <path
        d="M60 12C67 4 74 6 72 12C70 16 64 15 60 12Z"
        fill="#9D3158"
        fillOpacity="0.22"
        stroke="#9D3158"
        strokeWidth="1"
      />
      <circle cx="60" cy="12" r="2.2" fill="#9D3158" />
    </svg>
  );
}
