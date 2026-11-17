/**
 * Single source of truth for the legal entity behind LocalLoom.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * Apple's Developer Program organization enrollment requires that the website
 * submitted with the application is publicly verifiable as belonging to the
 * enrolling legal entity. The enrollment is filed under "HHM TECH PTY LTD",
 * while the product and domain are branded "LocalLoom" — so every page needs
 * to state the relationship between the two explicitly.
 *
 * Apple allows a product/trade name that differs from the legal company name.
 * What it does not allow is a website where that link cannot be established.
 *
 * Keep the LEGAL values below accurate and identical to what was filed with
 * ASIC and with Apple. Mismatched punctuation or a different suffix
 * ("Pty Ltd" vs "PTY LTD") is enough to make an automated check fail.
 */

/**
 * ABN / ACN are rendered only when non-empty, so an unfilled value never
 * appears on the live site as a visible placeholder (Apple explicitly rejects
 * websites with placeholder content).
 *
 * ACTION REQUIRED before resubmitting the enrollment: fill both in from the
 * ASIC company registration certificate. An Australian company website that
 * omits its ABN is a weak verification signal.
 */
export const company = {
  /** Registered legal entity name, exactly as filed with ASIC and Apple. */
  legalName: "HHM TECH PTY LTD",

  /** Short form used in running prose. */
  legalNameShort: "HHM TECH",

  /** Australian Business Number, e.g. "12 345 678 901". Empty = not rendered. */
  abn: "",

  /** Australian Company Number, e.g. "123 456 789". Empty = not rendered. */
  acn: "",

  /** Registered office. Street address is stronger than city alone. */
  address: {
    street: "",
    city: "Melbourne",
    state: "VIC",
    postcode: "",
    country: "Australia",
  },

  incorporatedIn: "Australia",
} as const;

export const product = {
  name: "LocalLoom",
  domain: "localloom.com.au",
  url: "https://localloom.com.au",
  tagline: "Weaving Local Connections",
  description:
    "LocalLoom helps homeowners connect with verified local tradies across Melbourne. Browse trusted professionals, view real customer reviews, and contact them directly without paying commissions or dealing with lead-selling platforms.",
} as const;

export const contact = {
  /**
   * Apple also checks that the enrollment work email sits on a domain
   * associated with the organization. A mailbox on localloom.com.au (or on an
   * hhmtech.com.au domain) reads as far more established than a free webmail
   * address — switch this over once the mailbox is live.
   */
  email: "localloomau@gmail.com",
  phone: "+61 488 323 492",
  /** tel: href form — no spaces. */
  phoneHref: "+61488323492",
  hours: "Mon – Fri: 9:00 AM – 6:00 PM (AEST)",
} as const;

/** Formatted single-line registered address, skipping unfilled parts. */
export function formattedAddress(): string {
  const { street, city, state, postcode, country } = company.address;
  return [street, city, [state, postcode].filter(Boolean).join(" "), country]
    .filter(Boolean)
    .join(", ");
}

/**
 * The attribution line. Rendered in the footer of every page and in the
 * homepage company strip — this is the sentence Apple needs to find.
 */
export const OWNERSHIP_LINE = `${product.name} is a product of ${company.legalName}.`;

export const COPYRIGHT_YEAR = 2026;

export const COPYRIGHT_LINE = `© ${COPYRIGHT_YEAR} ${company.legalName}. All Rights Reserved.`;
