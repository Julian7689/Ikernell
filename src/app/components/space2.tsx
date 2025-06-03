'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BorderBeam } from '@/components/magicui/border-beam';

export function Space2() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Website Redesign', progress: 75, dueDate: 'May 28' },
    { id: 2, name: 'Mobile App Launch', progress: 40, dueDate: 'Jun 15' },
    { id: 3, name: 'Marketing Campaign', progress: 20, dueDate: 'Jul 3' }
  ]);

  return (
    <motion.div 
      className="bg-[#1D1A29] rounded-xl p-4 h-95 w-165 overflow-y-auto -translate-x-7"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-white text-lg font-medium mb-2">Projects</h3>
      <p className="text-zinc-400 text-sm mb-4">Manage your current projects</p>
      
      <div className="space-y-3">
        {projects.map(project => (
          <div key={project.id} className="bg-[#262235] rounded-lg p-3">
            <div className="flex justify-between">
              <h4 className="text-white font-medium">{project.name}</h4>
              <span className="text-zinc-400 text-xs">{project.dueDate}</span>
            </div>
            <div className="mt-2 h-2 bg-[#3A3548] rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <div className="mt-1 flex justify-between items-center">
              <span className="text-zinc-400 text-xs">{project.progress}% Complete</span>
              <button className="text-indigo-400 text-xs hover:text-indigo-300">View</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}