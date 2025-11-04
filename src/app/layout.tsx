import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Layout/page";
import Footer from "@/Components/Layout/Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jindal Renewable Energy | Solar & Wind Power Solutions in India",
  description: "Leading renewable energy company in India specializing in solar power, wind energy, and sustainable solutions. 250MW+ installations across India with expert engineering and grid integration services.",
  keywords: "renewable energy, solar power, wind energy, clean energy, sustainable solutions, solar panels, India, grid integration, energy storage",
  authors: [{ name: "Jindal Renewable Energy" }],
  openGraph: {
    title: "Jindal Renewable Energy | Solar & Wind Power Solutions",
    description: "Transform India's energy landscape with our renewable energy solutions. 250MW+ solar and wind installations nationwide.",
    type: "website",
    locale: "en_IN",
    siteName: "Jindal Renewable Energy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jindal Renewable Energy | Solar & Wind Power Solutions",
    description: "Leading renewable energy company in India with 250MW+ installations. Solar, wind, and sustainable energy solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
