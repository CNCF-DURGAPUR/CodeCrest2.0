"use client";

import Image from "next/image";
import TextType from "../../ui/TextType";
import ShinyText from "../../ui/ShinyText";
import { motion } from "motion/react";
import Dock from "../Dock";

export default function TimelinePage() {
  const dockItems = [
    { label: "Home", icon: "Home", href: "/" },
    { label: "About", icon: "About", href: "/about" },
    { label: "Prizes", icon: "Prizes", href: "/prizes" },
    { label: "Timeline", icon: "Timeline", href: "/timeline" },
    { label: "Tracks", icon: "Tracks", href: "/tracks" },
    { label: "Mentors", icon: "Mentors", href: "/team" },
    { label: "FAQ", icon: "FAQ", href: "/faq" },
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
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 opacity-100 z-5 hidden md:block">
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
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 opacity-100 transform scale-x-[-1] z-5 hidden md:block">
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

      {/* Timeline Section */}
      <section id="mystry-advanture" className="relative z-20 py-20">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section header */}
          <div className="relative text-center mb-16 px-4 md:px-0">
            <TextType
              text="MYSTRY ADVANTURE"
              as="h2"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight"
              style={{ fontFamily: 'ITC Benguiat Bold, serif', color: '#ef4444' }}
              typingSpeed={50}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          {/* The Beginning */}
          <div className="relative text-center mb-20">
            <div className="flex flex-col items-center gap-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-purple-500 to-red-600 rounded-full blur-3xl opacity-60 animate-pulse hidden md:block"></div>
                <Image
                  src="/Eleven-removebg-preview.png"
                  alt="Eleven"
                  width={256}
                  height={256}
                  className="relative h-48 md:h-64 w-auto object-contain drop-shadow-lg"
                  priority
                />
              </div>
              <ShinyText
                text="The Beginning"
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: 'ITC Benguiat Bold, serif', color: '#ef4444' }}
              />
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative">


              <ul className="space-y-8 md:space-y-12">
                {/* Registration */}
                <li className="relative md:w-1/2 md:ml-auto md:pl-8">
                  <div className="md:absolute md:left-[-2.5rem] md:top-6 flex md:items-start md:justify-end">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-yellow-300 shadow-md md:translate-x-1/2"></div>
                  </div>

                  <div className="relative group bg-gradient-to-br from-neutral-900/70 to-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden ring-1 ring-neutral-800/10 hover:ring-amber-400/10">
                    {/* Glowing halo */}
                    <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-amber-400/10 to-rose-400/6 blur-3xl opacity-60 transform scale-95 group-hover:scale-100 transition-all duration-500 pointer-events-none"></div>
                    {/* Animated border overlay */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-amber-400/20 transition-colors duration-300"></div>

                    <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-amber-200 to-amber-300 bg-clip-text text-transparent">Phase 1 — Registration</h3>
                    <p className="mt-2 text-sm text-red-200/80">Open registrations, team formation, and briefings. <span className="text-xs text-gray-300">Jan 10 — Jan 20</span></p>
                  </div>
                </li>

                {/* Mentorship */}
                <li className="relative md:w-1/2 md:mr-auto md:pr-8">
                  <div className="md:absolute md:right-[-2.5rem] md:top-6 flex md:items-start md:justify-start">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-red-500 shadow-md md:-translate-x-1/2"></div>
                  </div>

                  <div className="relative group bg-gradient-to-br from-neutral-900/70 to-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden ring-1 ring-neutral-800/10 hover:ring-purple-500/10">
                    {/* Glowing halo */}
                    <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-red-400/6 blur-3xl opacity-60 transform scale-95 group-hover:scale-100 transition-all duration-500 pointer-events-none"></div>
                    {/* Animated border overlay */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-purple-500/20 transition-colors duration-300"></div>

                    <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-300 to-rose-300 bg-clip-text text-transparent">Phase 2 — Mentorship</h3>
                    <p className="mt-2 text-sm text-red-200/80">Mentor sessions, workshops, and checkpoints. <span className="text-xs text-gray-300">Jan 21 — Feb 5</span></p>
                  </div>
                </li>

                {/* Hackathon */}
                <li className="relative md:w-1/2 md:ml-auto md:pl-8">
                  <div className="md:absolute md:left-[-2.5rem] md:top-6 flex md:items-start md:justify-end">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-300 shadow-md md:translate-x-1/2"></div>
                  </div>

                  <div className="relative group bg-gradient-to-br from-neutral-900/80 to-neutral-800/70 backdrop-blur-2xl border border-neutral-700/50 rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:scale-[1.01] transition-transform duration-200 overflow-hidden ring-1 ring-neutral-800/10 hover:ring-green-400/10">
                    {/* Strong halo */}
                    <div className="absolute -inset-5 rounded-2xl bg-gradient-to-r from-green-400/10 to-emerald-300/8 blur-3xl opacity-70 transform scale-95 group-hover:scale-100 transition-all duration-500 pointer-events-none"></div>
                    {/* Animated border overlay */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-green-400/20 transition-colors duration-300"></div>

                    <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">Phase 3 — Hackathon</h3>
                    <p className="mt-2 text-sm text-red-200/80">The main event: build, demo, and iterate. <span className="text-xs text-gray-300">Feb 10 — Feb 12</span></p>
                  </div>
                </li>

                {/* Judging */}
                <li className="relative md:w-1/2 md:mr-auto md:pr-8">
                  <div className="md:absolute md:right-[-2.5rem] md:top-6 flex md:items-start md:justify-start">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-sky-400 to-indigo-400 shadow-md md:-translate-x-1/2"></div>
                  </div>

                  <div className="relative group bg-gradient-to-br from-neutral-900/70 to-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden ring-1 ring-neutral-800/10 hover:ring-sky-400/10">
                    {/* Glowing halo */}
                    <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-sky-400/10 to-indigo-400/6 blur-3xl opacity-60 transform scale-95 group-hover:scale-100 transition-all duration-500 pointer-events-none"></div>
                    {/* Animated border overlay */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-sky-400/20 transition-colors duration-300"></div>

                    <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-sky-200 to-indigo-200 bg-clip-text text-transparent">Phase 4 — Judging</h3>
                    <p className="mt-2 text-sm text-red-200/80">Judges review and scoring. <span className="text-xs text-gray-300">Feb 13 — Feb 14</span></p>
                  </div>
                </li>

                {/* Winners */}
                <li className="relative md:w-1/2 md:ml-auto md:pl-8">
                  <div className="md:absolute md:left-[-2.5rem] md:top-6 flex md:items-start md:justify-end">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-yellow-400 to-amber-300 shadow-md md:translate-x-1/2"></div>
                  </div>

                  <div className="relative group bg-gradient-to-r from-black/60 to-neutral-900/60 backdrop-blur-lg border border-neutral-700/50 rounded-2xl p-6 shadow-xl overflow-hidden ring-1 ring-neutral-800/10 hover:ring-yellow-400/10">
                    {/* Subtle halo */}
                    <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-yellow-400/8 to-amber-300/6 blur-3xl opacity-55 transform scale-98 group-hover:scale-100 transition-all duration-500 pointer-events-none"></div>
                    {/* Animated border overlay */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-yellow-400/20 transition-colors duration-300"></div>

                    <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">Phase 5 — Winners</h3>
                    <p className="mt-2 text-sm text-red-200/80">Winners announced and prize distribution. <span className="text-xs text-gray-300">Feb 15</span></p>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
