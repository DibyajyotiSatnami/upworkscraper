# SIP Abacus, Lakhra – centre website

React + Vite + Tailwind CSS (v3). Not published; run locally only.

## Setup
```
npm install
npm run dev       # http://localhost:5173
npm run build && npm run preview
```
All editable details live in **`src/config.js`**. `null` means "not verified" – the UI shows "To be confirmed" and hides that action.

## Sources and verification status
The two requested sources (`sipabacus.com/in/` and the Google Maps listing) were **blocked by this build environment's network proxy**, so they could not be read.

| Item | Status |
|---|---|
| Centre name "SIP ABACUS, LAKHRA", Guwahati, Assam | From your brief / Maps link title |
| Google Maps link | Supplied by you; used only for Directions |
| Programme names (Abacus, Brain Gym, Speed Writing) and general approach | From web-search excerpts of sipabacus.com; **not read on the site itself – confirm** |
| Address, phone, hours, WhatsApp, email, social links | **Placeholders – unverified** |
| Fees, ages, levels, batch timings, demo availability | Deliberately omitted |
| Brand colours / logo | **Not inspected.** Palette is a placeholder; logo is a plain text treatment |
| Photos, reviews, ratings | None used. Gallery tiles are placeholders; Parent Feedback is hidden until `testimonials` has genuine entries |

Lachit Nagar SIP Abacus listings found in search are different centres and were not used.

## Needed before launch
1. Lakhra address, postal code, phone, opening hours (from the centre / Maps listing).
2. Confirmed WhatsApp number (enables prefilled WhatsApp enquiry) and/or an enquiry email. Until then the form validates and lets parents copy the message; it says plainly that nothing was sent.
3. Google Maps embed URL (optional), verified social links, authorised centre photos (`public/gallery/`), authorised logo and brand colours.
4. Confirmation of which programmes run locally, and any genuine attributable parent reviews.
5. Public site URL (for structured data). JSON-LD includes only filled-in fields, no ratings.
