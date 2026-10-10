export type Locale = "EN" | "UR";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    logoAria: string;
    brandLine: string;
    brandSub: string;
    location: string;
    services: string;
    work: string;
    studio: string;
    contact: string;
    book: string;
    bookMobile: string;
  };
  hero: {
    tag: string;
    scroll: string;
    titleOutline: string;
    titleFill: string;
    eyebrow: string;
    description: string;
    ctaBook: string;
    ctaWork: string;
  };
  services: {
    interior: {
      number: string;
      label: string;
      title: string;
      body: string;
      tags: string[];
    };
    exterior: {
      number: string;
      label: string;
      title: string;
      body: string;
      tags: string[];
    };
  };
  showcase: {
    eyebrow: string;
    title: string;
    panels: Array<{ category: string; label: string }>;
  };
  testimonial: {
    eyebrow: string;
    prevLabel: string;
    nextLabel: string;
    prevAria: string;
    nextAria: string;
    goToAria: string;
    items: Array<{
      quote: string;
      quoteEmphasis: string;
      attribution: string;
      role: string;
      location: string;
    }>;
  };
  about: {
    eyebrow: string;
    title: string;
    titleMuted: string;
    philosophyLabel: string;
    body: string;
    pillars: string[];
  };
  serviceArea: {
    eyebrow: string;
    city: string;
    zip: string;
    state: string;
    title: string;
    titleMuted: string;
    body: string;
  };
  contact: {
    eyebrow: string;
    titleLine1: string;
    titleOutline: string;
    titleLine2: string;
    locationLabel: string;
    locationValue: string;
    hoursLabel: string;
    hoursValue: string;
    phoneLabel: string;
    phoneValue: string;
    emailLabel: string;
    emailValue: string;
    cta: string;
  };
  booking: {
    titleLine1: string;
    titleOutline: string;
    titleLine2: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    titleOutline: string;
    titleFill: string;
    location: string;
    instagram: string;
    phone: string;
    email: string;
    booking: string;
    copyright: string;
    region: string;
  };
};
