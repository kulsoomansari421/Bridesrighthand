import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { Cormorant_Garamond, Montserrat, Allura } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400","500","600","700"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const allura = Allura({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "About Christine | Luxury Bridal Concierge",
  description: "Meet Christine, the calm, experienced bridal concierge who quietly manages every detail so brides feel completely supported on their wedding day.",
};

export default function AboutPage() {
  return (
    <div className={`${montserrat.className} overflow-hidden bg-[#f5ede6]`}>

      {/* Hero / Intro Section */}
      <section className="relative flex min-h-[520px] w-full items-center justify-center px-4 sm:px-6 lg:min-h-[640px] lg:px-16">
        <img src="/aboutcover.png" alt="Bridal concierge" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff9f3cc] via-[#fff9f380] to-[#fff9f300]" />
        <div className="relative z-10 max-w-4xl text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.45em] text-[#8f6c41] mb-3">Our Story</p>
          <h1 className={`${cormorant.className} text-[clamp(2.25rem,6vw,4rem)] font-semibold leading-snug text-[#433631]`}>
            Born from love, <span className={`${allura.className} text-[#bc9b65]`}>built for brides</span>
          </h1>
          <p className="mt-6 text-[15px] sm:text-lg leading-7 text-[#4a3f39]/80 max-w-2xl mx-auto">
          Bride’s Right Hand was created from one simple truth: every bride deserves to enjoy her wedding day instead of managing it.Not the planner.
Not the host.
Not the one managing timelines, answering questions, or keeping everything on track.You deserve to be fully present — and that’s where Bride’s Right Hand comes in.
          </p>
        </div>
      </section>

      {/* First Feature Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <img src="/Bridegettingready.png" alt="Bride getting ready" className="w-full rounded-[2rem] object-cover" />
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[#8f6c41]">Why We Exist</p>
            <h2 className={`${cormorant.className} text-[clamp(1.9rem,5vw,3rem)] font-semibold text-[#433631]`}>
              The day deserves <span className={`${allura.className} text-[#bc9b65]`}>your full heart</span>
            </h2>
            <p className="text-[15px] sm:text-base leading-7 text-[#4a3f39]/80">
              Your wedding day should be filled with laughter, happy tears, quiet moments, and memories — not stress, timelines, or constant questions.Bride’s Right Hand exists so you can stay present while someone else handles the moving pieces behind the scenes.Because this day deserves your full heart, not your full attention. </p>
            <Link href="/services" className="inline-flex items-center bg-[#bc9b65] text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-[0.2em] shadow-[0_8px_20px_rgba(188,149,94,0.15)] hover:opacity-90 transition">
              See How We Help
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#faf8f5] px-4 py-20 sm:px-6 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8f6c41]">Our Values</p>
          <h2 className={`${cormorant.className} mt-3 text-[clamp(1.9rem,5vw,3rem)] font-semibold text-[#433631]`}>
            What guides us
          </h2>
        </div>
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {title:"Commitment", desc:"Your wedding day matters deeply, and we believe every detail deserves care and attention. From the first conversation to the final farewell, we remain committed to supporting you every step of the way."},
            {title:"Service", desc:"True service means anticipating needs before they become stressors. We provide thoughtful, personalized support so you can focus on being fully present throughout your day."},
            {title:"Integrity", desc:"Trust is everything. We show up with honesty, professionalism, and reliability so you can feel confident knowing your day is in capable hands."},
            {title:"Vision", desc:"Your wedding should reflect your story, style, and priorities. We work behind the scenes to help bring your vision to life while protecting the moments that matter most."},
          ].map((val) => (
            <div key={val.title} className="bg-white rounded-[2rem] p-6 shadow-[0_10px_30px_rgba(17,15,14,0.05)]">
              <h3 className="text-sm uppercase tracking-[0.3em] text-[#8d7288]">{val.title}</h3>
              <p className="mt-3 text-[14px] sm:text-base leading-6 text-[#4a3f39]/80">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[#8f6c41]">Our Mission</p>
            <h2 className={`${cormorant.className} text-[clamp(1.9rem,5vw,3rem)] font-semibold text-[#433631]`}>
             Protecting Your Peace <span className={`${allura.className} text-[#bc9b65]`}>Preserving Your Moments</span>
            </h2>
            <p className="text-[15px] sm:text-base leading-7 text-[#4a3f39]/80">
              Our mission is simple: to make sure that on the most beautiful day of your life, you’re never the one running the show. You’re the one being celebrated.
            </p>
            <p className="text-[15px] sm:text-base leading-7 text-[#4a3f39]/80">
             At Bride’s Right Hand, our mission is to provide thoughtful, personalized support that allows brides to feel calm, cared for, and fully present on one of the most important days of their lives.
We are committed to protecting the moments that matter most by managing the details behind the scenes, creating space for joy, connection, and unforgettable memories.
Because every bride deserves to experience her wedding day — not manage it.
            </p>
          </div>
          <img src="/ourmission.png" alt="Wedding details" className="w-full rounded-[2rem] object-cover"/>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#faf0eb] px-4 py-20 text-center sm:px-6 lg:px-12 lg:py-24">
        <p className="text-xs uppercase tracking-[0.35em] text-[#8f6c41]">Ready when you are</p>
        <h2 className={`${cormorant.className} mt-2 text-[clamp(1.9rem,5vw,3rem)] font-semibold text-[#433631]`}>Let’s begin a conversation</h2>
        <Link href="/contact" className="inline-flex items-center mt-6 bg-[#bc9b65] text-white px-10 py-3 rounded-full font-semibold text-sm uppercase tracking-[0.2em] shadow-[0_8px_20px_rgba(188,149,94,0.15)] hover:opacity-90 transition">
          Book a Consultation
        </Link>
      </section>

     
    </div>
  );
}