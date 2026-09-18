import type { Dictionary } from './types';

/**
 * English content. A full translation, not a partial one: the spec forbids
 * shipping pages that mix languages. Unvalidated facts stay unpublished here
 * exactly as they do in Spanish.
 */
export const en: Dictionary = {
  meta: {
    localeName: 'English',
    htmlLang: 'en',
    siteName: 'BARUCH Hostal',
  },
  common: {
    skipToContent: 'Skip to content',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    book: 'Book now',
    bookAria: 'Book on the reservation engine',
    bookUnavailable: 'Booking setup in progress',
    viewAccommodation: 'View accommodation',
    whatsapp: 'WhatsApp',
    whatsappAria: 'Message us on WhatsApp',
    whatsappUnavailable: 'WhatsApp setup in progress',
    whatsappPrompt: 'Message us',
    seeDetails: 'See details',
    backTo: 'Back to',
    breadcrumbAria: 'Breadcrumb',
    languageSwitch: 'Language',
    switchToLanguage: 'View this page in Spanish',
    opensInNewTab: 'opens in a new tab',
    pendingLabel: 'Being confirmed',
    pendingBody:
      'We are confirming this detail with the hostal and will publish it once verified.',
    guests: { one: '{count} guest', other: '{count} guests' },
    bed: 'bed',
    beds: 'beds',
  },
  nav: {
    home: 'Home',
    accommodation: 'Accommodation',
    restaurant: 'Restaurant',
    experiences: 'Experiences',
    location: 'Location',
    contact: 'Contact',
    discover: 'Discover Buritaca',
  },
  home: {
    title: 'Hostel in Buritaca, Magdalena',
    description:
      'Hostel in Buritaca, Magdalena: private rooms and shared beds, a restaurant set in nature, and a strategic base for exploring the Colombian Caribbean.',
    hero: {
      eyebrow: 'Buritaca · Magdalena',
      headline: 'Explore Buritaca. Come back to rest.',
      support:
        'Head out into nature, discover the area, and return to a calm place where the day ends quietly.',
      imageAlt:
        'Dense tropical vegetation lit by afternoon sun on the Colombian Caribbean coast',
    },
    experience: {
      eyebrow: 'The BARUCH experience',
      heading: 'A place to come back to, not just to sleep',
      intro:
        'BARUCH brings together location, rest and local life. These six pillars define the stay.',
      pillars: [
        {
          title: 'Location',
          body: 'A strategic base for reaching the attractions around the region.',
        },
        {
          title: 'Rest',
          body: 'A calm place to return to after a day of exploring.',
        },
        {
          title: 'Comfort',
          body: 'Private and shared options for couples, families, groups and solo travellers.',
        },
        {
          title: 'Gastronomy',
          body: 'Our own restaurant set in a natural environment, open to visitors too.',
        },
        {
          title: 'Nature and wellness',
          body: 'Natural resting spaces, hammocks and wellness experiences when available.',
        },
        {
          title: 'Experiences',
          body: 'Access to tours and activities run by BARUCH or by partners, always clearly identified.',
        },
      ],
    },
    discover: {
      eyebrow: 'Discover Buritaca',
      heading: 'The destination is part of the stay',
      intro:
        'Buritaca is the gateway to beaches, the river, nature and several of the best-known attractions on the Colombian Caribbean coast. We are preparing practical guides to help you plan.',
      cta: 'Explore the destination',
    },
    accommodation: {
      eyebrow: 'Accommodation',
      heading: 'Private rooms and shared beds',
      intro:
        'Six categories, from a private room for two to a single bed in a shared room. Choose what fits your group and the way you travel.',
      cta: 'See all categories',
    },
    restaurant: {
      eyebrow: 'Restaurant',
      heading: 'Nature, calm and a good table',
      intro:
        'The BARUCH restaurant is not a closed dining hall: it is built into the greenery and the unhurried pace of the place.',
      cta: 'Visit the restaurant',
      imageAlt:
        'Wooden table under tropical vegetation with natural light filtering through the leaves',
    },
    nature: {
      eyebrow: 'Nature and wellness',
      heading: 'Shade, hammocks and quiet',
      intro:
        'Between one outing and the next, the natural spaces at the hostal are for doing nothing at all. That is part of the plan.',
      imageAlt: 'Hammock hung between trees in a shaded tropical garden',
    },
    experiences: {
      eyebrow: 'Experiences',
      heading: 'Beach, river, nature and local life',
      intro:
        'From BARUCH you can arrange trips to the attractions nearby. Whenever an activity is run by a partner, we say so.',
      cta: 'See experiences',
    },
    location: {
      eyebrow: 'Location',
      heading: 'In Buritaca, Magdalena',
      intro:
        'In the Buritaca area, with access to transport, nearby shops and routes out to Colombian Caribbean destinations.',
      cta: 'How to get here',
    },
    trust: {
      eyebrow: 'Trust',
      heading: 'What past guests say',
      intro:
        'We would rather not publish testimonials until we can show them with a verifiable source.',
      pendingNote:
        'This section will go live with real reviews linked to the platform they came from.',
    },
    finalCta: {
      heading: 'Ready to come to Buritaca?',
      body: 'Check availability on the reservation engine, or message us and we will answer your questions.',
      imageAlt: 'Warm sunset over the Caribbean coast with palm trees in silhouette',
    },
  },
  accommodation: {
    title: 'Accommodation in Buritaca: private and shared rooms',
    description:
      'Six accommodation categories at BARUCH Hostal: private rooms for 2, 3, 4 and 5 guests with a private bathroom, and single beds in shared rooms for 6 and 7 guests.',
    heading: 'Accommodation',
    intro:
      'The catalogue is organised by type and capacity. Private rooms are booked as a whole room; in shared rooms you book a single bed.',
    privateHeading: 'Private rooms',
    privateIntro:
      'Booked as a complete room and including a private bathroom. Suited to couples, families and small groups.',
    sharedHeading: 'Shared rooms',
    sharedIntro:
      'You book a single bed, not the whole room. Shared bathroom and an individual locker are included.',
    generalAmenitiesHeading: 'In every category',
    bathroom: { private: 'Private bathroom', shared: 'Shared bathroom' },
    bookingMode: { room: 'Whole room', bed: 'Per bed' },
    bookingModeHint: {
      room: 'The booking covers the entire room.',
      bed: 'The booking covers one single bed inside the shared room.',
    },
    amenitiesHeading: 'What is included',
    amenityPendingNote:
      'We only publish features confirmed by the hostal. The remaining per-category details, including air conditioning, are still being validated.',
    ratesHeading: 'Rates',
    ratesPending:
      'Rates are shown on the reservation engine based on your dates and number of guests.',
    policiesHeading: 'Policies',
    policiesPending:
      'Check-in, check-out and cancellation policies are being validated with the hostal.',
    galleryHeading: 'Gallery',
    otherHeading: 'Other categories',
    detailDescriptionHeading: 'About this category',
  },
  restaurant: {
    title: 'Restaurant in Buritaca, set in nature',
    description:
      'The restaurant at BARUCH Hostal in Buritaca is built into a natural setting and open to both guests and visitors.',
    heading: 'Restaurant',
    intro:
      'Nature, calm and a good table. A space open to the greenery, for guests and for anyone stopping by to eat.',
    conceptHeading: 'The idea',
    conceptBody: [
      'The restaurant follows the same idea as the rest of the hostal: rather than a conventional enclosed dining room, it is a space woven into the vegetation with a relaxed atmosphere.',
      'It works as a service for guests and as a first encounter for visitors who discover BARUCH from the table.',
    ],
    menuHeading: 'The menu',
    menuPending:
      'We are confirming the final menu with the hostal before publishing it. Message us if you would like to know what is being served.',
    hoursHeading: 'Opening hours',
    hoursPending:
      'Opening hours are being validated. Ask us and we will confirm the current schedule.',
    imageAlt:
      'Open-air dining area surrounded by tropical plants with wooden furniture',
  },
  experiences: {
    title: 'Experiences and activities in Buritaca',
    description:
      'From BARUCH Hostal you can arrange trips to beaches, the river, nature and the attractions around Buritaca, Magdalena.',
    heading: 'Experiences',
    intro:
      'A stay at BARUCH is built around heading out to explore. These are the experiences you can arrange from the hostal.',
    aroundHeading: 'Around BARUCH',
    aroundIntro:
      'Buritaca connects to several Colombian Caribbean attractions. These are the destinations our guests ask about most often.',
    partnerHeading: 'Tours and partners',
    partnerBody:
      'Some activities are run by BARUCH and others by partners. When a service belongs to a third party we state it explicitly, so you know who you are booking with.',
    wellnessHeading: 'Wellness',
    wellnessBody:
      'Wellness reinforces what the hostal is about: rest, nature and recovery.',
    wellnessPending:
      'We are confirming each service name, the provider responsible, duration, price and how to book before publishing them.',
    detailsPending:
      'Details for each activity, including operators and prices, are being validated. Message us and we will tell you what is available for your dates.',
  },
  location: {
    title: 'How to get to BARUCH Hostal in Buritaca',
    description:
      'BARUCH Hostal is in Buritaca, Magdalena, Colombia, with access to transport and routes out to the attractions around the region.',
    heading: 'Location',
    intro:
      'BARUCH is in Buritaca, Magdalena, on the Colombian Caribbean coast, with access to transport and nearby shops.',
    addressHeading: 'Address',
    addressPending:
      'We are verifying the exact address and coordinates before publishing them. Message us and we will send you a precise reference so you arrive without trouble.',
    nearbyHeading: 'What is nearby',
    nearbyIntro:
      'These are the destinations and services guests ask about most often.',
    nearbyDisclaimer:
      'We do not publish distances or travel times until they are verified. Real travel times depend on transport and the season.',
    gettingHereHeading: 'Getting here',
    gettingHereBody:
      'Buritaca sits on the coastal corridor between Santa Marta and Palomino, reachable by public and private transport. Tell us where you are coming from and we will point you to the best route.',
    mapCta: 'See Buritaca on the map',
  },
  contact: {
    title: 'Contact — BARUCH Hostal, Buritaca',
    description:
      'Message us about availability, rates, the restaurant or the experiences at BARUCH Hostal in Buritaca, Magdalena.',
    heading: 'Contact',
    intro:
      'Tell us what you need: availability, rates, the restaurant or an experience in the area.',
    channelsHeading: 'Direct channels',
    channelsPending:
      'We are confirming the official contact details before publishing them. For now, the form below reaches us.',
    formHeading: 'Write to us',
    formIntro: 'We will reply with the verified information we have available.',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send message',
      submitting: 'Sending…',
      success:
        'Thanks for reaching out. We have received your message and will reply soon.',
      error:
        'We could not send your message. Please try again in a few minutes, or reach us on WhatsApp.',
      unavailable:
        'Form submission is not active yet: we are still setting up the channel that receives it. So you are not left without an answer, message us on WhatsApp.',
      rateLimited:
        'We have received several messages from this connection. Please wait a few minutes before sending again.',
      required: 'This field is required.',
      invalidEmail: 'Enter a valid email address.',
      tooShort: 'Tell us a little more so we can help.',
      errorSummary: 'Check the highlighted fields to continue.',
      privacyNote: 'We use these details only to answer your enquiry.',
    },
  },
  discover: {
    title: 'Discover Buritaca: destination guide',
    description:
      'Guides to Buritaca, Magdalena: what to do, how to get there, the river, the beaches and nearby Colombian Caribbean attractions.',
    heading: 'Discover Buritaca',
    intro:
      'Buritaca is the starting point. Here we gather useful information for planning your trip, written from the experience of being in the area.',
    plannedHeading: 'In preparation',
    plannedIntro:
      'These are the guides we are working on. Each one goes live once the information is verified.',
    plannedTopics: [
      'What to do in Buritaca',
      'How to get to Buritaca',
      'The Buritaca river',
      'Beaches and nature',
      'Experiences around the region',
      'Practical travel guides',
    ],
    emptyHeading: 'No guides published yet',
    emptyBody:
      'We would rather publish a few verified guides than many generic ones. In the meantime, message us and we will tell you what you need to know about the area.',
  },
  legal: {
    privacy: {
      title: 'Privacy policy',
      description:
        'How BARUCH Hostal handles the personal data received through its website.',
      heading: 'Privacy policy',
      body: [
        'This site collects only the data you submit voluntarily through the contact form: your name, your email address and the message you write.',
        'That data is used for one purpose: replying to your enquiry. It is not used for unsolicited marketing and is not sold or shared with third parties for commercial purposes.',
        'Reservations are completed on an external booking engine, on a different domain. That provider applies its own privacy policy and its own data handling terms.',
        'You can ask us to access, correct or delete your data through the official channels of the hostal.',
      ],
    },
    cookies: {
      title: 'Cookie policy',
      description:
        'Use of cookies and measurement technologies on the BARUCH Hostal website.',
      heading: 'Cookie policy',
      body: [
        'This site runs without advertising or profiling cookies.',
        'To understand in aggregate which content is useful, we may use traffic measurement. That measurement does not identify individual people and is not used to build individual profiles.',
        'If cookies requiring prior consent are introduced in the future, consent will be requested before they are activated and this page will be updated.',
      ],
    },
    terms: {
      title: 'Terms and conditions',
      description:
        'Terms of use for the BARUCH Hostal website in Buritaca, Magdalena.',
      heading: 'Terms and conditions',
      body: [
        'The information published on this site is informational and describes the accommodation, restaurant and experiences offered by BARUCH Hostal.',
        'Availability, rates and the final booking conditions are determined by the external reservation engine at the time of purchase.',
        'When an experience or service is provided by a partner, the contractual relationship is with that third party and is identified as such on the relevant page.',
        'The full accommodation conditions are being validated and will be published on this page.',
      ],
    },
    pendingNote:
      'Document under legal review. It will be updated with the final version approved by the hostal.',
  },
  footer: {
    tagline: 'A calm place to rest and discover the Colombian Caribbean.',
    exploreHeading: 'Explore',
    stayHeading: 'Accommodation',
    legalHeading: 'Legal',
    contactHeading: 'Contact',
    contactPending: 'Contact details are being validated.',
    socialPending: 'Official profiles are being verified.',
    rights: '© {year} BARUCH Hostal. Buritaca, Magdalena, Colombia.',
    assetNote:
      'Some images are temporary and will be replaced with the hostal’s own photography.',
  },
  notFound: {
    title: 'Page not found',
    heading: 'This page does not exist',
    body: 'The link may have changed. These are the most useful ways forward.',
    links: 'Continue to',
  },
  error: {
    heading: 'Something did not load as expected',
    body: 'You can try again. If the problem continues, message us and we will help.',
    retry: 'Try again',
  },
  whatsappMessages: {
    home: 'Hello, I am visiting the BARUCH Hostal website and would like more information.',
    accommodation:
      'Hello, I am looking at the accommodation at BARUCH Hostal and would like to ask about availability and rates.',
    experiences:
      'Hello, I am looking at the experiences at BARUCH Hostal and would like more information.',
    restaurant:
      'Hello, I would like information about the restaurant at BARUCH Hostal.',
    contact:
      'Hello, I am on the BARUCH Hostal contact page and would like more information.',
  },
};
