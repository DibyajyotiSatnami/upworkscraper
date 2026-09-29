import { useState } from 'react'
import { faqs, testimonials } from '../config.js'

export function Feedback() {
  if (!testimonials.length) return null // omitted until genuine, attributable reviews exist
  return (
    <section className="section">
      <h2 className="h2">Parent feedback</h2>
      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <li key={t.name} className="card"><blockquote>“{t.quote}”</blockquote><p className="mt-3 font-bold">{t.name}</p><p className="text-sm text-ink/60">{t.source}</p></li>
        ))}
      </ul>
    </section>
  )
}

export function Faqs() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faqs" className="bg-white">
      <div className="section reveal max-w-3xl">
        <p className="eyebrow">FAQs</p>
        <h2 className="h2">Questions parents ask</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl border-2 border-ink/10">
              <h3>
                <button type="button" id={`faq-b-${i}`} aria-expanded={open === i} aria-controls={`faq-p-${i}`}
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-lg font-bold">
                  {f.q}<span aria-hidden="true" className="text-2xl text-brand-600">{open === i ? '−' : '+'}</span>
                </button>
              </h3>
              <div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} hidden={open !== i} className="px-5 pb-5 text-ink/80">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
