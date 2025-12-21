"use client";

import Image from "next/image";
import TextType from "../../ui/TextType";
import Dock from "../Dock";

export default function TracksPage() {
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

      {/* Game Zones Section */}
      <section id="game-zones" className="relative z-20 py-20 will-change-transform">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="relative text-center mb-16">
            <TextType
              text="ADVENTURE TRACKS"
              as="h2"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight"
              style={{ fontFamily: 'ITC Benguiat Bold, serif', color: '#ef4444' }}
              typingSpeed={50}
              showCursor={true}
              cursorCharacter="|"
            />
            <p className="mt-6 max-w-3xl mx-auto text-red-200/80">
              Choose your track and showcase your skills across multiple domains of innovation
            </p>
          </div>

          {/* Game Zones Grid - Transparent */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full mx-auto">
            {/* AI & ML */}
            <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110">
              <h3 className="text-4xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'Merriweather, serif', fontWeight: '900', backgroundImage: 'linear-gradient(120deg, rgba(239, 68, 68, 0) 40%, rgba(239, 68, 68, 1) 50%, rgba(239, 68, 68, 0) 60%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextStroke: '1.5px rgba(239, 68, 68, 0.6)', color: 'transparent', textShadow: '0 0 15px rgba(239, 68, 68, 0.4)' }}>AI & ML</h3>
              <p className="text-base leading-relaxed text-red-200/70" style={{ fontFamily: 'Merriweather, serif' }}>
                Develop AI/ML solutions for automation, insights, and smarter decision-making processes.
              </p>
            </div>

            {/* Blockchain & Web3 */}
            <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110">
              <h3 className="text-4xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'Merriweather, serif', fontWeight: '900', backgroundImage: 'linear-gradient(120deg, rgba(239, 68, 68, 0) 40%, rgba(239, 68, 68, 1) 50%, rgba(239, 68, 68, 0) 60%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextStroke: '1.5px rgba(239, 68, 68, 0.6)', color: 'transparent', textShadow: '0 0 15px rgba(239, 68, 68, 0.4)' }}>Blockchain & Web3</h3>
              <p className="text-base leading-relaxed text-red-200/70" style={{ fontFamily: 'Merriweather, serif' }}>
                Create decentralized applications promoting security, transparency, and user empowerment.
              </p>
            </div>

            {/* Web & App Dev */}
            <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110">
              <h3 className="text-4xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'Merriweather, serif', fontWeight: '900', backgroundImage: 'linear-gradient(120deg, rgba(239, 68, 68, 0) 40%, rgba(239, 68, 68, 1) 50%, rgba(239, 68, 68, 0) 60%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextStroke: '1.5px rgba(239, 68, 68, 0.6)', color: 'transparent', textShadow: '0 0 15px rgba(239, 68, 68, 0.4)' }}>Web & App Dev</h3>
              <p className="text-base leading-relaxed text-red-200/70" style={{ fontFamily: 'Merriweather, serif' }}>
                Build user-friendly platforms for seamless interactions and digital solutions.
              </p>
            </div>

            {/* AR & VR */}
            <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110">
              <h3 className="text-4xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'Merriweather, serif', fontWeight: '900', backgroundImage: 'linear-gradient(120deg, rgba(239, 68, 68, 0) 40%, rgba(239, 68, 68, 1) 50%, rgba(239, 68, 68, 0) 60%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextStroke: '1.5px rgba(239, 68, 68, 0.6)', color: 'transparent', textShadow: '0 0 15px rgba(239, 68, 68, 0.4)' }}>AR & VR</h3>
              <p className="text-base leading-relaxed text-red-200/70" style={{ fontFamily: 'Merriweather, serif' }}>
                Develop immersive experiences enhancing education, training, and entertainment applications.
              </p>
            </div>

            {/* Med Tech */}
            <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110">
              <h3 className="text-4xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'Merriweather, serif', fontWeight: '900', backgroundImage: 'linear-gradient(120deg, rgba(239, 68, 68, 0) 40%, rgba(239, 68, 68, 1) 50%, rgba(239, 68, 68, 0) 60%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextStroke: '1.5px rgba(239, 68, 68, 0.6)', color: 'transparent', textShadow: '0 0 15px rgba(239, 68, 68, 0.4)' }}>Med Tech</h3>
              <p className="text-base leading-relaxed text-red-200/70" style={{ fontFamily: 'Merriweather, serif' }}>
                Design technology improving healthcare delivery, diagnosis, and patient management.
              </p>
            </div>

            {/* Open Innovation */}
            <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110">
              <h3 className="text-4xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'Merriweather, serif', fontWeight: '900', backgroundImage: 'linear-gradient(120deg, rgba(239, 68, 68, 0) 40%, rgba(239, 68, 68, 1) 50%, rgba(239, 68, 68, 0) 60%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextStroke: '1.5px rgba(239, 68, 68, 0.6)', color: 'transparent', textShadow: '0 0 15px rgba(239, 68, 68, 0.4)' }}>Open Innovation</h3>
              <p className="text-base leading-relaxed text-red-200/70" style={{ fontFamily: 'Merriweather, serif' }}>
                Create collaborative solutions addressing diverse challenges across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
