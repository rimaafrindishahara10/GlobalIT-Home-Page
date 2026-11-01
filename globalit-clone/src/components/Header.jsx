import { useEffect, useState } from "react";
import Logo from "./Logo";
import { services } from "../data";

const aboutLinks = [
  { label: "Who we are", href: "#about" },
  { label: "Why choose us", href: "#why" },
];

const serviceLinks = services.map((s) => ({ label: s.title, href: "#services" }));

function Dropdown({ label, items, onPick }) {
  return (
    <div className="group relative">
      <button className="flex w-full items-center gap-1 py-3 transition hover:text-brand-light md:py-6">
        {label}
        <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <ul className="pl-3 md:invisible md:absolute md:left-0 md:top-full md:min-w-56 md:translate-y-2 md:rounded-xl md:bg-white md:py-2 md:pl-0 md:opacity-0 md:shadow-2xl md:ring-1 md:ring-black/5 md:transition md:group-hover:visible md:group-hover:translate-y-0 md:group-hover:opacity-100">
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              onClick={onPick}
              className="block py-2 text-sm text-slate-300 md:px-5 md:text-slate-600 md:hover:bg-slate-50 md:hover:text-brand"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-linear-to-r from-navy via-[#1a1d33] to-navy transition-shadow ${
        scrolled ? "shadow-lg shadow-black/30" : ""
      }`}
    >
      <div className="container-x flex min-h-[72px] items-center justify-between">
        <Logo />

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-full rounded bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-full rounded bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-full rounded bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        <nav
          className={`${
            open ? "flex" : "hidden"
          } absolute inset-x-0 top-[72px] max-h-[80vh] flex-col overflow-y-auto bg-[#12152b] px-[4%] pb-5 text-[15px] font-medium text-white md:static md:flex md:max-h-none md:flex-row md:items-center md:gap-8 md:overflow-visible md:bg-transparent md:p-0`}
        >
          <a
            href="#home"
            onClick={close}
            className="border-b border-white/10 py-3 transition hover:text-brand-light md:border-0 md:py-0"
          >
            Home
          </a>
          <Dropdown label="About us" items={aboutLinks} onPick={close} />
          <Dropdown label="Services" items={serviceLinks} onPick={close} />
          <a
            href="#contact"
            onClick={close}
            className="mt-4 rounded-md bg-brand px-5 py-2 text-center text-sm font-semibold text-white transition hover:bg-brand-dark md:mt-0"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}
