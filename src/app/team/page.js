"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FocusCard } from "../../ui/focus-card";
import Dock from "../Dock";
import TextType from "../../ui/TextType";
import ShinyText from "../../ui/ShinyText";


export default function MentorsJudgesPage() {

  const dockItems = [
    { label: "Home", icon: "Home", href: "/#home" },
    { label: "About", icon: "About", href: "/#about" },
    { label: "Prizes", icon: "Prizes", href: "/#prizes" },
    { label: "Timeline", icon: "Timeline", href: "/#mystry-advanture" },
    { label: "Tracks", icon: "Tracks", href: "/#game-zones" },
    { label: "Mentors", icon: "Mentors", href: "/team" },
    { label: "FAQ", icon: "FAQ", href: "/#faqs" },
  ];

  const mentors = [
    {
      description: "Mentor - Technology & Innovation",
    },
    {
      description: "Mentor - Open Source & Community",
    },
    {
      description: "Mentor - AI & Machine Learning",
    },
    {
      description: "Mentor - Full Stack Development",
    },
  ];

  const judges = [
    {
      description: "Judge - Cloud Native & DevOps",
    },
    {
      description: "Judge - Software Development",
    },
    {
      description: "Judge - Web Development",
    },
    {
      description: "Judge - Innovation & Creativity",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Base dark gradient - more professional */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950"></div>

        {/* Subtle noise texture overlay for depth */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}></div>

        {/* Cinematic Stars - fewer, more subtle */}
        <div className="absolute inset-0 opacity-60">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 2 + 0.5 + 'px',
                height: Math.random() * 2 + 0.5 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: Math.random() * 0.4 + 0.2,
                animation: `pulse ${Math.random() * 4 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Left Wave - more subtle */}
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 opacity-30 z-5">
          <Image
            src="/waves-DawnI9IY.png"
            alt="Left Wave"
            fill
            sizes="(min-width: 1024px) 18rem, (min-width: 768px) 14rem, 10rem"
            className="object-cover object-left"
            priority
          />
        </div>

        {/* Right Wave - more subtle */}
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 opacity-30 transform scale-x-[-1] z-5">
          <Image
            src="/waves-DawnI9IY.png"
            alt="Right Wave"
            fill
            sizes="(min-width: 1024px) 18rem, (min-width: 768px) 14rem, 10rem"
            className="object-cover object-right"
            priority
          />
        </div>

        {/* Professional Stranger Things Lighting - Darker, more cinematic */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top atmospheric red glow - Stranger Things signature */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-1/2 bg-gradient-to-b from-red-950/20 via-red-950/10 to-transparent blur-3xl"></div>

          {/* Subtle purple accent - left side */}
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-950/15 via-purple-950/8 to-transparent rounded-full blur-3xl" style={{ animationDuration: '8s' }}></div>

          {/* Subtle red accent - right side */}
          <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-red-950/15 via-red-950/8 to-transparent rounded-full blur-3xl" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>

          {/* Bottom red glow - creates depth */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/3 bg-gradient-to-t from-red-950/12 via-red-950/5 to-transparent blur-2xl"></div>

          {/* Vignette effect for professional look */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)'
          }}></div>
        </div>
      </div>

      {/* Dock Navigation - Bottom Center */}
      <Dock
        items={dockItems.map((item) => ({
          ...item,
          onClick: () => {
            window.location.href = item.href;
          },
        }))}
      />

      <main className="relative z-20 pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="relative text-center mb-16">
            <TextType
              text="Mentors & Judges"
              as="h2"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight"
              style={{ fontFamily: 'ITC Benguiat Bold, serif', color: '#ef4444' }}
              typingSpeed={50}
              showCursor={true}
              cursorCharacter="|"
            />
            <p className="text-red-300/80 text-lg md:text-xl" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
              Meet the experts guiding and evaluating the hackathon
            </p>
          </div>

          {/* Mentors Section */}
          <div className="mb-20">
            <div className="flex justify-center mb-12">
              <ShinyText
                text="Mentors"
                speed={5}
                hollow={true}
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
              />
            </div>
            <FocusCard cards={mentors} columns={4} />
          </div>

          {/* Judges Section */}
          <div>
            <div className="flex justify-center mb-12">
              <ShinyText
                text="Judges"
                speed={5}
                hollow={true}
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
              />
            </div>
            <FocusCard cards={judges} columns={4} />
          </div>
        </div>
      </main>
    </div>
  );
}