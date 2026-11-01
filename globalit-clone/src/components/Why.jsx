import { reasons } from "../data";

export default function Why() {
  return (
    <section id="why" className="py-16 md:py-24">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-brand">Our promise</p>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Why choose <span className="text-brand">us</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((r, i) => (
            <div key={r.title} className="relative rounded-2xl bg-slate-50 px-7 pb-8 pt-12 text-center">
              <span className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-linear-to-br from-brand to-azure text-lg font-bold text-white shadow-lg">
                {i + 1}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-ink">{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
