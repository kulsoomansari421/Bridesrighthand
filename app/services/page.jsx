
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
    price: "$1,200",
    features: [
      "Perfect for the bride who has planned her wedding but wants professional support to ensure everything runs smoothly.",
      "Bridal consultation, service assessment, and planning and vendor checklist",
      "Customized wedding-day timeline",
      "Rehearsal attendance and coordination",
      "Vendor confirmations leading up to the wedding",
      "Coverage from ceremony preparation through reception milestones",
      "Personal bridal assistant",
      "Bridal emergency kit on hand",
      "Day-of timeline management",
      "Wedding-day support and guidance",
    ],
    highlight: false,
  },
  {
    title: "Extended Concierge Experience",
    subtitle: "MOST LOVED",
    price: "$1,500",
    features: [
      "For brides who want additional planning support and trusted vendor guidance before the big day.",
      "Everything in Wedding-Day Concierge, plus:",
      "Coverage from wedding and reception set-up to reception milestones",
      "Vendor recommendations from Brides Right Hand portfolio",
      "Vendor confirmations and follow-up",
      "Unlimited communication beginning 2 weeks prior to the wedding",
      "Extended day-of timeline management",
      "Additional planning support leading up to the wedding",
    ],
    highlight: true,
  },
  {
    title: "Full Bridal Support Experience",
    subtitle: "THE FULL EXPERIENCE",
    price: "$2,200",
    features: [
      "A comprehensive concierge experience designed for brides who want a dedicated wedding partner from planning through the last dance.",
      "Everything in Extended Concierge, plus:",
      "Coverage from wedding and reception set up to Bride and Groom send off",
      "Full vendor recommendations from Brides Right Hand portfolio",
      "Vendor appointment scheduling",
      "Venue and vendor tours, tastings and trial runs",
      "Vendor coordination and communications",
      "Full rehearsal coordination and management",
      "Setup assistance",
      "Complete wedding-day management",
      "Bridal Treat Package",
      "Enhanced Bridal Emergency Kit",
      "Unlimited communication throughout the planning process",
      "Dedicated bridal concierge support from start to finish",
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

 {/* PACKAGES */}
      <section className="px-4 pb-20 sm:px-6 lg:px-12 lg:pb-24">
        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3">

          {packages.map((pkg) => (
            <AnimatedSection key={pkg.title}>
<div
  className={`relative flex flex-col h-[760px] overflow-hidden rounded-[32px] bg-white p-8 lg:p-10 ${
    pkg.highlight
      ? "border-2 border-[#bc9b65] shadow-[0_30px_80px_rgba(188,155,101,0.25)]"
      : "border border-[#ede7df] shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
  }`}
>
                {/* Badge */}
               {pkg.highlight && (
  <>
    <div className="absolute -top-0 left-1/2 -translate-x-1/2 z-50">
  <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#d6b07b] to-[#bc9b65] px-8 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white shadow-xl">
    ✦ Most Loved
  </span>
</div>

    <div className="absolute right-[-42px] top-8 rotate-45 bg-[#bc9b65] px-12 py-1 text-[9px] uppercase tracking-[0.25em] text-white">
      Best Value
    </div>
  </>
)}
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#c2b4a2]">
                  {pkg.subtitle}
                </p>

                <h3
                  className={`${cormorant.className} mt-4 text-[clamp(2rem,5vw,2.4rem)] leading-tight text-[#433631]`}
                >
                  {pkg.title}
                </h3>

               <div className="mt-8">
  <p className="text-[clamp(3rem,8vw,4rem)] leading-none text-[#bc9b65]">
    <span className={cormorant.className}>{pkg.price}</span>
  </p>

  <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#a79a8a]">
    Investment
  </p>
</div>

<div className="my-8 flex items-center gap-3">
  <div className="h-px flex-1 bg-[#efe9e2]" />
  <div className="h-2 w-2 rounded-full bg-[#bc9b65]" />
  <div className="h-px flex-1 bg-[#efe9e2]" />
</div>

         <div className="flex-1 overflow-y-auto pr-2 custom-scroll">
  <ul className="space-y-5">
  {pkg.features.map((feature) => (
    <li
      key={feature}
      className="flex items-start gap-3 text-[14px] leading-6 text-[#5c514b]"
    >
      <div className="mt-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#f6efe7] text-[#bc9b65]">
        ✓
      </div>

      <span>{feature}</span>
    </li>
  ))}
</ul>
 </div>

<Link
  href="/contact"
  className={`mt-6 inline-flex w-full items-center justify-center rounded-full py-4 text-[11px] uppercase tracking-[0.3em] ${
    pkg.highlight
      ? "bg-gradient-to-r from-[#d6b07b] to-[#bc9b65] text-white"
      : "border border-[#e8dfd4] text-[#8b7458]"
  }`}
>
  Inquire →
</Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
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