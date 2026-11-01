export default function CallToAction() {
  return (
    <section className="px-4 pb-16 md:pb-24">
      <div className="container-x overflow-hidden rounded-3xl bg-linear-to-r from-navy via-[#14284a] to-[#0f3a5f] px-6 py-12 text-center text-white sm:px-12 md:py-16">
        <h2 className="mx-auto mb-4 max-w-2xl text-2xl font-bold sm:text-3xl md:text-4xl">
          Ready to make your IT simpler and more reliable?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-slate-300">
          Tell us what you need and our team will recommend the right solution for your business.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-md bg-brand px-8 py-3 font-semibold shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark"
        >
          Contact us today
        </a>
      </div>
    </section>
  );
}
