"use client";

import Image from "next/image";
import TextType from "../../ui/TextType";
import Dock from "../Dock";

export default function AboutPage() {
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
            if (item.href.startsWith("#")) {
              const element = document.querySelector(item.href);
              element?.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = item.href;
            }
          },
        }))}
      />

      {/* About Section - Space Theme */}
      <section id="about" className="relative z-20 pt-20 pb-8">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section header */}
          <div className="relative text-center mb-16">
            <TextType
              text="About Us"
              as="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight"
              style={{ fontFamily: 'ITC Benguiat Bold, serif', color: '#ef4444' }}
              typingSpeed={50}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          {/* Content with overlapping layout */}
          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-purple-500 to-red-600 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-500 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute inset-0 bg-radial-gradient from-red-500 rounded-full blur-2xl opacity-40"></div>
                <Image
                  src="/stranger-things-2827303-removebg-preview.png"
                  alt="Stranger Things"
                  width={500}
                  height={500}
                  className="relative drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>

            {/* Right side - Text (overlaps the image on larger screens) */}
            <div className="w-full lg:w-1/2 lg:-ml-20 relative z-20">
              <div className="bg-gradient-to-br from-red-900/40 via-slate-900/60 to-purple-900/40 backdrop-blur-xl border border-red-500/30 rounded-3xl p-8 md:p-10 shadow-2xl">
                <p className="text-red-200/90 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Merriweather, serif' }}>
                  <span className="text-red-300 font-bold text-xl">Cloud Native Durgapur</span> is a vibrant tech community dedicated to fostering innovation, collaboration, and learning among developers, students, and tech enthusiasts in Durgapur and beyond.
                </p>
                <p className="text-red-200/90 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Merriweather, serif' }}>
                  Our mission is to empower individuals with cutting-edge knowledge in cloud-native technologies, DevOps, open-source contributions, and modern software development practices.
                </p>
                <p className="text-red-200/90 text-lg leading-relaxed" style={{ fontFamily: 'Merriweather, serif' }}>
                  We are thrilled to present <span className="text-red-300 font-bold text-xl">CODE CRESTZ</span>, our flagship hackathon that brings together brilliant minds to solve real-world problems, build innovative solutions, and push the boundaries of technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
