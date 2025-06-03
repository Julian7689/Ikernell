'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BorderBeam } from '@/components/magicui/border-beam';

export function Space4() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  
  const [events, setEvents] = useState([
    { id: 1, title: 'Project Kickoff', time: '09:30 AM', date: 'May 22' },
    { id: 2, title: 'Client Meeting', time: '02:00 PM', date: 'May 22' },
    { id: 3, title: 'Team Lunch', time: '12:30 PM', date: 'May 23' },
    { id: 4, title: 'Design Review', time: '04:00 PM', date: 'May 24' }
  ]);

  // Generate week days for the mini calendar
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const getDayNumbers = () => {
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - currentDate.getDay());
    
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      return {
        number: date.getDate(),
        isToday: date.getDate() === day && date.getMonth() === currentDate.getMonth()
      };
    });
  };

  return (
    <motion.div 
      className="bg-[#1D1A29] rounded-xl p-5 h-95 w-116 overflow-y-auto translate-x-67"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-white text-lg font-medium mb-2">Calendar</h3>
      <p className="text-zinc-400 text-sm mb-3">Check your upcoming events</p>
      
      {/* Mini Calendar */}
      <div className="mb-4">
        <div className="text-white font-medium text-sm mb-2">{month} {day}</div>
        <div className="flex justify-between mb-1">
          {weekDays.map((day, i) => (
            <div key={i} className="w-6 h-6 flex items-center justify-center text-zinc-400 text-xs">
              {day}
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {getDayNumbers().map((date, i) => (
            <div 
              key={i} 
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs 
                ${date.isToday ? 'bg-indigo-500 text-white' : 'text-zinc-400'}`}
            >
              {date.number}
            </div>
          ))}
        </div>
      </div>
      
      {/* Events List */}
      <div className="space-y-2">
        {events.map(event => (
          <div key={event.id} className="bg-[#262235] rounded-lg p-2 flex">
            <div className="w-1 bg-indigo-500 rounded-full mr-2"></div>
            <div className="flex-1">
              <div className="text-white text-sm font-medium">{event.title}</div>
              <div className="flex text-xs text-zinc-400">
                <span>{event.date}</span>
                <span className="mx-2">•</span>
                <span>{event.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}