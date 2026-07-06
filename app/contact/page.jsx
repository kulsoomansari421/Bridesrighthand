"use client";
import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import { useState } from "react";

import {
  Cormorant_Garamond,
  Montserrat,
  Allura,
} from "next/font/google";

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



export default function ContactPage() {

const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  date: "",
  venue: "",
  message: "",
});

const [status, setStatus] = useState("idle");
const [errorMsg, setErrorMsg] = useState("");

const handleChange = (e) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setStatus("loading");
  setErrorMsg("");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    setStatus("success");

    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      venue: "",
      message: "",
    });

  } catch (err) {
    setStatus("error");
    setErrorMsg(err.message || "Failed to send inquiry.");
  }
};


  return (
    <div className={`${montserrat.className} bg-[#f5ede6] overflow-hidden`}>

      {/* HERO */}
      <section className="px-4 pb-16 pt-20 sm:px-6 lg:px-12 lg:pb-20 lg:pt-28">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">

            <p className="text-[10px] uppercase tracking-[0.45em] text-[#8f6c41]">
              Inquire
            </p>

            <h1
              className={`${cormorant.className} mt-5 text-[clamp(2.8rem,8vw,4.5rem)] leading-[0.95] text-[#433631]`}
            >
              Let’s begin
              <span
                className={`${allura.className} block mt-3 text-[clamp(3rem,8vw,5rem)] text-[#9a7746]`}
              >
                your story
              </span>
            </h1>

            <p className="mt-8 max-w-2xl mx-auto text-[15px] sm:text-[16px] leading-8 text-[#4a3f39]/75">
              Tell us a little about your wedding day. We'll respond
              personally within 48 hours to set up a complimentary consultation.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* CONTACT SECTION */}
      {/* CONTACT SECTION */}
      <section className="px-4 pb-20 sm:px-6 lg:px-12 lg:pb-24">
  <AnimatedSection>
    <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-[#ece5dc] lg:grid-cols-[1fr_0.72fr]">

      {/* FORM */}
      <div className="bg-white p-6 sm:p-8 lg:p-12">

        <div className="mb-8">
          <h2
            className={`${cormorant.className} text-[clamp(2rem,5vw,2.35rem)] text-[#433631]`}
          >
            Tell us about your day
          </h2>

          <p className="mt-2 text-[13px] text-[#5c514b]/70">
            All fields with + are required.
          </p>
        </div>

     <form onSubmit={handleSubmit} className="space-y-6">

          {/* ROW 1 */}
          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <label className="block text-[10px] uppercase tracking-[0.32em] text-[#6f625b] mb-2">
                Your Name +
              </label>

              <input
              name="name"
value={form.name}
onChange={handleChange}
required
                type="text"
                className="h-[52px] w-full border border-[#ece5dc] bg-[#f8f5f1] px-4 text-sm outline-none transition focus:border-[#bc9b65]"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.32em] text-[#6f625b] mb-2">
                Email +
              </label>

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                type="email"
                className="h-[52px] w-full border border-[#ece5dc] bg-[#f8f5f1] px-4 text-sm outline-none transition focus:border-[#bc9b65]"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <label className="block text-[10px] uppercase tracking-[0.32em] text-[#6f625b] mb-2">
                Phone
              </label>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                className="h-[52px] w-full border border-[#ece5dc] bg-[#f8f5f1] px-4 text-sm outline-none transition focus:border-[#bc9b65]"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.32em] text-[#6f625b] mb-2">
                Wedding Date +
              </label>

              <input
              name="date"
value={form.date}
onChange={handleChange}
required
                type="date"
                className="h-[52px] w-full border border-[#ece5dc] bg-[#f8f5f1] px-4 text-sm outline-none transition focus:border-[#bc9b65]"
              />
            </div>
          </div>

          {/* VENUE */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.32em] text-[#6f625b] mb-2">
              Venue Or Location
            </label>

            <input
              name="venue"
              value={form.venue}
              onChange={handleChange} 
              type="text"
              className="h-[52px] w-full border border-[#ece5dc] bg-[#f8f5f1] px-4 text-sm outline-none transition focus:border-[#bc9b65]"
            />
          </div>

          {/* TEXTAREA */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.32em] text-[#6f625b] mb-2">
              Tell Us About Your Vision +
            </label>

            <textarea
            name="message"
value={form.message}
onChange={handleChange}
required
              rows={5}
              placeholder="Share anything you'd like — your dreams, your worries, what you hope a concierge can hold for you..."
              className="w-full resize-none border border-[#ece5dc] bg-[#f8f5f1] px-4 py-4 text-sm leading-7 outline-none transition placeholder:text-[#8d8178]/60 focus:border-[#bc9b65]"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="... disabled:opacity-50 disabled:cursor-not-allowed w-full h-[54px] bg-[#bc9b65] text-white text-[10px] uppercase tracking-[0.35em] shadow-[0_10px_25px_rgba(188,149,94,0.15)] hover:opacity-90 transition"
          disabled={status === "loading"}
          >

      {status === "loading"
  ? "Sending..."
  : "Send Inquiry →"}
          </button>
          
          {status === "error" && (
  <p className="mt-4 text-sm text-red-500">
  
{status === "error" && (
  <p className="mt-4 text-sm text-red-500">
    {errorMsg}
  </p>
)}

{status === "success" && (
  <p className="mt-4 text-sm text-green-600">
    Thank you! Your inquiry has been sent successfully.
  </p>
)}

  </p>
)}
        </form>
      </div>

      {/* SIDEBAR */}
      <div className="border-t border-[#ece5dc] bg-[#f7f5f1] lg:border-l lg:border-t-0">

        {/* QUOTE BOX */}
        <div className="border-b border-[#efe4dc] bg-[#f8ece8] p-6 sm:p-8 lg:border-l">

          <div className="text-[#bc9b65] text-xl mb-5">♡</div>

          <p
            className={`${cormorant.className} text-[clamp(1.5rem,4vw,1.8rem)] leading-[1.6] italic text-[#5d4e47]`}
          >
            "Every inquiry is read personally — never automated, never rushed."
          </p>

          <p className={`${allura.className} mt-4 text-[clamp(1.8rem,5vw,2.2rem)] text-[#bc9b65]`}>
            — with love
          </p>
        </div>

        <div className="border-b border-[#ece5dc] p-6 sm:p-8 lg:border-l">

          <div className="space-y-8">

            <div className="flex gap-4">
              <div className="text-[#bc9b65] text-base mt-1">✉</div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#9a8b81] mb-1">
                  Email
                </p>

                <p className="text-[14px] text-[#4f433d]">
                  info@briderighthand.net
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#bc9b65] text-base mt-1">☎</div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#9a8b81] mb-1">
                  Phone
                </p>

                <p className="text-[14px] text-[#4f433d]">
                  909-241-3850
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#bc9b65] text-base mt-1">⌾</div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#9a8b81] mb-1">
                  Serving
                </p>

                <p className="text-[14px] leading-6 text-[#4f433d]">
                  Available worldwide for destination weddings
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RESPONSE TIME */}
        <div className="border-b border-[#ece5dc] bg-[#faf8f5] p-6 sm:p-8 lg:border-l">

          <p className="text-[10px] uppercase tracking-[0.32em] text-[#9a8b81] mb-4">
            Response Time
          </p>

          <p className="text-[14px] leading-7 text-[#5c514b]/80">
            We respond to every inquiry within 48 hours. If your wedding
            is within the next 60 days, please mention "urgent" in your
            message.
          </p>
        </div>
      </div>
    </div>
  </AnimatedSection>
</section>


    </div>
  );
}