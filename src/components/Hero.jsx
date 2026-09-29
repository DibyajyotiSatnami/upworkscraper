import { centre } from '../config.js'
import Abacus, { NumberMotifs } from './Abacus.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-100 to-brand-50">
      <NumberMotifs />
      <div className="section relative grid items-center gap-10 md:grid-cols-2 !py-14 md:!py-24">
        <div>
          <p className="eyebrow">{centre.name} · {centre.city}, {centre.region}</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Discover the Joy of Numbers at <span className="text-brand-600">SIP Abacus, Lakhra.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink/80">
            Abacus and mental arithmetic classes for children in Lakhra, Guwahati. Talk to the centre about the programmes,
            find out what suits your child, and ask about a demo class.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-primary">Enquire About a Demo</a>
            <a href={centre.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Get Directions<span className="sr-only"> (opens Google Maps in a new tab)</span>
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md md:max-w-none">
          <Abacus className="w-full drop-shadow-xl" />
        </div>
      </div>
    </section>
  )
}
