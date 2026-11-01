import Icon from "./Icon";
import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-16 md:py-24">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-brand">What we do</p>
          <h2 className="mb-4 text-3xl font-bold text-ink md:text-4xl">
            Our <span className="text-brand">Services</span>
          </h2>
          <p>Everything your business needs to keep technology running smoothly.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-azure/10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                <Icon name={s.icon} className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="text-[15px]">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
