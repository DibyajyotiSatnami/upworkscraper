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
| Address (UCO Bank Building, Lokhra Bamunpara, Lokhra, Guwahati 781040), Plus Code, phone 086386 69857 | **Verified** – from the Google Maps listing text supplied by the site owner (29 Sep 2026) |
| Google rating 4.9 / 104 reviews and 3 quoted reviews (Priti Das, Deepika Das, Chatrajit Sinha) | From the same listing; shown with "as of" date and a link. Not put in structured data |
| Opening hours, WhatsApp, email, social links | **Placeholders – unverified** (hours not listed on Maps) |
| Fees, ages, levels, batch timings, demo availability | Deliberately omitted |
| Brand colours / logo | **Not inspected.** Palette is a placeholder; logo is a plain text treatment |
| Photos | None used. Gallery tiles are placeholders |

Lachit Nagar SIP Abacus listings found in search are different centres and were not used.

## Needed before launch
1. Opening hours. Re-check the Google rating/review count before launch and update `asOf`; ideally get the reviewers' or centre's OK to quote them.
2. Confirmed WhatsApp number (enables prefilled WhatsApp enquiry) and/or an enquiry email. Until then the form validates and lets parents copy the message; it says plainly that nothing was sent.
3. Google Maps embed URL (optional), verified social links, authorised centre photos (`public/gallery/`), authorised logo and brand colours.
4. Confirmation of which programmes run locally, and any genuine attributable parent reviews.
5. Public site URL (for structured data). JSON-LD includes only filled-in fields, no ratings.
