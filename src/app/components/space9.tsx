'use client';
import { BorderBeam } from '@/components/magicui/border-beam';
import { motion } from 'framer-motion';
export function Space9() {
  return (
    <div className="bg-gradient-to-b from-[#1D1A29] to-[#4A2B5F] rounded-xl p-4 h-64">
      <h3 className="text-white text-lg font-medium mb-2">Resources</h3>
      <p className="text-zinc-400 text-sm">Available tools</p>
      
      <div className="mt-6 grid grid-cols-2 gap-3">
        {[
          { name: 'Documents', count: '35 files' },
          { name: 'Images', count: '128 files' },
          { name: 'Media', count: '12 files' },
          { name: 'Templates', count: '8 files' }
        ].map((resource, idx) => (
          <div key={idx} className="bg-violet-900/20 p-3 rounded-lg">
            <div className="w-8 h-8 bg-violet-700/40 rounded-lg flex items-center justify-center mb-2">
              <span className="text-white text-sm">{resource.name.charAt(0)}</span>
            </div>
            <p className="text-white text-xs font-medium">{resource.name}</p>
            <p className="text-zinc-400 text-xs">{resource.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}