import type { ReactElement } from "react";

interface IconProps {
  className?: string;
}

/* Logo — sacola de compras estilo marketplace */
export const BagLogo = ({ className }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path d="M13 16h22l-2 20.5a4 4 0 0 1-4 3.5H19a4 4 0 0 1-4-3.5L13 16z" fill="currentColor" />
    <path d="M17.5 16v-3a6.5 6.5 0 0 1 13 0v3" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
    <path d="M24 21c-2.2 0-3.7 1.4-3.7 3.3 0 4.1 6.8 2.8 6.8 5.6 0 1.4-1.3 2.4-3.1 2.4-2 0-3.4-1.2-3.7-2.8" fill="none" stroke="#ee4d2d" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M24 19.6v1.5M24 32.2v1.5" stroke="#ee4d2d" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

export const SearchIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className={className} aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m20.5 20.5-4-4" />
  </svg>
);

export const CameraIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M4 8h3l2-2.5h6L17 8h3a1.5 1.5 0 0 1 1.5 1.5V18A1.5 1.5 0 0 1 20 19.5H4A1.5 1.5 0 0 1 2.5 18V9.5A1.5 1.5 0 0 1 4 8z" />
    <circle cx="12" cy="13" r="3.4" />
  </svg>
);

export const CartIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M3 4h2.2l2.4 11.2a1.6 1.6 0 0 0 1.6 1.3h7.9a1.6 1.6 0 0 0 1.6-1.2L20.5 8H6" />
    <circle cx="10" cy="20" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="17.5" cy="20" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export const HeartIcon = ({ className, filled = false }: IconProps & { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 20.5S3.5 15.4 3.5 9.6C3.5 6.7 5.7 4.5 8.4 4.5c1.5 0 2.8.7 3.6 1.8a4.6 4.6 0 0 1 3.6-1.8c2.7 0 4.9 2.2 4.9 5.1 0 5.8-8.5 10.9-8.5 10.9z" />
  </svg>
);

export const StarIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.8l2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.4l-5.7 2.9 1.1-6.3-4.6-4.5 6.4-.9L12 2.8z" />
  </svg>
);

export const BoltIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.6 2 4 13.6h6L10.4 22 20 10.4h-6L13.6 2z" />
  </svg>
);

export const FlameIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 22c-4 0-6.5-2.6-6.5-6 0-2.8 1.8-5 3.2-6.9C10 7.4 11 6 11.3 4c.1-.7 1-.9 1.4-.3 1 1.5 1.5 3 1.4 4.7 1-.4 1.8-1 2.3-2 .3-.6 1.2-.5 1.4.2.7 2.4 1.7 4.7 1.7 7.4 0 3.4-2.5 6-6.5 6z" />
  </svg>
);

export const TruckIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M2.5 6h11v10h-11zM13.5 10h4l3 3.5V16h-7" />
    <circle cx="7" cy="17.6" r="1.9" fill="currentColor" stroke="none" />
    <circle cx="17" cy="17.6" r="1.9" fill="currentColor" stroke="none" />
    <path d="M2.5 9.5h5" opacity=".5" />
  </svg>
);

export const CoinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" opacity=".28" />
    <circle cx="12" cy="12" r="6.4" />
    <path d="M12 8.6v6.8M9.8 10.2h3.6a1.4 1.4 0 0 1 0 2.8H10.6a1.4 1.4 0 0 0 0 2.8h4" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

export const TicketIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M3 9V6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5V9a2.5 2.5 0 0 0 0 6v2.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5V15a2.5 2.5 0 0 0 0-6z" />
    <path d="M14 5v14" strokeDasharray="2.4 2.6" />
  </svg>
);

export const ShieldIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 2.5 4.5 5.5v6c0 4.6 3.2 8 7.5 10 4.3-2 7.5-5.4 7.5-10v-6L12 2.5z" />
    <path d="m8.8 11.8 2.3 2.3 4.1-4.6" strokeLinecap="round" />
  </svg>
);

export const ReturnIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M4 9h11a5 5 0 0 1 0 10H8" />
    <path d="M8 5 4 9l4 4" />
  </svg>
);

export const PixIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M11 2.6 6.6 7a3.4 3.4 0 0 0 0 4.8l-1 1a3.4 3.4 0 0 0 0 4.8L11 21.4a1.5 1.5 0 0 0 2 0l4.4-4.4a3.4 3.4 0 0 0 0-4.8l1-1a3.4 3.4 0 0 0 0-4.8L13 2.6a1.5 1.5 0 0 0-2 0zM8.7 9.1l3.3-3.3 3.3 3.3-2.2 2.2a1.6 1.6 0 0 1-2.2 0L8.7 9.1zm-2 6.2 1.9-1.9a4.5 4.5 0 0 0 6.8 0l1.9 1.9-3.3 3.3-3.3-3.3z" opacity=".9" />
  </svg>
);

