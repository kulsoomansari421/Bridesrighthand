import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./components/AnimatedSection";
import {
  Cormorant_Garamond,
  Montserrat,
  Allura,
  Bodoni_Moda,
} from "next/font/google";
import { Star } from "lucide-react";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Your Right Hand on Your Wedding Day | BridesRight",
  description:
    "A luxury bridal concierge service offering calm, beautiful support, thoughtful vendor coordination, and seamless wedding day care.",
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

const testimonials = [
  {
    quote:
      "I genuinely couldn’t have imagined our day without her. Calm, organized, and so thoughtful.",
    
  },
  {
    quote:
      "Every detail anticipated before I even knew I needed it. I was able to fully savor my wedding day.",
    
  },
  {
    quote:
      "The most thoughtful, calming presence on the most important day of my life.",
  
  },
];

const features = [
  {
    title: "Personalized Support",
    description:
      "Every wedding is different, and your support should be too. We tailor our services to fit your vision, priorities, and needs.",
  },
  {
    title: "Calm Under Pressure",
    description:
      "From timelines to unexpected moments, we handle the moving pieces quietly and professionally so you can stay present.",
  },
  {
    title: "Detail-Focused Care",
    description:
      "We believe the little things matter. Thoughtful preparation and attention to detail help create a seamless experience.",
  },
  {
    title: "Peace of Mind",
    description:
      "You deserve more than coordination — you deserve to fully experience your day knowing someone is looking out for you.",
  },
];

