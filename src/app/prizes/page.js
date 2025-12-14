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
                <div className="relative bg-gradient-to-br from-purple-900/60 via-slate-900/70 to-red-900/40 backdrop-blur-xl border border-red-500/50 rounded-2xl p-8 overflow-hidden">
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-red-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-50"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Badge */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs font-semibold text-red-300 uppercase tracking-widest">Beta Winner</span>
                    </div>

                    {/* Trophy Icon */}
                    <div className="mb-8 text-6xl filter drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.6))' }}>👑</div>

                    {/* Prize Amount */}
                    <div className="mb-6">
                      <p className="text-4xl font-bold bg-gradient-to-r from-purple-200 via-red-300 to-red-400 bg-clip-text text-transparent group-hover:from-purple-100 group-hover:via-red-200 group-hover:to-red-300 transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>INR 15,000*</p>
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
                <div className="relative bg-gradient-to-br from-purple-900/70 via-slate-900/80 to-red-900/50 backdrop-blur-xl border border-red-500/70 rounded-2xl p-8 overflow-hidden">
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-red-400/30 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-70"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Badge */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs font-semibold text-red-300 uppercase tracking-widest">Alpha Winner</span>
                    </div>

                    {/* Trophy Icon */}
                    <div className="mb-8 text-7xl filter drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.8))' }}>👑</div>

                    {/* Prize Amount */}
                    <div className="mb-6">
                      <p className="text-5xl font-bold bg-gradient-to-r from-purple-200 via-red-300 to-red-400 bg-clip-text text-transparent group-hover:from-purple-100 group-hover:via-red-200 group-hover:to-red-300 transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>INR 25,000*</p>
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
                <div className="relative bg-gradient-to-br from-purple-900/60 via-slate-900/70 to-red-900/40 backdrop-blur-xl border border-red-500/50 rounded-2xl p-8 overflow-hidden">
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-red-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-50"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Badge */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs font-semibold text-red-300 uppercase tracking-widest">Gamma Winner</span>
                    </div>

                    {/* Trophy Icon */}
                    <div className="mb-8 text-6xl filter drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.7))' }}>👑</div>

                    {/* Prize Amount */}
                    <div className="mb-6">
                      <p className="text-4xl font-bold bg-gradient-to-r from-purple-200 via-red-300 to-red-400 bg-clip-text text-transparent group-hover:from-purple-100 group-hover:via-red-200 group-hover:to-red-300 transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>INR 10,000*</p>
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
