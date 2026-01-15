"use client";

import React from 'react';
import Snowfall from 'react-snowfall';

export default function SnowfallClient({ snowflakeCount = 120, className = 'fixed inset-0 pointer-events-none z-50' }) {
  return (
    <div className={className} aria-hidden>
      <Snowfall snowflakeCount={snowflakeCount} />
    </div>
  );
}
