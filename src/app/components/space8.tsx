'use client';
import { BorderBeam } from '@/components/magicui/border-beam';
import { motion } from 'framer-motion';

export function Space8() {
  return (
    <div className="bg-gradient-to-b from-[#1D1A29] to-[#4A2B5F] rounded-xl p-4 h-64">
      <h3 className="text-white text-lg font-medium mb-2">Analytics</h3>
      <p className="text-zinc-400 text-sm">Performance metrics</p>
      
      <div className="mt-6 flex justify-center">
        <div className="relative w-32 h-32">
          {/* Outer circle background */}
          <div className="absolute inset-0 rounded-full bg-violet-900/20"></div>
          
          {/* Progress circle - 72% */}
          <div className="absolute inset-0">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <circle 
                cx="50" cy="50" r="40" 
                stroke="#7c3aed" 
                strokeWidth="8" 
                strokeLinecap="round"
                strokeDasharray="251.2"
                strokeDashoffset="70.3"
                fill="none"
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>
          
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white text-2xl font-bold">72%</span>
            <span className="text-zinc-400 text-xs">Complete</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-between text-center">
        <div>
          <p className="text-white text-lg font-medium">24</p>
          <p className="text-zinc-400 text-xs">Tasks</p>
        </div>
        <div>
          <p className="text-white text-lg font-medium">8</p>
          <p className="text-zinc-400 text-xs">Projects</p>
        </div>
        <div>
          <p className="text-white text-lg font-medium">16</p>
          <p className="text-zinc-400 text-xs">Clients</p>
        </div>
      </div>
    </div>
  );
}
