import type { Metadata } from "next";
import { Nunito_Sans, Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { company, contact, formattedAddress, product } from "./lib/company";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(product.url),
  title: {
    default: `${product.name} — Find Trusted Local Service Providers Near You`,
    template: `%s`,
  },
  description: product.description,
  applicationName: product.name,
  /*
   * author / publisher / copyright carry the legal entity in the page head, so
   * the brand → company relationship is machine-readable as well as visible.
   * Apple's organization verification needs to connect localloom.com.au to
   * HHM TECH PTY LTD.
   */
  authors: [{ name: company.legalName, url: product.url }],
  creator: company.legalName,
  publisher: company.legalName,
  openGraph: {
    type: "website",
    siteName: product.name,
    title: `${product.name} — Find Trusted Local Service Providers Near You`,
    description: product.description,
    url: product.url,
    locale: "en_AU",
  },
  alternates: {
    canonical: product.url,
  },
  verification: {
    google: "6ImxH-fLKFbW-N9xxHsMU9zK-CRxW981GMruhV8QMFI",
  },
  other: {
    "dc.publisher": company.legalName,
    "dc.rights": `© ${company.legalName}`,
  },
};

/**
 * schema.org graph declaring that the LocalLoom brand and the
 * localloom.com.au website are both owned by HHM TECH PTY LTD.
 */
function organizationJsonLd() {
  const { street, city, state, postcode } = company.address;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${product.url}/#organization`,
        name: company.legalName,
        legalName: company.legalName,
        alternateName: product.name,
        url: product.url,
        description: `${company.legalName} is an Australian technology company and the owner and operator of ${product.name}.`,
        ...(company.abn
          ? {
              identifier: [
                {
                  "@type": "PropertyValue",
                  name: "ABN",
                  value: company.abn,
                },
                ...(company.acn
                  ? [{ "@type": "PropertyValue", name: "ACN", value: company.acn }]
                  : []),
              ],
            }
          : {}),
        address: {
          "@type": "PostalAddress",
          ...(street ? { streetAddress: street } : {}),
          addressLocality: city,
          addressRegion: state,
          ...(postcode ? { postalCode: postcode } : {}),
          addressCountry: "AU",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: contact.email,
          telephone: contact.phone,
          areaServed: "AU",
          availableLanguage: "en",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${product.url}/#website`,
        url: product.url,
        name: product.name,
        description: product.description,
        inLanguage: "en-AU",
        publisher: { "@id": `${product.url}/#organization` },
        copyrightHolder: { "@id": `${product.url}/#organization` },
      },
      {
        "@type": "Brand",
        "@id": `${product.url}/#brand`,
        name: product.name,
        slogan: product.tagline,
        url: product.url,
        parentOrganization: { "@id": `${product.url}/#organization` },
      },
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${nunitoSans.variable} ${inter.variable} ${urbanist.variable} h-full antialiased`}
    >
      <head>
        <meta name="author" content={company.legalName} />
        <meta
          name="copyright"
          content={`${company.legalName}, ${formattedAddress()}`}
        />
        <script
          type="application/ld+json"
          // Static, build-time constant from app/lib/company.ts — no user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </head>
      <body className="min-h-full font-nunito">{children}</body>
    </html>
  );
}
