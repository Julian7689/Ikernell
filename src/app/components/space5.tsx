'use client';
import { BorderBeam } from '@/components/magicui/border-beam';
import { motion } from 'framer-motion';

export function Space5() {
  return (
    <div className="bg-gradient-to-b from-[#1D1A29] to-[#4A2B5F] rounded-xl p-4 h-64">
      <h3 className="text-white text-lg font-medium mb-2">Statistics</h3>
      <p className="text-zinc-400 text-sm">Track your performance</p>
      
      <div className="mt-6 flex flex-col space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-zinc-300 text-xs">Completed Tasks</span>
            <span className="text-zinc-300 text-xs">78%</span>
          </div>
          <div className="w-full bg-violet-900/20 rounded-full h-2">
            <div className="bg-violet-600 h-2 rounded-full" style={{ width: '78%' }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-zinc-300 text-xs">Project Progress</span>
            <span className="text-zinc-300 text-xs">45%</span>
          </div>
          <div className="w-full bg-violet-900/20 rounded-full h-2">
            <div className="bg-violet-600 h-2 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-zinc-300 text-xs">Time Spent</span>
            <span className="text-zinc-300 text-xs">62%</span>
          </div>
          <div className="w-full bg-violet-900/20 rounded-full h-2">
            <div className="bg-violet-600 h-2 rounded-full" style={{ width: '62%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
