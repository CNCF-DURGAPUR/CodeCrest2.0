"use client";

import React from "react";
import MapCard from "./MapCard";
import TextType from "../../ui/TextType";

const VenueSection = () => {
  return (
    <section id="venue" className="relative z-20 py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="relative text-center mb-16">
          <TextType
            text="THE VENUE"
            as="h2"
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight"
            style={{ fontFamily: "ITC Benguiat Bold, serif", color: "#ef4444" }}
            typingSpeed={50}
            showCursor={true}
            cursorCharacter="|"
          />
          <p className="mt-6 max-w-3xl mx-auto text-red-200/80 text-lg">
            Where the portal opens. Join us at the epicenter of innovation.
          </p>
        </div>

        {/* Map Card */}
        <div className="w-full flex justify-center">
          <MapCard />
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none -z-10"></div>
    </section>
  );
};

export default VenueSection;
