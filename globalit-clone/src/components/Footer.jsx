import Logo from "./Logo";
import { company, services } from "../data";

const linkCls = "transition hover:text-brand-light";

export default function Footer() {
  return (
    <footer className="bg-[#23252b] pt-16 text-sm text-slate-300">
      <div className="container-x grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
        <div>
          <Logo small />
          <p className="my-5 text-[13px] leading-relaxed">{company.tagline}</p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 font-bold text-white transition hover:bg-azure"
          >
            f
          </a>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Quick links</h4>
          <ul className="space-y-2.5">
            <li><a href="#home" className={linkCls}>Home</a></li>
            <li><a href="#about" className={linkCls}>About us</a></li>
            <li><a href="#services" className={linkCls}>Services</a></li>
            <li><a href="#contact" className={linkCls}>Contact us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Services</h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.id}><a href="#services" className={linkCls}>{s.title}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Contact info</h4>
          <ul className="space-y-2.5">
            <li>{company.address}</li>
            <li><a href={`tel:${company.phone.replace(/\s/g, "")}`} className={linkCls}>{company.phone}</a></li>
            <li><a href={`mailto:${company.email}`} className={`${linkCls} break-all`}>{company.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="container-x flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs sm:flex-row">
        <span>© 2026 Global IT Technology. All rights reserved.</span>
        <a href="#home" className={linkCls}>Privacy Policy (PDF)</a>
      </div>
    </footer>
  );
}