export default function Home() {
  return (
    <main className={`${montserrat.className} bg-[#f5ede6] overflow-hidden`}>
      
      {/* HERO */}
  {/* HERO */}
  <section className="relative min-h-[74vh] overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src="/bride.png"
      alt="Luxury bridal concierge supporting the bride"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-[#f7eee5]/80" />
  </div>

  {/* Hero content */}
  <div className="relative z-10 mx-auto flex min-h-[74vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-12 lg:py-24">
    <div className="max-w-3xl text-center lg:text-left">
      <p className="mb-5 text-[10px] uppercase tracking-[0.42em] text-[#8f6c41] sm:mb-6 sm:text-[11px]">
       Bride’s Right Hand
<span className="block">Wedding Concierge & Bridal Support</span>
      </p>

      <h1 className={`${bodoni.className} text-[clamp(3rem,9vw,5.75rem)] leading-[0.95] text-[#453630]`}>
        Your Right Hand
      </h1>

      <span className={`${allura.className} mt-2 block text-[clamp(2.6rem,8vw,4.25rem)] text-[#9a7746]`}>
        on your wedding day
      </span>

      <p className="mx-auto mt-8 max-w-xl text-[15px] leading-8 text-[#4a3f39] lg:mx-0">
        Your wedding day should be filled with moments, not management. We provide thoughtful support behind the scenes so you can stay present, feel cared for, and truly enjoy being the bride.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
        <Link
          href="/contact"
          className="inline-flex h-[52px] items-center justify-center bg-[#a67f4a] px-8 text-[10px] uppercase tracking-[0.26em] text-white shadow-xl transition hover:opacity-90 sm:h-[56px] sm:px-10 sm:text-[11px]"
        >
          Book a consultation
        </Link>

        <Link
          href="/services"
          className="inline-flex h-[52px] items-center justify-center border border-[#d7c6b3] px-8 text-[10px] uppercase tracking-[0.26em] text-[#5d4d45] transition hover:bg-[#f3ece4] sm:h-[56px] sm:px-10 sm:text-[11px]"
        >
          Explore services
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* QUOTE */}
      <section className="bg-[#f5eee8] px-4 py-20 text-center sm:px-6 sm:py-28">
        <p className="text-[10px] uppercase tracking-[0.45em] text-[#8f6c41]">
          A note to the bride
        </p>

        <p
          className={`${bodoni.className} mx-auto mt-8 max-w-4xl text-[clamp(2rem,5vw,3rem)] font-[400] italic leading-[1.45] text-[#473b35]`}
        >
          “You’ve spent months planning the most beautiful day of your life.
          Now let someone hold it gently, so you can simply live it.”
        </p>

        <div className="relative mx-auto mt-10 h-px w-24 bg-[#d8c3a2]">
          <span className="absolute left-1/2 -top-2 -translate-x-1/2 text-[#b38a53]">
            ✦
          </span>
        </div>
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
      
      
      

      {/* FEATURES */}
      <section className="bg-[#f5ede6] px-4 py-20 sm:px-6 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          
         <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
  <Image
    src="/whychooseus.jpeg"
    alt="Bride enjoying her wedding day with concierge support"
    width={800}
    height={1000}
    className="h-full w-full object-cover transition duration-700 hover:scale-105"
  />
</div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#8f6c41]">
              Why Brides Choose Us
            </p>

            <h2 className={`${bodoni.className} mt-5 text-[clamp(2.3rem,6vw,3.25rem)] leading-[1.05] text-[#44352f]`}>
              Creating calm behind the scenes so you can enjoy 
            </h2>

            <span
              className={`${allura.className} mt-2 block text-[clamp(2rem,5vw,2.75rem)] text-[#c7a06a]`}
            >
              every moment.
            </span>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
  {features.map((feature) => (
    <div
      key={feature.title}
      className="rounded-[2rem] border border-[#eadfd1] bg-[#fbf7f2] p-7 transition-all duration-300 hover:shadow-xl"
    >
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c3a5] text-[#bc9b65]">
        ✦
      </div>

      <h3
        className={`${bodoni.className} text-[clamp(1.5rem,4vw,1.75rem)] text-[#453630]`}
      >
        {feature.title}
      </h3>

      <p className="mt-4 text-[14px] leading-7 text-[#72645c]">
        {feature.description}
      </p>
    </div>
  ))}

            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#f7ece8] px-4 py-20 sm:px-6 lg:px-12 lg:py-28">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#c0a178]">
            From Our Brides
          </p>

          <span
            className={`${allura.className} mt-3 block text-[42px] text-[#c6a06b]`}
          >
            love notes
          </span>

          <h2 className={`${bodoni.className} text-[clamp(2.5rem,7vw,3.5rem)] text-[#43342f]`}>
            Love Notes
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative rounded-[2rem] border border-[#ebdfd3] bg-[#fcf8f5] p-8 shadow-[0_20px_60px_rgba(17,15,14,0.05)] sm:p-10"
            >
              <div className="mb-6 flex gap-1 text-[#c8a26d]">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>

              <p
                className={`${bodoni.className} text-[clamp(1.4rem,4vw,1.75rem)] italic leading-[1.5] text-[#5a4a44]`}
              >
                “{item.quote}”
              </p>

              <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-[#9b7c4f]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      

      {/* GALLERY */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {[
          "photo-1525258946800-98cfd641d0de",
          "photo-1511285560929-80b456fea0bc",
          "photo-1519225421980-715cb0215aed",
          "photo-1515934751635-c81c6bc9a2d8",
        ].map((img, i) => (
          <div key={i} className="relative h-[240px] overflow-hidden sm:h-[280px] md:h-[340px]">
            <Image
              src={`https://images.unsplash.com/${img}?q=80&w=1200&auto=format&fit=crop`}
              alt="Wedding gallery"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f5eee8] px-4 py-20 text-center sm:px-6 sm:py-28 lg:py-32">
        <p className="text-[10px] uppercase tracking-[0.45em] text-[#8f6c41]">
          Ready When You Are
        </p>

        <h2 className={`${bodoni.className} mt-6 text-[clamp(2.6rem,7vw,3.75rem)] leading-[1.1] text-[#2f2522]`}>
          Let’s make your day
        </h2>

        <span
          className={`${allura.className} mt-2 block text-[clamp(3rem,8vw,4.2rem)] text-[#9a7746]`}
        >
          effortless
        </span>

        <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-8 text-[#5b4d46]">
          Reach out for a complimentary consultation. We’ll talk through your
          vision, your priorities, and how we can hold the day for you.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex h-[56px] items-center justify-center bg-[#a67f4a] px-12 text-[11px] uppercase tracking-[0.3em] text-white shadow-xl transition hover:opacity-90"
        >
          Inquire now
        </Link>
      </section>
    </main>
  );
}