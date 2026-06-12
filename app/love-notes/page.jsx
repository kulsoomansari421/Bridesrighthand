import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";

export const metadata = {
  title: "Love Notes | Bridal Testimonials",
  description:
    "Read emotional, elegant testimonials from brides who felt supported, calm, and beautifully cared for on their wedding day.",
  openGraph: {
    title: "Love Notes | Bridal Testimonials",
    description:
      "Read emotional, elegant testimonials from brides who felt supported, calm, and beautifully cared for on their wedding day.",
    url: "https://www.bridesrighthand.com/love-notes",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1500&q=80",
        width: 1500,
        height: 1000,
        alt: "Wedding testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const testimonials = [
  {
    name: "Amelia & Noah",
    quote:
      "Christine made our wedding day feel effortless. She handled every challenge with calm confidence and let us stay fully present together.",
  },
  {
    name: "Priya & Liam",
    quote:
      "Her quiet professionalism and attention to detail made our celebration feel luxurious and seamless. We couldn’t have done it without her.",
  },
  {
    name: "Sofia & Ethan",
    quote:
      "From vendor coordination to last-minute adjustments, she was our calming force. The day was beautiful, peaceful, and unforgettable.",
  },
];

export default function LoveNotesPage() {
  return (
    <div className="overflow-hidden px-6 py-16 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(143,117,119,0.18),transparent_35%)] opacity-90 pointer-events-none" />
        <AnimatedSection className="relative rounded-[2rem] border border-black/5 bg-[#fff9f3] p-10 shadow-[0_30px_80px_rgba(17,15,14,0.05)]">
          <SectionHeading
            eyebrow="Love notes"
            title="Words from brides who felt calm, cared for, and beautifully supported."
            description="These heartfelt stories reflect the luxury, warmth, and quiet confidence Christine brings to every wedding day."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="group rounded-[2rem] border border-black/5 bg-white/95 p-8 shadow-[0_20px_60px_rgba(17,15,14,0.05)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(17,15,14,0.09)]"
              >
                <div className="rounded-3xl border border-gold/15 bg-[#f7efe4] p-5 text-5xl leading-none text-gold/90">“</div>
                <p className="mt-6 text-base leading-8 text-charcoal/85">{item.quote}</p>
                <p className="mt-6 font-semibold text-charcoal">{item.name}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] border border-black/5 bg-white/95 p-8 text-center shadow-[0_20px_60px_rgba(17,15,14,0.05)]">
            <p className="text-sm uppercase tracking-[0.32em] text-[#8d7288]">Future moments</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal">
              A quieter, more elegant bridal experience begins with thoughtful support.
            </h2>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/services" className="btn-secondary">
                Discover services
              </Link>
              <Link href="/" className="btn-primary">
                Back to home
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
