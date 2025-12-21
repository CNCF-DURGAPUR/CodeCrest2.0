'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import ShinyText from '../ui/ShinyText';

function PercentageCounter() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex justify-center mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <div
        className="text-4xl font-bold"
        style={{
          fontFamily: 'ITC Benguiat Bold, serif',
          WebkitTextStroke: '2px #ef4444',
          color: 'transparent',
          textShadow: '0 0 20px rgba(239, 68, 68, 0.6)'
        }}
      >
        {Math.min(Math.round(percentage), 100)}%
      </div>
    </motion.div>
  );
}

export default function LoadingPage() {
  // No loading UI — keep transitions immediate
  return null;
}

