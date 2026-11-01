import Icon from "./Icon";

const highlights = ["Local Melbourne team", "Tailored solutions", "Fast, friendly support"];

export default function Hero() {
  return (
    <section id="home" className="hero-bg py-20 text-center text-white sm:py-28 lg:py-36">
      <div className="container-x relative">
        <span className="fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[2px] text-brand-light backdrop-blur sm:text-[13px]">
          <span className="h-2 w-2 rounded-full bg-brand" />
          Melbourne's family-owned IT partner
        </span>

        <h1 className="fade-up-2 mx-auto mb-6 max-w-4xl text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-6xl">
          Reliable IT solutions for{" "}
          <span className="bg-linear-to-r from-brand-light to-azure bg-clip-text text-transparent">your business</span>
        </h1>

        <p className="fade-up-2 mx-auto mb-9 max-w-2xl text-base text-slate-300 sm:text-lg">
          From consultancy to cloud and security, we keep your systems efficient and dependable so you can focus on what matters most.
        </p>

        <div className="fade-up-3 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3 font-semibold shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Get in touch <Icon name="arrow" className="h-4 w-4" />
          </a>
          <a
            href="#services"
            className="rounded-md border-2 border-white/80 px-7 py-3 font-semibold transition hover:bg-white hover:text-navy"
          >
            Our services
          </a>
        </div>

        <ul className="fade-up-3 mt-12 flex flex-col items-center justify-center gap-3 text-sm text-slate-300 sm:flex-row sm:gap-8">
          {highlights.map((h) => (
            <li key={h} className="inline-flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/20 text-brand-light">
                <Icon name="check" className="h-3 w-3" />
              </span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
