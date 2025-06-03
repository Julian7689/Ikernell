'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BorderBeam } from '@/components/magicui/border-beam';

export function Space3() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Review content strategy', completed: false, priority: 'High' },
    { id: 2, title: 'Team meeting with design', completed: false, priority: 'Medium' },
    { id: 3, title: 'Update documentation', completed: true, priority: 'Low' },
    { id: 4, title: 'Client presentation', completed: false, priority: 'High' }
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <motion.div 
      className="bg-[#1D1A29] rounded-xl p-4 h-64 w-145 overflow-y-auto tr "
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-white text-lg font-medium mb-2">Tasks</h3>
      <p className="text-zinc-400 text-sm mb-4">View your pending tasks</p>
      
      <div className="space-y-2">
        {tasks.map(task => (
          <div 
            key={task.id} 
            className={`flex items-center p-2 rounded-lg ${task.completed ? 'bg-opacity-40' : ''} bg-[#262235]`}
          >
            <button 
              onClick={() => toggleTask(task.id)}
              className={`w-5 h-5 rounded-full border ${task.completed ? 'bg-indigo-500 border-indigo-500' : 'border-zinc-500'} flex items-center justify-center mr-3`}
            >
              {task.completed && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
            <div className="flex-1">
              <p className={`text-sm ${task.completed ? 'text-zinc-500 line-through' : 'text-white'}`}>{task.title}</p>
            </div>
            <span className={`text-xs px-2 py-1 rounded ${
              task.priority === 'High' ? 'bg-red-500/20 text-red-300' : 
              task.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' : 
              'bg-green-500/20 text-green-300'
            }`}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}