
import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import { Cormorant_Garamond, Montserrat, Allura } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollZoomImage from "../components/ScrollZoomImage";

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

export const metadata = {
  title: "Wedding Services | Luxury Bridal Concierge",
  description:
    "Explore luxury bridal concierge packages crafted to give brides peace, presence, and support throughout their wedding day.",
};

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

export default function ServicesPage() {
  return (
    <div className={`${montserrat.className} bg-[#fdfaf7] overflow-hidden`}>
      
      {/* HERO */}
      <section className="px-4 pb-16 pt-20 sm:px-6 lg:px-12 lg:pb-20 lg:pt-24">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.45em] text-[#b69a72]">
              Services & Pricing
            </p>

            <h1
              className={`${cormorant.className} mt-5 text-[clamp(2.5rem,7vw,4rem)] leading-[0.95] text-[#433631]`}
            >
              Choose your
              <span
                className={`${allura.className} block mt-3 text-[clamp(2.75rem,8vw,4.75rem)] text-[#bc9b65]`}
              >
                experience
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-[14px] leading-7 text-[#5c514b]/75 sm:text-[15px]">
              Thoughtfully tailored support for every step of your wedding journey. Every wedding is different, which is why our services are designed to meet you where you are - whether you need quiet support behind the scenes or hands-on guidance throughout the process.
              <span className="mt-4 block">Explore our curated experiences below and find the level of support that feels right for you.</span>
              <span className="mt-4 block">Don’t see exactly what you need? We understand every wedding is unique. Reach out and together we can create a custom experience tailored specifically to your vision and priorities.</span>
            </p>
          </div>
        </AnimatedSection>
      </section>
      <section className="mb-16 px-4 sm:px-6 lg:px-12 lg:mb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem]">
          <Image
            src="/addon.jpeg"
            alt="Bridal concierge support during wedding day"
            width={1920}
            height={1000}
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      {/* PACKAGES */}
      <section className="px-4 pb-20 sm:px-6 lg:px-12 lg:pb-24">
        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3">

          {packages.map((pkg) => (
            <AnimatedSection key={pkg.title}>
              <div
                className={`relative h-full rounded-2xl border bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-1 lg:p-10 ${
                  pkg.highlight
                    ? "border-[#bc9b65]"
                    : "border-[#ede7df]"
                }`}
              >
                {/* Badge */}
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

                <h3
                  className={`${cormorant.className} mt-4 text-[clamp(2rem,5vw,2.4rem)] leading-tight text-[#433631]`}
                >
                  {pkg.title}
                </h3>

                <p className="mt-6 text-[clamp(2.2rem,6vw,2.6rem)] leading-none text-[#bc9b65]">
                  <span className={cormorant.className}>{pkg.price}</span>
                </p>

                <div className="my-8 h-px w-full bg-[#efe9e2]" />

                <ul className="space-y-4">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[13px] leading-6 text-[#5c514b]/80"
                    >
                      <span className="mt-2.25 h-1.25 w-1.25 rounded-full bg-[#bc9b65]" />
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

      {/* ADD ONS
      <section className="bg-[#f9efeb] px-6 sm:px-8 lg:px-12 py-28">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">

            <p className="text-[10px] uppercase tracking-[0.45em] text-[#b69a72]">
              Make It Yours
            </p>

            <p
              className={`${allura.className} text-[#bc9b65] text-[40px] mt-3`}
            >
              thoughtful additions
            </p>

            <h2
              className={`${cormorant.className} text-[48px] sm:text-[58px] text-[#433631] leading-none`}
            >
              Add-Ons
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-[#5c514b]/75">
              Small luxuries that make your day even more uniquely yours.
            </p>

            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="w-16 h-[1px] bg-[#dccfc4]" />
              <div className="w-2 h-2 rounded-full bg-[#bc9b65]" />
              <div className="w-16 h-[1px] bg-[#dccfc4]" />
            </div>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 mt-16">
          {addons.map((addon) => (
            <AnimatedSection key={addon.title}>
              <div className="bg-white p-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
                
                <div className="w-10 h-10 mx-auto rounded-full bg-[#f7e3df] flex items-center justify-center text-[#bc9b65] text-xl">
                  +
                </div>

                <h3
                  className={`${cormorant.className} mt-6 text-[28px] text-[#433631]`}
                >
                  {addon.title}
                </h3>

                <p className="mt-3 text-[#bc9b65] text-[24px]">
                  <span className={cormorant.className}>{addon.price}</span>
                </p>

                <p className="mt-5 text-[13px] leading-6 text-[#5c514b]/75">
                  {addon.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section> */}
{/* TREAT PACKAGE ADD-ON */}













      {/* CUSTOM CTA */}
      <section className="bg-[#fcfaf7] px-4 py-20 sm:px-6 lg:px-12 lg:py-28">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#b69a72]">
              Something More Custom?
            </p>

            <h2
              className={`${cormorant.className} mt-5 text-[clamp(2.5rem,7vw,3.6rem)] text-[#433631] leading-tight`}
            >
              Let's build something
              <span
                className={`${allura.className} text-[#bc9b65] ml-3`}
              >
                just for you
              </span>
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-[15px] leading-7 text-[#5c514b]/75">
              No two weddings are the same. If you'd like a fully tailored
              experience, we'd love to talk.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center mt-10 bg-[#bc9b65] px-8 py-4 text-[10px] uppercase tracking-[0.28em] text-white shadow-[0_10px_25px_rgba(188,149,94,0.18)] transition hover:opacity-90 sm:px-10 sm:text-[11px]"
            >
              Inquire For A Custom Quote →
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}