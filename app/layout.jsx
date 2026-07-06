import Link from "next/link";
import { Inter, Playfair_Display, Allura } from "next/font/google";
import "./globals.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Phone, Mail } from "lucide-react";
import Navbar from "./components/Navbar";
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
const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

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
            
            {/* Responsive Navbar */}
            <Navbar />

            <main className="flex-1 pt-8 sm:pt-10">
              {children}
            </main>

            <footer className="border-t border-[#e0d1bf] bg-[#f3ebe3] px-4 py-16 sm:px-6 lg:px-12 lg:py-20">
            <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
                <div className="flex flex-col items-center md:items-start">
   
  <div className="flex flex-col items-center md:items-start">

  <div className="relative h-[120px] w-[420px] sm:h-[140px] sm:w-[500px]">
    <Link href="/" className="absolute inset-0">
      <Image
        src="/BridesrightLogo.png"
        alt="BridesRight logo"
        fill
        priority
        className="object-contain object-left"
        sizes="(max-width:768px) 420px, 500px"
      />
    </Link>
  </div>

  <p className="mt-2 max-w-sm text-[15px] leading-7 text-[#5c514b]">
    Calm. Supported. Present.
  </p>

  <div className="mt-6 flex gap-5 text-[#8f6c41]">
   <a
  href="https://www.instagram.com/bridesrighthandca/?hl=en"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram />
</a>

<a
  href="https://www.facebook.com/profile.php?id=61574286489478"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaFacebookF />
</a>

<a
  href="https://www.tiktok.com/@bridesrighthand"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaTiktok />
</a>
</div>
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
                      <span className="text-[14px]">
                       info@briderighthand.net
                      </span>
                    </div>
                  </div>
                </div>
              </div>

<div className="mt-10 flex flex-col items-end">
  <div className="text-right">
    <h2
      className={`${playfair.className} text-[clamp(1.5rem,3vw,2.2rem)] leading-tight text-[#433631]`}
    >
      Your Day
    </h2>

    <span
      className={`${allura.className} block text-[clamp(2rem,5vw,3.5rem)] leading-none text-[#bc9b65]`}
    >
      Beautifully Supported
    </span>
  </div>

  <p className="mt-8 text-center text-[12px] uppercase tracking-[0.35em] text-[#8b7768] self-center">
    Powered by Metaronics
  </p>
</div>

           
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}