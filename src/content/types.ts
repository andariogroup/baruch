/**
 * A string with named `{placeholder}` slots, resolved by `format`.
 *
 * Dictionaries stay plain serializable data rather than holding functions,
 * because they are passed into Client Components and functions cannot cross
 * the server/client boundary.
 */
export type Template = string;

/** Singular and plural variants for a counted noun. */
export type PluralTemplate = { one: Template; other: Template };

/**
 * Shape of a locale dictionary. Both `es` and `en` must satisfy this type, so
 * a missing translation is a build error rather than a page that mixes
 * languages at runtime.
 */
export type Dictionary = {
  meta: {
    localeName: string;
    /** Value for the `lang` attribute. */
    htmlLang: string;
    siteName: string;
  };
  common: {
    skipToContent: string;
    menu: string;
    openMenu: string;
    closeMenu: string;
    book: string;
    bookAria: string;
    bookUnavailable: string;
    viewAccommodation: string;
    whatsapp: string;
    whatsappAria: string;
    whatsappUnavailable: string;
    whatsappPrompt: string;
    seeDetails: string;
    backTo: string;
    breadcrumbAria: string;
    languageSwitch: string;
    switchToLanguage: string;
    opensInNewTab: string;
    pendingLabel: string;
    pendingBody: string;
    /** `{count}` is replaced with the capacity. */
    guests: PluralTemplate;
    bed: string;
    beds: string;
  };
  nav: {
    home: string;
    accommodation: string;
    restaurant: string;
    experiences: string;
    location: string;
    contact: string;
    discover: string;
  };
  home: {
    title: string;
    description: string;
    hero: {
      eyebrow: string;
      headline: string;
      support: string;
      imageAlt: string;
    };
    experience: {
      eyebrow: string;
      heading: string;
      intro: string;
      pillars: readonly { title: string; body: string }[];
    };
    discover: {
      eyebrow: string;
      heading: string;
      intro: string;
      cta: string;
    };
    accommodation: {
      eyebrow: string;
      heading: string;
      intro: string;
      cta: string;
    };
    restaurant: {
      eyebrow: string;
      heading: string;
      intro: string;
      cta: string;
      imageAlt: string;
    };
    nature: {
      eyebrow: string;
      heading: string;
      intro: string;
      imageAlt: string;
    };
    experiences: {
      eyebrow: string;
      heading: string;
      intro: string;
      cta: string;
    };
    location: {
      eyebrow: string;
      heading: string;
      intro: string;
      cta: string;
    };
    trust: {
      eyebrow: string;
      heading: string;
      intro: string;
      pendingNote: string;
    };
    finalCta: {
      heading: string;
      body: string;
      imageAlt: string;
    };
  };
  accommodation: {
    title: string;
    description: string;
    heading: string;
    intro: string;
    privateHeading: string;
    privateIntro: string;
    sharedHeading: string;
    sharedIntro: string;
    generalAmenitiesHeading: string;
    bathroom: { private: string; shared: string };
    bookingMode: { room: string; bed: string };
    bookingModeHint: { room: string; bed: string };
    amenitiesHeading: string;
    amenityPendingNote: string;
    ratesHeading: string;
    ratesPending: string;
    policiesHeading: string;
    policiesPending: string;
    galleryHeading: string;
    otherHeading: string;
    detailDescriptionHeading: string;
  };
  restaurant: {
    title: string;
    description: string;
    heading: string;
    intro: string;
    conceptHeading: string;
    conceptBody: readonly string[];
    menuHeading: string;
    menuPending: string;
    hoursHeading: string;
    hoursPending: string;
    imageAlt: string;
  };
  experiences: {
    title: string;
    description: string;
    heading: string;
    intro: string;
    aroundHeading: string;
    aroundIntro: string;
    partnerHeading: string;
    partnerBody: string;
    wellnessHeading: string;
    wellnessBody: string;
    wellnessPending: string;
    detailsPending: string;
  };
  location: {
    title: string;
    description: string;
    heading: string;
    intro: string;
    addressHeading: string;
    addressPending: string;
    nearbyHeading: string;
    nearbyIntro: string;
    nearbyDisclaimer: string;
    gettingHereHeading: string;
    gettingHereBody: string;
    mapCta: string;
  };
  contact: {
    title: string;
    description: string;
    heading: string;
    intro: string;
    channelsHeading: string;
    channelsPending: string;
    formHeading: string;
    formIntro: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
      /** Shown when no delivery destination is configured yet. */
      unavailable: string;
      rateLimited: string;
      required: string;
      invalidEmail: string;
      tooShort: string;
      errorSummary: string;
      privacyNote: string;
    };
  };
  discover: {
    title: string;
    description: string;
    heading: string;
    intro: string;
    plannedHeading: string;
    plannedIntro: string;
    plannedTopics: readonly string[];
    emptyHeading: string;
    emptyBody: string;
  };
  legal: {
    privacy: {
      title: string;
      description: string;
      heading: string;
      body: readonly string[];
    };
    cookies: {
      title: string;
      description: string;
      heading: string;
      body: readonly string[];
    };
    terms: {
      title: string;
      description: string;
      heading: string;
      body: readonly string[];
    };
    pendingNote: string;
  };
  footer: {
    tagline: string;
    exploreHeading: string;
    stayHeading: string;
    legalHeading: string;
    contactHeading: string;
    contactPending: string;
    socialPending: string;
    /** `{year}` is replaced with the current year. */
    rights: Template;
    assetNote: string;
  };
  notFound: {
    title: string;
    heading: string;
    body: string;
    links: string;
  };
  error: {
    heading: string;
    body: string;
    retry: string;
  };
  /** Contextual WhatsApp openers, by page. */
  whatsappMessages: {
    home: string;
    accommodation: string;
    experiences: string;
    restaurant: string;
    contact: string;
  };
};
