"use client";

import React from "react";
import { motion } from "motion/react";

const MapCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, margin: "-100px" }}
      className="relative w-full max-w-4xl mx-auto group"
    >
      {/* Glowing background effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-600 to-red-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>

      {/* Card Container */}
      <div className="relative bg-black/80 backdrop-blur-xl border border-red-500/50 rounded-2xl overflow-hidden shadow-2xl shadow-red-900/40">
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-red-900/40 to-purple-900/40 p-4 border-b border-red-500/30 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse delay-75"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse delay-150"></div>
          </div>
          <h3
            className="text-xl font-bold text-red-100 tracking-widest"
            style={{ fontFamily: "ITC Benguiat Bold, serif" }}
          >
            HAWKINS LAB (VENUE)
          </h3>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[400px] md:h-[500px] bg-slate-900">
          {/* Overlay for "Scanning" effect */}
          <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] opacity-20"></div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.578099873674!2d87.2908773760565!3d23.54766019652033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f772081cede5e9%3A0x33fb9ccb243dfa5!2sNational%20Institute%20of%20Technology%20Durgapur!5e0!3m2!1sen!2sin!4v1709664567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "invert(90%) hue-rotate(180deg) contrast(90%)",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue Map"
            className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          ></iframe>
        </div>

        {/* Footer Info */}
        <div className="p-6 bg-gradient-to-t from-black via-black/90 to-transparent absolute bottom-0 left-0 right-0 z-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
              <h4
                className="text-2xl font-bold text-red-500 mb-1"
                style={{ fontFamily: "ITC Benguiat Bold, serif" }}
              >
                NIT DURGAPUR
              </h4>
              <p className="text-red-200/80 font-mono text-sm">
                Mahatma Gandhi Rd, A-Zone, Durgapur, West Bengal 713209
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/generic"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-red-600/20 hover:bg-red-600/40 border border-red-500 text-red-100 rounded-lg transition-all duration-300 font-bold flex items-center gap-2 group/btn"
            >
              <span>GET DIRECTIONS</span>
              <span className="group-hover/btn:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MapCard;
