'use client';
import { BorderBeam } from '@/components/magicui/border-beam';
import { motion } from 'framer-motion';

export function Space6() {
  return (
    <div className="bg-gradient-to-b from-[#1D1A29] to-[#4A2B5F] rounded-xl p-4 h-64 w-110 translate-x-70">
      <h3 className="text-white text-lg font-medium mb-2">Messages</h3>
      <p className="text-zinc-400 text-sm">Recent conversations</p>
      
      <div className="mt-4 space-y-3">
        {[
          { user: 'Alex Miller', msg: 'Sent you a file', time: '10m ago' },
          { user: 'Sarah Johnson', msg: 'Project meeting at 3pm', time: '1h ago' },
          { user: 'Mike Peters', msg: 'Updated the roadmap', time: '2h ago' }
        ].map((message, idx) => (
          <div key={idx} className="flex items-center bg-violet-900/10 p-2 rounded-lg">
            <div className="w-8 h-8 bg-violet-700/40 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">{message.user.charAt(0)}</span>
            </div>
            <div className="ml-2 flex-1">
              <p className="text-white text-xs font-medium">{message.user}</p>
              <p className="text-zinc-400 text-xs">{message.msg}</p>
            </div>
            <span className="text-zinc-500 text-xs">{message.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
