import { stats } from "../data";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-brand">Who we are</p>
          <h2 className="mb-5 text-3xl font-bold leading-tight text-ink md:text-4xl">
            About <span className="text-brand">Global IT Technology</span>
          </h2>
          <p className="mb-4">
            Global IT Technology is an Australian family-owned business based in Melbourne, offering a wide range of IT services tailored to the needs of organisations.
          </p>
          <p className="mb-7">
            Our solutions are designed to increase the efficiency and reliability of your systems, so that you can focus on the aspects of your business that really matter to you.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-md bg-brand px-7 py-3 font-semibold text-white shadow-lg shadow-brand/25 transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Talk to our team
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
            >
              <b className="block bg-linear-to-r from-azure to-brand bg-clip-text text-4xl font-bold text-transparent">
                {s.value}
              </b>
              <span className="text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
