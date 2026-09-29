import { useEffect, useRef, useState } from 'react'
import { gallery } from '../config.js'

function Viewer({ items, index, onClose, onMove }) {
  const ref = useRef(null)
  const item = items[index]
  useEffect(() => {
    const prev = document.activeElement
    ref.current?.focus()
    const key = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
      if (e.key === 'Tab') {
        const f = ref.current.querySelectorAll('button')
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', key)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = ''; prev?.focus?.() }
  }, [onClose, onMove])
  return (
    <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4" onClick={onClose}>
      <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} className="max-h-[75vh] w-full rounded-2xl object-contain" />
        <p className="mt-3 text-center text-white">{item.caption} ({index + 1} of {items.length})</p>
        <div className="mt-3 flex justify-center gap-3">
          <button ref={ref} type="button" className="btn btn-secondary !py-2" onClick={() => onMove(-1)}>Previous</button>
          <button type="button" className="btn btn-secondary !py-2" onClick={() => onMove(1)}>Next</button>
          <button type="button" className="btn btn-primary !py-2" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const real = gallery.filter((g) => g.src)
  const [open, setOpen] = useState(null)
  const move = (d) => setOpen((i) => (i === null ? i : (i + d + real.length) % real.length))
  return (
    <section id="gallery" className="section reveal">
      <p className="eyebrow">Gallery</p>
      <h2 className="h2">Life at the centre</h2>
      {real.length === 0 && <p className="mt-3 text-ink/70">Photos of classes and events from the Lakhra centre will appear here. The tiles below are placeholders.</p>}
      <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        {gallery.map((g, i) => {
          const ri = real.indexOf(g)
          return (
            <li key={i}>
              {g.src ? (
                <button type="button" onClick={() => setOpen(ri)} className="group block w-full overflow-hidden rounded-3xl shadow-card" aria-label={`Open image: ${g.caption}`}>
                  <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" />
                </button>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border-2 border-dashed border-brand-400/60 bg-gradient-to-br from-brand-100 to-indigo-100 p-3 text-center text-sm font-semibold text-ink/60">
                  {g.caption}<br />(photo placeholder)
                </div>
              )}
            </li>
          )
        })}
      </ul>
      {open !== null && <Viewer items={real} index={open} onClose={() => setOpen(null)} onMove={move} />}
    </section>
  )
}
