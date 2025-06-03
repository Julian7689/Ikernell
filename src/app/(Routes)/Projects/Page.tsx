'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Space1 from '@/app/components/space1';
import SideNav from '@/app/components/SideNav';
import ProyectsContent from '@/app/components/ProyectsContent';
export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div className="backdrop-blur-xl bg-gradient-to-r from-white/10 ">
        
          <ProyectsContent />
      
    </div>
  );
}