export const LiveIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
    <path d="M8.5 15.5a5 5 0 0 1 0-7M15.5 8.5a5 5 0 0 1 0 7M5.6 18.4a9 9 0 0 1 0-12.8M18.4 5.6a9 9 0 0 1 0 12.8" />
  </svg>
);

export const ChevronLeft = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m15 5-7 7 7 7" />
  </svg>
);

export const ChevronRight = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m9 5 7 7-7 7" />
  </svg>
);

export const ChevronDown = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const PlusIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className={className} aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const MinusIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className={className} aria-hidden="true">
    <path d="M5 12h14" />
  </svg>
);

export const TrashIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M4.5 6.5h15M9.5 6.5v-2h5v2M6.5 6.5l.9 13a1.6 1.6 0 0 0 1.6 1.5h6a1.6 1.6 0 0 0 1.6-1.5l.9-13M10 10.5v6M14 10.5v6" />
  </svg>
);

export const CloseIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className={className} aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const CheckIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const BellIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 14 6 10z" />
    <path d="M10 19a2.2 2.2 0 0 0 4 0" />
  </svg>
);

export const QuestionIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M9.8 9.3a2.3 2.3 0 0 1 4.5.7c0 1.5-2.3 1.8-2.3 3.2M12 16.6h.01" strokeWidth="2" />
  </svg>
);

export const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.5 21v-7h2.6l.4-3h-3V9.1c0-.9.3-1.6 1.6-1.6h1.5V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H8v3h2.4v7h3.1z" />
  </svg>
);

export const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const YoutubeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.2V8.8l5.2 3.2-5.2 3.2z" />
  </svg>
);

/* ---- category icons ---- */
const catStroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const CatIcons: Record<string, (p: IconProps) => ReactElement> = {
  plug: ({ className }) => (
    <svg viewBox="0 0 24 24" {...catStroke} className={className} aria-hidden="true">
      <path d="M9 3v5M15 3v5M6.5 8h11v3.5a5.5 5.5 0 0 1-11 0V8zM12 17v4" />
    </svg>
  ),
  shirt: ({ className }) => (
    <svg viewBox="0 0 24 24" {...catStroke} className={className} aria-hidden="true">
      <path d="m9 4-5.5 3 1.7 3.8L8 10v10h8V10l2.8.8L20.5 7 15 4a3 3 0 0 1-6 0z" />
    </svg>
  ),
  sparkle: ({ className }) => (
    <svg viewBox="0 0 24 24" {...catStroke} className={className} aria-hidden="true">
      <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18l-1.8-5.4L4.5 10.8 10.2 9 12 3.5zM19 16l.9 2.6L22.5 19l-2.6.9L19 22.5 18.1 19.9 15.5 19l2.6-.4L19 16z" />
    </svg>
  ),
  pan: ({ className }) => (
    <svg viewBox="0 0 24 24" {...catStroke} className={className} aria-hidden="true">
      <path d="M3.5 10.5h13v4a5 5 0 0 1-5 5h-3a5 5 0 0 1-5-5v-4zM16.5 12.5H21M8 7.5c0-1.2 1-1.3 1-2.5M12 7.5c0-1.2 1-1.3 1-2.5" />
    </svg>
  ),
  watch: ({ className }) => (
    <svg viewBox="0 0 24 24" {...catStroke} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="5.5" />
      <path d="M12 9.5V12l1.8 1.5M9.5 3.5h5L15.6 6H8.4l1.1-2.5zM9.5 20.5h5L15.6 18H8.4l1.1 2.5z" />
    </svg>
  ),
  shoe: ({ className }) => (
    <svg viewBox="0 0 24 24" {...catStroke} className={className} aria-hidden="true">
      <path d="M3 16.5V8c2.5 1.5 5 1.5 6.5 0 1 2.5 4.5 3.5 7.5 4.5 2.2.8 4 1.5 4 2.5v1.5H3zM3 13.5h18M8 10.5l1 1M11 11.5l1 1" />
    </svg>
  ),
  phone: ({ className }) => (
    <svg viewBox="0 0 24 24" {...catStroke} className={className} aria-hidden="true">
      <rect x="7" y="2.8" width="10" height="18.4" rx="2.4" />
      <path d="M11 18.2h2" strokeWidth="2.4" />
    </svg>
  ),
  clock: ({ className }) => (
    <svg viewBox="0 0 24 24" {...catStroke} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  ),
  drop: ({ className }) => (
    <svg viewBox="0 0 24 24" {...catStroke} className={className} aria-hidden="true">
      <path d="M12 3.5S5.8 10 5.8 14.2a6.2 6.2 0 0 0 12.4 0C18.2 10 12 3.5 12 3.5z" />
      <path d="M9 14.5a3 3 0 0 0 2 2.8" />
    </svg>
  ),
  lamp: ({ className }) => (
    <svg viewBox="0 0 24 24" {...catStroke} className={className} aria-hidden="true">
      <path d="M8 3.5h8l3 8H5l3-8zM12 11.5v6M8.5 20.5h7M10 17.5h4" />
    </svg>
  ),
};
