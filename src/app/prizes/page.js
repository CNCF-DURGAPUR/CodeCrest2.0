"use client";

import Image from "next/image";
import TextType from "../../ui/TextType";
import { motion } from "motion/react";
import Dock from "../Dock";

export default function PrizesPage() {
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
          <div className="absolute -top-1/3 -left-1/3 w-2/3 h-2/3 bg-gradient-to-br from-purple-900/35 via-red-900/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>

          {/* Top-Right: Red to Purple gradient */}
          <div className="absolute -top-1/4 -right-1/4 w-2/3 h-2/3 bg-gradient-to-bl from-red-900/35 via-purple-900/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>

          {/* Bottom-Left: Green to Purple gradient */}
          <div className="absolute -bottom-1/4 -left-1/4 w-2/3 h-2/3 bg-gradient-to-tr from-green-900/15 via-purple-900/12 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>

          {/* Bottom-Right: Red to Green gradient */}
          <div className="absolute -bottom-1/3 -right-1/3 w-2/3 h-2/3 bg-gradient-to-tl from-red-900/30 via-green-900/12 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.75s', animationDuration: '4s' }}></div>

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

      {/* The Final Jackpot Section */}
      <section id="prizes" className="relative z-20 py-20 will-change-transform">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="relative text-center mb-16">
            <TextType
              text="THE MYSTRY PODIUM"
              as="h2"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight"
              style={{ fontFamily: 'ITC Benguiat Bold, serif', color: '#ef4444' }}
              typingSpeed={50}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          {/* Prize Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Beta Winner - Left */}
            <motion.div
              className="group text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <div className="relative">
                {/* Glowing background effect - Purple to Red */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-red-500 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Card */}
                <div className="relative bg-black/60 backdrop-blur-xl border border-red-700/30 rounded-2xl p-8 overflow-hidden shadow-2xl shadow-black/60 hover:scale-105 transition-transform duration-300">
                  {/* Subtle animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-red-400/10 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                  {/* Decorative ribbon badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-700 to-red-500 text-xs font-semibold text-white shadow-md">Beta Winner</div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Trophy (SVG Gold) */}
                    <div className="mb-6 flex justify-center">
                      <svg className="w-20 h-20 md:w-24 md:h-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <defs>
                          <linearGradient id="goldGradA" x1="0" x2="1">
                            <stop offset="0%" stopColor="#FFD36B" />
                            <stop offset="50%" stopColor="#FFB84D" />
                            <stop offset="100%" stopColor="#FFDA77" />
                          </linearGradient>
                        </defs>
                        <path d="M7 3h10v2a3 3 0 01-3 3H10A3 3 0 014 5V3z" fill="url(#goldGradA)" />
                        <path d="M6 8h12v2a4 4 0 01-4 4h-4a4 4 0 01-4-4V8z" fill="#E6B24A" opacity="0.9" />
                        <path d="M9 15h6v2H9v-2z" fill="#C48A23" opacity="0.9" />
                        <circle cx="12" cy="9" r="1.5" fill="#FFF6E0" opacity="0.8" />
                      </svg>
                    </div>

                    {/* Prize Amount */}
                    <div className="mb-6">
                      <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>INR 15,000*</p>
                    </div>

                    {/* Description */}
                    <p className="text-red-200/80 text-sm">+ Exciting Sponsor Rewards + Partner Benefits (TBA)</p>

                    {/* Bottom indicator */}
                    <div className="mt-6 flex justify-center">
                      <div className="w-8 h-8 rounded-full border border-red-400/50 flex items-center justify-center group-hover:border-red-300 transition-all">
                        <div className="w-2 h-2 bg-red-400 rounded-full group-hover:bg-red-300 transition-all"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Alpha Winner - Center (Featured) */}
            <motion.div
              className="group text-center md:scale-110"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <div className="relative">
                {/* Glowing background effect - Purple to Red (Brighter) */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-red-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Card */}
                <div className="relative bg-black/70 backdrop-blur-2xl border border-red-700/40 rounded-2xl p-8 overflow-hidden shadow-[0_35px_60px_rgba(0,0,0,0.6)] hover:scale-110 transition-transform duration-300">
                  {/* Subtle animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-red-400/12 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                  {/* Decorative ribbon badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-to-r from-red-800 to-red-600 text-sm font-bold text-white shadow-lg">Alpha Winner</div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Trophy (larger Gold SVG with halo) */}
                    <div className="mb-6 flex justify-center relative">
                      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-400/10 blur-3xl opacity-60"></div>
                      <svg className="w-28 h-28 md:w-32 md:h-32 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <defs>
                          <linearGradient id="goldGradB" x1="0" x2="1">
                            <stop offset="0%" stopColor="#FFE4A3" />
                            <stop offset="50%" stopColor="#FFC04D" />
                            <stop offset="100%" stopColor="#FFD86A" />
                          </linearGradient>
                        </defs>
                        <path d="M7 3h10v2a3 3 0 01-3 3H10A3 3 0 014 5V3z" fill="url(#goldGradB)" />
                        <path d="M6 8h12v2a4 4 0 01-4 4h-4a4 4 0 01-4-4V8z" fill="#F1B84A" opacity="0.95" />
                        <path d="M9 15h6v2H9v-2z" fill="#C48A23" opacity="0.95" />
                        <circle cx="12" cy="9" r="1.5" fill="#FFF7E9" opacity="0.9" />
                      </svg>
                    </div>

                    {/* Prize Amount */}
                    <div className="mb-6">
                      <p className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>INR 25,000*</p>
                    </div>

                    {/* Description */}
                    <p className="text-red-200/80 text-sm">+ Exciting Sponsor Rewards + Partner Benefits (TBA)</p>

                    {/* Bottom indicator */}
                    <div className="mt-6 flex justify-center">
                      <div className="w-8 h-8 rounded-full border border-red-400/50 flex items-center justify-center group-hover:border-red-300 transition-all">
                        <div className="w-2 h-2 bg-red-400 rounded-full group-hover:bg-red-300 transition-all"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Gamma Winner - Right */}
            <motion.div
              className="group text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <div className="relative">
                {/* Glowing background effect - Purple to Red */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-red-500 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Card */}
                <div className="relative bg-black/60 backdrop-blur-xl border border-red-700/30 rounded-2xl p-8 overflow-hidden shadow-2xl shadow-black/60 hover:scale-105 transition-transform duration-300">
                  {/* Subtle animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-red-400/10 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                  {/* Decorative ribbon badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-700 to-red-500 text-xs font-semibold text-white shadow-md">Gamma Winner</div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Trophy (SVG Gold) */}
                    <div className="mb-6 flex justify-center">
                      <svg className="w-20 h-20 md:w-24 md:h-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <defs>
                          <linearGradient id="goldGradC" x1="0" x2="1">
                            <stop offset="0%" stopColor="#FFD36B" />
                            <stop offset="50%" stopColor="#FFB84D" />
                            <stop offset="100%" stopColor="#FFDA77" />
                          </linearGradient>
                        </defs>
                        <path d="M7 3h10v2a3 3 0 01-3 3H10A3 3 0 014 5V3z" fill="url(#goldGradC)" />
                        <path d="M6 8h12v2a4 4 0 01-4 4h-4a4 4 0 01-4-4V8z" fill="#E6B24A" opacity="0.9" />
                        <path d="M9 15h6v2H9v-2z" fill="#C48A23" opacity="0.9" />
                        <circle cx="12" cy="9" r="1.5" fill="#FFF6E0" opacity="0.8" />
                      </svg>
                    </div>

                    {/* Prize Amount */}
                    <div className="mb-6">
                      <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>INR 10,000*</p>
                    </div>

                    {/* Description */}
                    <p className="text-red-200/80 text-sm">+ Exciting Sponsor Rewards + Partner Benefits (TBA)</p>

                    {/* Bottom indicator */}
                    <div className="mt-6 flex justify-center">
                      <div className="w-8 h-8 rounded-full border border-red-400/50 flex items-center justify-center group-hover:border-red-300 transition-all">
                        <div className="w-2 h-2 bg-red-400 rounded-full group-hover:bg-red-300 transition-all"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Explore All Prizes Button */}
          <div className="flex justify-center">
            <button className="px-8 py-3 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center gap-2" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
              Explore All Prizes →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
