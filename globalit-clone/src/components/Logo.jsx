export default function Logo({ small = false }) {
  return (
    <a href="#home" className="inline-flex items-center gap-2.5 text-white" aria-label="Global IT Technology">
      <svg viewBox="0 0 44 44" className={small ? "h-8 w-8" : "h-10 w-10"} aria-hidden="true">
        <rect x="2" y="2" width="40" height="40" rx="9" fill="#1f7ac4" />
        <path
          d="M32 14H20a6 6 0 0 0-6 6v4a6 6 0 0 0 6 6h12"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <rect x="22" y="22" width="14" height="14" rx="3" fill="#3da74e" />
      </svg>
      <span className="flex flex-col leading-none">
        <strong className={small ? "text-lg font-bold" : "text-[22px] font-bold"}>Global IT</strong>
        <small className="mt-1 text-[9px] tracking-[4px] opacity-80">TECHNOLOGY</small>
      </span>
    </a>
  );
}
