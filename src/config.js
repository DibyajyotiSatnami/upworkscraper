/**
 * SINGLE SOURCE OF TRUTH for editable business details.
 *
 * `null` = NOT VERIFIED. The UI shows "to be confirmed" and hides the related action.
 * Fill values in only after confirming them with the Lakhra centre.
 * NEVER paste national headquarters details here.
 */
export const centre = {
  name: 'SIP Abacus, Lakhra',
  brandName: 'SIP Abacus',
  locality: 'Lakhra',
  city: 'Guwahati',
  region: 'Assam',
  country: 'IN',

  // ---- Unverified (could not be read from Google Maps / official pages) ----
  streetAddress: null, // e.g. 'House No. 12, Lakhra Road'
  postalCode: null,
  phone: null, // international format, e.g. '+919XXXXXXXXX'
  whatsapp: null, // digits only with country code, e.g. '919XXXXXXXXX' – only if the centre confirms it
  email: null, // used for "mailto:" enquiries if set
  hours: null, // e.g. ['Mon–Fri: 4:00 pm – 7:00 pm'] – array of strings
  siteUrl: null, // public URL once launched (used in structured data)

  // Supplied by the site owner (Google Maps listing for this centre)
  mapsUrl:
    'https://www.google.com/maps/place/SIP+ABACUS,+LAKHRA/@26.1178433,91.7103434,8509m/data=!3m1!1e3!4m10!1m2!2m1!1sabacus!3m6!1s0x375a5d997957d77b:0x5c8bf4a7a2a5b9b8!8m2!3d26.1178433!4d91.7484423!15sCgZhYmFjdXMiA4gBAVoIIgZhYmFjdXOSAQ90cmFpbmluZ19jZW50ZXLgAQA!16s%2Fg%2F11k9l71ddb?entry=ttu',
  // Paste a valid "Share → Embed a map" src URL here to show a map. Otherwise no map is embedded.
  mapEmbedUrl: null,

  social: {
    // facebook: 'https://…', instagram: 'https://…'  – only verified centre pages
  },
}

export const officialSiteUrl = 'https://sipabacus.com/in/' // national brand reference only

/**
 * Programme names below come from search-result excerpts of the official SIP Abacus India
 * site (the site itself was unreachable). Local availability, levels, ages, fees: TO CONFIRM.
 */
export const programmes = [
  {
    id: 'abacus',
    name: 'Abacus & Mental Arithmetic',
    description:
      'Children learn to work with the abacus and gradually move on to calculating in the mind, in a structured, step-by-step programme.',
  },
  {
    id: 'brain-gym',
    name: 'Brain Gym',
    description:
      'Short, playful activities described by SIP Abacus as part of its programme to support focus and coordination.',
  },
  {
    id: 'speed-writing',
    name: 'Speed Writing',
    description:
      'Handwriting-focused practice that SIP Abacus lists alongside abacus and Brain Gym.',
  },
]

/** Gallery: add real centre photos to /public/gallery and fill `src` + `alt`. Empty src = placeholder. */
export const gallery = [
  { src: null, alt: 'Children practising on abacus in a Lakhra class', caption: 'Classroom practice' },
  { src: null, alt: 'Brain Gym activity at the centre', caption: 'Brain Gym activity' },
  { src: null, alt: 'Centre event', caption: 'Centre events' },
  { src: null, alt: 'Students at the Lakhra centre', caption: 'Our students' },
  { src: null, alt: 'Classroom at SIP Abacus Lakhra', caption: 'The classroom' },
  { src: null, alt: 'Certificate or celebration moment', caption: 'Celebrations' },
]

/** Parent feedback: add ONLY genuine, attributable, permitted reviews. Empty = section is not rendered. */
export const testimonials = []
// e.g. { quote: '…', name: 'Parent name', source: 'Google review, Month Year' }

export const faqs = [
  {
    q: 'What is abacus learning?',
    a: 'The abacus is a counting frame. Children learn to move beads to represent numbers, then gradually practise calculating in their minds by picturing the abacus. SIP Abacus presents this as a fun, structured way to build number skills.',
  },
  {
    q: 'What does SIP Abacus teach besides abacus?',
    a: 'The official SIP Abacus programme also mentions Brain Gym and Speed Writing. Please ask the Lakhra centre which of these it currently offers.',
  },
  {
    q: 'What ages and levels are available?',
    a: 'This depends on the programme and the centre. Please contact the Lakhra centre to discuss what suits your child.',
  },
  {
    q: 'What are the fees and batch timings?',
    a: 'We do not list fees or timings here because they must come from the centre. Send an enquiry or call the centre for current details.',
  },
  {
    q: 'Can I visit or attend a demo class?',
    a: 'You can ask the centre about visiting or arranging a demo. Availability is decided by the centre.',
  },
  {
    q: 'Is this the official SIP Abacus website?',
    a: 'This page is about the Lakhra, Guwahati centre. For the national brand, visit the official SIP Abacus India website.',
  },
]
