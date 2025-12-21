"use client";

import Image from "next/image";
import TextType from "../../ui/TextType";
import { motion } from "motion/react";
import { useState } from "react";
import Dock from "../Dock";

export default function FAQPage() {
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  const dockItems = [
    { label: "Home", icon: "Home", href: "/" },
    { label: "About", icon: "About", href: "/about" },
    { label: "Prizes", icon: "Prizes", href: "/prizes" },
    { label: "Timeline", icon: "Timeline", href: "/timeline" },
    { label: "Tracks", icon: "Tracks", href: "/tracks" },
    { label: "Mentors", icon: "Mentors", href: "/team" },
    { label: "FAQ", icon: "FAQ", href: "/faq" },
  ];

  const faqs = [
    { q: "What is a Hackathon?", a: "A hackathon is an event where people collaborate intensively on software or hardware projects over a short period, typically 24–48 hours." },
    { q: "Who can participate?", a: "Students, professionals, and enthusiasts of all levels are welcome. Diversity of skills and backgrounds is encouraged." },
    { q: "How much does it cost to participate?", a: "Participation is generally free unless otherwise specified in the event details." },
    { q: "Can I submit a project I've already worked on?", a: "We encourage building something new during the event. Prior work can be used as building blocks, but the final submission should be created during the hackathon." },
    { q: "What is the maximum/minimum team size?", a: "Teams of 2–4 are ideal. Solo participation is allowed, and we will also help you form teams on-site." },
    { q: "Will hardware toolkits be available on-site?", a: "Limited hardware kits may be available depending on sponsors. You can also bring your own devices/kits." },
    { q: "What are the guidelines for the teams participating in the Hardware track?", a: "Follow safety rules, document your design, and ensure components are clearly listed. Judges may require a short demo of the prototype." },
    { q: "What will be provided for participants at the venue?", a: "Power, internet, basic refreshments, and seating will be arranged. Bring your laptops, chargers, and any special hardware you need." },
    { q: "Can I participate remotely?", a: "Remote participation depends on the specific event format. If enabled, we will share details ahead of time." },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black/40 to-black/30 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/20 via-green-800/20 to-black/40 animate-gradient-y"></div>

        {/* Stars Background */}
        <div className="absolute inset-0 opacity-100">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: Math.random() * 3 + 2 + 'px',
                height: Math.random() * 3 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: Math.random() * 0.9 + 0.5,
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            />
          ))}
        </div>

        {/* Left Wave */}
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 opacity-100 z-5">
          <Image
            src="/waves-DawnI9IY.png"
            alt="Left Wave"
            fill
            sizes="(min-width: 1024px) 18rem, (min-width: 768px) 14rem, 10rem"
            className="object-cover object-left"
            priority
          />
        </div>

        {/* Right Wave */}
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 opacity-100 transform scale-x-[-1] z-5">
          <Image
            src="/waves-DawnI9IY.png"
            alt="Right Wave"
            fill
            sizes="(min-width: 1024px) 18rem, (min-width: 768px) 14rem, 10rem"
            className="object-cover object-right"
            priority
          />
        </div>

        {/* Blended Gradient Overlay - Red, Purple, Green Mix */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top-Left: Purple to Red gradient */}
          <div className="absolute -top-1/3 -left-1/3 w-2/3 h-2/3 hidden md:block bg-gradient-to-br from-purple-900/35 via-red-900/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>

          {/* Top-Right: Red to Purple gradient */}
          <div className="absolute -top-1/4 -right-1/4 w-2/3 h-2/3 hidden md:block bg-gradient-to-bl from-red-900/35 via-purple-900/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>

          {/* Bottom-Left: Green to Purple gradient */}
          <div className="absolute -bottom-1/4 -left-1/4 w-2/3 h-2/3 hidden md:block bg-gradient-to-tr from-green-900/15 via-purple-900/12 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>

          {/* Bottom-Right: Red to Green gradient */}
          <div className="absolute -bottom-1/3 -right-1/3 w-2/3 h-2/3 hidden md:block bg-gradient-to-tl from-red-900/30 via-green-900/12 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.75s', animationDuration: '4s' }}></div>

          {/* Center: All colors mixed */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/20 via-red-900/25 via-green-900/10 to-purple-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
        </div>
      </div>

      {/* Dock Navigation - Bottom Center */}
      <Dock
        items={dockItems.map((item) => ({
          ...item,
          onClick: () => {
            if (item.href.startsWith("#")) {
              const element = document.querySelector(item.href);
              element?.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = item.href;
            }
          },
        }))}
      />

      {/* FAQs Section - Space Theme */}
      <section id="faqs" className="relative z-20 py-20">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section header */}
          <div className="relative text-center mb-8">
            <TextType
              text="FAQs"
              as="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight"
              style={{ fontFamily: 'ITC Benguiat Bold, serif', color: '#ef4444' }}
              typingSpeed={50}
              showCursor={true}
              cursorCharacter="|"
            />
            <p className="mt-6 max-w-3xl mx-auto text-red-200/90">
              It doesn&apos;t matter if you are a beginner or a seasoned hacker; we&apos;ve got you covered. Our FAQs will solve most of your doubts and queries.
            </p>
          </div>

          {/* Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((item, idx) => {
              const open = faqOpenIndex === idx;
              return (
                <motion.div
                  key={idx}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: false, margin: "-100px" }}
                >
                  {/* Glowing background effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-900/30 via-purple-900/30 to-red-900/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="relative bg-red-900/20 border border-red-500/40 rounded-2xl overflow-hidden backdrop-blur-sm">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-red-600/20 transition-all duration-300"
                      onClick={() => setFaqOpenIndex(open ? null : idx)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${idx}`}
                    >
                      <span className="text-red-300 font-bold text-lg" style={{ fontFamily: 'ITC Benguiat Bold, serif', fontWeight: '900' }}>{item.q}</span>
                      <motion.span
                        className="shrink-0 w-8 h-8 rounded-full border-2 border-red-500/60 flex items-center justify-center text-red-300 font-bold"
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ fontFamily: 'ITC Benguiat Bold, serif' }}
                      >
                        {open ? "−" : "+"}
                      </motion.span>
                    </button>
                    {open && (
                      <motion.div
                        id={`faq-panel-${idx}`}
                        className="px-6 pb-5 text-red-200/80 border-t border-red-500/20 text-base leading-relaxed"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ fontFamily: 'ITC Benguiat Bold, serif', fontWeight: '600' }}
                      >
                        {item.a}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
