import type { Metadata } from "next";
import { Nunito_Sans, Inter, Urbanist } from "next/font/google";
import "./globals.css";

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
  title: "LocalLoom — Find Trusted Local Tradies Near You",
  description:
    "LocalLoom helps homeowners connect with verified local tradies across Melbourne. Browse trusted professionals, view real customer reviews, and contact them directly without paying commissions or dealing with lead-selling platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${inter.variable} ${urbanist.variable} h-full antialiased`}
    >
      <body className="min-h-full font-nunito">{children}</body>
    </html>
  );
}
