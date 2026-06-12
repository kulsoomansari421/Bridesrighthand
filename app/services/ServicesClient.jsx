"use client";
import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import { Cormorant_Garamond, Montserrat, Allura } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const packages = [
  {
    title: "Wedding-Day Concierge",
    subtitle: "THE ESSENTIALS",
    price: "$1,000",
    features: [
      "Pre-wedding consultation",
      "Customized wedding-day timeline",
      "Vendor confirmations leading up to the day",
      "Up to 8 hours onsite",
      "Personal bridal assistant",
      "Bridal emergency kit on hand",
      "Day-of timeline management",
    ],
    highlight: false,
  },
  {
    title: "Extended Concierge Experience",
    subtitle: "MOST LOVED",
    price: "$1,300",
    features: [
      "Everything in Wedding-Day Concierge",
      "Up to 10 hours onsite",
      "Rehearsal coordination",
      "Unlimited communication 2 weeks prior",
      "Extended day-of timeline management",
    ],
    highlight: true,
  },
  {
    title: "Full Bridal Support Experience",
    subtitle: "THE FULL EXPERIENCE",
    price: "$1,800",
    features: [
      "Everything in Extended Concierge",
      "Up to 12 hours onsite",
      "Rehearsal attendance & coordination",
      "Vendor coordination 30 days prior",
      "Setup assistance",
      "Full bridal concierge throughout the day",
    ],
    highlight: false,
  },
];

const addons = [
  {
    title: "Extra Hour",
    price: "$100/hour",
    description:
      "Stay just a little longer — for sunset photos, the after-party, or anything in between.",
  },
  {
    title: "Bridal Emergency Kit Upgrade",
    price: "$75",
    description:
      "An elevated kit with premium essentials for every possible 'just in case'.",
  },
  {
    title: "Bridal Treat Package",
    price: "$75",
    description:
      "A curated little box of pampering — for the morning of, or the moment you need a breath.",
  },
];

