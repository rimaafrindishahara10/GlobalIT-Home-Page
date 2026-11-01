import { useState } from "react";
import { company } from "../data";

const field =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-transparent focus:ring-2 focus:ring-brand";

const initial = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(initial);
  };

  return (
    <section id="contact" className="bg-slate-50 py-16 md:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-brand">Get in touch</p>
          <h2 className="mb-4 text-3xl font-bold text-ink md:text-4xl">
            Contact <span className="text-brand">us</span>
          </h2>
          <p>Have a question or need a quote? Send us a message and we will get back to you.</p>

          <ul className="mt-8 grid gap-5">
            <li className="flex flex-col rounded-xl border border-slate-200 bg-white p-4">
              <b className="text-ink">Address</b>
              <span>{company.address}</span>
            </li>
            <li className="flex flex-col rounded-xl border border-slate-200 bg-white p-4">
              <b className="text-ink">Phone</b>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="transition hover:text-brand">
                {company.phone}
              </a>
            </li>
            <li className="flex flex-col rounded-xl border border-slate-200 bg-white p-4">
              <b className="text-ink">Email</b>
              <a href={`mailto:${company.email}`} className="break-all transition hover:text-brand">
                {company.email}
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="grid content-start gap-4 rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/70 md:p-8">
          <input name="name" placeholder="Your name" value={form.name} onChange={onChange} required className={field} />
          <input name="email" type="email" placeholder="Your email" value={form.email} onChange={onChange} required className={field} />
          <textarea name="message" rows="5" placeholder="How can we help?" value={form.message} onChange={onChange} required className={field} />
          <button
            type="submit"
            className="rounded-lg bg-brand px-7 py-3 font-semibold text-white shadow-lg shadow-brand/25 transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Send message
          </button>
          {sent && <p className="text-sm text-brand-dark">Thanks! Your email app should open now.</p>}
        </form>
      </div>
    </section>
  );
}
