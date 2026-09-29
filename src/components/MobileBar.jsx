import { centre } from '../config.js'
import { telHref } from '../lib/contact.js'

export default function MobileBar() {
  const cls = 'flex-1 rounded-full py-3 text-center font-bold'
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-ink/10 bg-white p-3 lg:hidden">
      {telHref && <a href={telHref} className={`${cls} bg-emerald-700 text-white`}>Call</a>}
      <a href="#contact" className={`${cls} bg-brand-600 text-white`}>Enquire</a>
      <a href={centre.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${cls} border-2 border-ink/20`}>Directions<span className="sr-only"> (opens in a new tab)</span></a>
    </nav>
  )
}