export default function ServicesClient() {
  return (
    <div className={`${montserrat.className} bg-[#f5ede6] overflow-hidden`}>
      {/* HERO */}
      <section className="px-6 sm:px-8 lg:px-12 pt-24 pb-20">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.45em] text-[#8f6c41]">
              Services & Pricing
            </p>

            <h1
              className={`${cormorant.className} mt-5 text-[48px] sm:text-[64px] leading-[0.95] text-[#433631]`}
            >
              Choose your
              <span
                className={`${allura.className} block mt-3 text-[#9a7746] text-[58px] sm:text-[76px]`}
              >
                experience
              </span>
            </h1>

            <p className="mt-8 max-w-2xl mx-auto text-[14px] sm:text-[15px] leading-7 text-[#4a3f39]/75">
              Three thoughtfully crafted packages — and a few beautiful add-ons — designed to give you back the one thing money usually cannot buy: presence on your own wedding day.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* PACKAGES */}
      <section className="px-6 sm:px-8 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <AnimatedSection key={pkg.title}>
              <div
                className={`relative bg-white border rounded-[2px] p-8 lg:p-10 h-full shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-1 ${
                  pkg.highlight ? "border-[#bc9b65]" : "border-[#ede7df]"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#bc9b65] text-white text-[9px] uppercase tracking-[0.25em] px-4 py-1">
                      Most Loved
                    </span>
                  </div>
                )}

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#c2b4a2]">
                  {pkg.subtitle}
                </p>

                <h3 className={`${cormorant.className} mt-4 text-[38px] leading-tight text-[#433631]`}>
                  {pkg.title}
                </h3>

                <p className="mt-6 text-[#bc9b65] text-[42px] leading-none">
                  <span className={cormorant.className}>{pkg.price}</span>
                </p>

                <div className="w-full h-[1px] bg-[#efe9e2] my-8" />

                <ul className="space-y-4">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[13px] leading-6 text-[#5c514b]/80"
                    >
                      <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-[#bc9b65]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-10 inline-flex items-center justify-center w-full py-4 text-[11px] uppercase tracking-[0.3em] transition duration-300 ${
                    pkg.highlight
                      ? "bg-[#bc9b65] text-white hover:opacity-90"
                      : "border border-[#e8dfd4] text-[#8b7458] hover:bg-[#faf6f1]"
                  }`}
                >
                  Inquire →
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* TREAT PACKAGE ADD-ON */}
      <section className="bg-[#f7f3ee] overflow-hidden">
        <div className="px-6 sm:px-8 lg:px-12 pt-16 pb-10 text-center">
          <AnimatedSection>
            <p className="uppercase tracking-[0.3em] text-[10px] text-[#2f2622]">Brides Right Hand</p>
            <div className="flex items-center justify-center gap-4 mt-3">
              <div className="w-16 h-[1px] bg-[#d9cbb8]" />
              <p className="uppercase tracking-[0.35em] text-[10px] text-[#3f352f]">Wedding Concierge</p>
              <div className="w-16 h-[1px] bg-[#d9cbb8]" />
            </div>
            <h2 className={`${cormorant.className} text-[40px] sm:text-[56px] leading-[1.05] text-[#1f1713] mt-6`}>
              TREAT PACKAGE
              <span className="block mt-1">ADD-ON</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-16 h-[1px] bg-[#ccb28a]" />
              <span className="text-[#c1a06d] text-lg">♥</span>
              <div className="w-16 h-[1px] bg-[#ccb28a]" />
            </div>
            <p className={`${allura.className} text-[#c1a06d] text-[28px] sm:text-[40px] mt-4`}>
              A sweet touch for your bridal party
            </p>
            <p className="mt-4 uppercase tracking-[0.2em] text-[11px] leading-6 text-[#2d2521] max-w-2xl mx-auto">
              Add this treat package to any of our wedding concierge services.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <motion.div
            className="relative w-full h-[420px] sm:h-[520px] overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1.05, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image src="/addons.png" alt="Treat Package" fill className="object-cover" />
          </motion.div>
        </AnimatedSection>

        <div className="px-6 sm:px-8 lg:px-12 bg-[#f5f1ec] py-5">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🍪", title: "Chocolate Chip Cookies" },
              { icon: "🧇", title: "Stroop Waffles" },
              { icon: "💧", title: "Designer Waters" },
              { icon: "🎁", title: "Ready to Enjoy" },
            ].map((item) => (
              <AnimatedSection key={item.title}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full border border-[#ccb28a] flex items-center justify-center text-[22px] text-[#bc9b65]">
                    {item.icon}
                  </div>
                  <p className="mt-4 uppercase tracking-[0.15em] text-[11px] leading-5 text-[#2d2521]">{item.title}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto border border-[#ccb28a] mt-14 px-6 py-8 text-center bg-[#faf7f2] relative">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#f5f1ec] px-3 text-[#bc9b65] text-lg">♥</div>
              <p className={`${cormorant.className} text-[22px] sm:text-[28px] leading-[1.4] text-[#2d2521]`}>
                This Treat Package is an <span className="text-[#bc9b65]">add-on</span> available with any concierge service.
              </p>
              <p className={`${allura.className} text-[#bc9b65] text-[28px] mt-4`}>
                Because every detail matters.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="bg-black py-8 px-6 text-center">
          <p className={`${cormorant.className} text-white text-[22px] sm:text-[30px]`}>
            ADD A SWEET TOUCH TO YOUR CELEBRATION.
          </p>
          <p className="mt-2 uppercase tracking-[0.2em] text-[10px] text-[#d6c2a1]">
            Inquire at bridesrighthand.com
          </p>
        </div>
      </section>

      {/* CUSTOM CTA */}
      <section className="px-6 sm:px-8 lg:px-12 py-28 bg-[#fcfaf7]">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#b69a72]">
              Something More Custom?
            </p>
            <h2 className={`${cormorant.className} mt-5 text-[46px] sm:text-[58px] text-[#433631] leading-tight`}>
              Let's build something
              <span className={`${allura.className} text-[#bc9b65] ml-3`}>just for you</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-[15px] leading-7 text-[#5c514b]/75">
              No two weddings are the same. If you'd like a fully tailored experience, we'd love to talk.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center mt-10 bg-[#bc9b65] text-white px-10 py-4 text-[11px] uppercase tracking-[0.3em] shadow-[0_10px_25px_rgba(188,149,94,0.18)] hover:opacity-90 transition"
            >
              Inquire For A Custom Quote →
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
