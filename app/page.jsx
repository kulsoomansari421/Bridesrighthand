import Link from "next/link";
import Image from "next/image";
import ImageSlider from "./components/ImageSlider";
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
    label: "The Essentials",
    title: "Wedding-Day Concierge",
    price: "$1,000",
    features: [
      "Pre-wedding consultation",
      "Customized wedding-day timeline",
      "Vendor confirmations leading up to the day",
      "Up to 8 hours onsite",
      "Personal bridal assistant",
    ],
  },
  {
    label: "Most Loved",
    title: "Extended Concierge Experience",
    price: "$1,300",
    features: [
      "Up to 10 hours onsite",
      "Rehearsal coordination",
      "Unlimited communication 2 weeks prior",
      "Everything in Wedding-Day Concierge",
    ],
  },
  {
    label: "The Full Experience",
    title: "Full Bridal Support",
    price: "$1,800",
    features: [
      "Up to 12 hours onsite",
      "Vendor coordination 30 days prior",
      "Setup assistance",
      "Rehearsal attendance",
    ],
  },
];

const testimonials = [
  {
    quote:
      "I genuinely couldn’t have imagined our day without her. Calm, organized, and so thoughtful.",
    name: "Spring Wedding, 2025",
  },
  {
    quote:
      "Every detail anticipated before I even knew I needed it. I was able to fully savor my wedding day.",
    name: "Garden Ceremony, 2024",
  },
  {
    quote:
      "The most thoughtful, calming presence on the most important day of my life.",
    name: "Vineyard Wedding, 2023",
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
      <section className="bg-[#f5eee8] px-4 py-20 sm:px-6 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#8f6c41]">
            Our Packages
          </p>

          <h2 className={`${bodoni.className} mt-5 text-[clamp(2.5rem,7vw,3.5rem)] text-[#44352f]`}>
            Curated For Every Bride
          </h2>

          <p className="mt-6 text-[15px] leading-8 text-[#5b4d46]">
            Three thoughtfully designed experiences each crafted to give you
            back the one thing money usually cannot buy: your wedding day.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative border border-[#eee2d5] bg-white p-8 sm:p-10 lg:p-12 ${
                index === 1
                  ? "lg:scale-[1.03] shadow-[0_20px_80px_rgba(17,15,14,0.08)]"
                  : "shadow-[0_10px_40px_rgba(17,15,14,0.04)]"
              }`}
            >
              {index === 1 && (
                <div className="absolute right-0 top-0 bg-[#a67f4a] px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-white">
                  Most Loved
                </div>
              )}

              <p className="text-[10px] uppercase tracking-[0.35em] text-[#8f6c41]">
                {pkg.label}
              </p>

              <h3
                className={`${bodoni.className} mt-5 text-[clamp(2rem,5vw,2.6rem)] leading-[1.1] text-[#453630]`}
              >
                {pkg.title}
              </h3>

              <p className="mt-7 text-[34px] font-light text-[#9a7746]">
                {pkg.price}
              </p>

              <ul className="mt-10 space-y-4">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[14px] leading-7 text-[#4f433d]"
                  >
                    <span className="mt-[12px] h-[6px] w-[6px] rounded-full bg-[#9a7746]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-12 inline-flex text-[10px] uppercase tracking-[0.3em] text-[#7f6240] hover:text-[#5f4c37]"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#f5ede6] px-4 py-20 sm:px-6 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          
          <div className="relative">
            <ImageSlider />
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
              {[
                " Personalized Support",
                " Calm Under Pressure",
                "Detail-Focused Care",
                "Peace of Mind",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[2rem] border border-[#eadfd1] bg-[#fbf7f2] p-7"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c3a5] text-[#bc9b65]">
                    ✦
                  </div>

                  <h3 className={`${bodoni.className} text-[clamp(1.5rem,4vw,1.75rem)] text-[#453630]`}>
                    {item}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-[#72645c]">
  You deserve more than coordination — you deserve to fully experience your day knowing someone is looking out for you.                 </p>
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