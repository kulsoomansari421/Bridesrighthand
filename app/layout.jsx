import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "BridesRight | Luxury Bridal Concierge",
  description:
    "Luxury bridal concierge services offering calm, confident support and polished wedding day coordination for modern couples.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f5ede6] text-[#241e1b]">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,_rgba(166,127,74,0.16),transparent_42%)]" />

          <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-12">
            <header className="sticky top-0 z-50 -mx-4 border-b border-white/20 bg-white/35 backdrop-blur-md sm:-mx-6 lg:-mx-12">
              <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-12">
                <Link href="/" className="relative h-[48px] w-[142px] shrink-0 overflow-hidden sm:h-[58px] sm:w-[180px]">
                  <Image
                    src="/BridesrightLogo.png"
                    alt="BridesRight logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 142px, 180px"
                  />
                </Link>

                <nav className="hidden items-center gap-8 lg:flex">
                  {[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                    { label: "Services", href: "/services" },
                    { label: "Contact", href: "/contact" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-[11px] uppercase tracking-[0.3em] text-[#4d413b] hover:text-[#8c6a3f]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center bg-[#a67f4a] px-4 text-[9px] uppercase tracking-[0.22em] text-white transition hover:opacity-90 sm:px-6 sm:text-[10px]"
                >
                  Book Consultation
                </Link>
              </div>
            </header>

            <main className="flex-1 pt-8 sm:pt-10">{children}</main>

            <footer className="border-t border-[#e0d1bf] bg-[#f3ebe3] px-4 py-16 sm:px-6 lg:px-12 lg:py-20">
              <div className="mx-auto grid max-w-7xl gap-12 text-center md:grid-cols-3 md:text-left">
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative h-[48px] w-[180px] overflow-hidden sm:w-[220px]">
                    <Link href="/" className="absolute inset-0">
                      <Image
                        src="/BridesrightLogo.png"
                        alt="BridesRight logo"
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 180px, 220px"
                      />
                    </Link>
                  </div>

                  <p className="mt-6 max-w-sm text-[14px] leading-7 text-[#4f433d]">
                    Calm. Supported. Present.
                  </p>

                  <div className="mt-7 flex gap-4 text-[#6d5b4e]">
                    <FaFacebook size={18} />
                    <FaInstagram size={18} />
                  </div>
                </div>

                <div>
                  <p className="uppercase tracking-[0.35em] text-[10px] text-[#8e6b40]">
                    Explore
                  </p>

                  <div className="mt-7 flex flex-col gap-4 text-[14px] text-[#4f433d]">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact">Contact</Link>
                  </div>
                </div>

                <div>
                  <p className="uppercase tracking-[0.35em] text-[10px] text-[#8e6b40]">
                    Get In Touch
                  </p>

                  <div className="mt-7 space-y-5 text-[#4f433d]">
                    <div className="flex items-center justify-center gap-3 md:justify-start">
                      <Phone size={16} />
                      <span className="text-[14px]">909-241-3850</span>
                    </div>

                    <div className="flex items-center justify-center gap-3 md:justify-start">
                      <Mail size={16} />
                      <span className="text-[14px]">bridesrighthandca@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 text-center text-[12px] uppercase tracking-[0.35em] text-[#8b7768]">
                powered by metaronics
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}