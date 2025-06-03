'use client';
import { BorderBeam } from '@/components/magicui/border-beam';
import { motion } from 'framer-motion';

export function Space7() {
  return (
    <div className="bg-gradient-to-b from-[#1D1A29] to-[#4A2B5F] rounded-xl p-4 h-64">
      <h3 className="text-white text-lg font-medium mb-2">Notes</h3>
      <p className="text-zinc-400 text-sm">Your recent notes</p>
      
      <div className="mt-4 space-y-3">
        <div className="p-3 bg-violet-900/20 rounded-lg">
          <h4 className="text-white text-sm font-medium">Project Ideas</h4>
          <p className="text-zinc-400 text-xs mt-1">Implement new dashboard layout with dark theme...</p>
          <div className="flex justify-between mt-2">
            <span className="text-zinc-500 text-xs">May 18, 2025</span>
            <span className="text-violet-400 text-xs">Read more</span>
          </div>
        </div>
        
        <div className="p-3 bg-violet-900/20 rounded-lg">
          <h4 className="text-white text-sm font-medium">Meeting Summary</h4>
          <p className="text-zinc-400 text-xs mt-1">Discussed next steps for the client project...</p>
          <div className="flex justify-between mt-2">
            <span className="text-zinc-500 text-xs">May 19, 2025</span>
            <span className="text-violet-400 text-xs">Read more</span>
          </div>
        </div>
      </div>
    </div>
  );
}