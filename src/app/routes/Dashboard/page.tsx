'use client';
import Head from 'next/head';
import { BorderBeam } from '@/components/magicui/border-beam';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Space1 from '@/app/components/space1';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { div } from 'motion/react-client';
import SideNav from '@/app/components/SideNav';

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  return (
            <div className='w-[1550px] h-[720px] relative bg-[#221d2d] overflow-hidden'>
              <div className='w-36 h-6 left-[68px] top-[18px] absolute text-center justify-start text-white text-2xl font-medium font'>Ikernell</div>
              <div className='w-72 h-6 left-[48px] top-[43px] absolute text-center justify-start text-zinc-500 text-base font-medium'>System manage projects</div>
              <div className="w-[669px] h-16 left-[318px] top-[12px] absolute bg-neutral-900 rounded-3xl"></div>
              <div className='w-14 h-12 left-[926px] top-[18px] absolute bg-zinc-800 rounded-full'></div>
              <div className='w-48 h-16 left-[1016px] top-[12px] absolute bg-neutral-900 rounded-3xl'></div>
              <div className='w-14 h-12 left-[1217px] top-[23px] absolute bg-zinc-800 rounded-full'></div>
              <div className='w-14 h-12 left-[1021px] top-[23px] absolute bg-zinc-800 rounded-full'></div>
              <div className='w-8 h-8 left-[1032px] top-[32px] absolute overflow-hidden'>
                  <div className='w-7 h-7 left-[2.83px] top-[4.11px] absolute outline outline-2 outline-offset-[-1px] outline-slate-600'></div>
              </div>
              <div className='w-14 h-12 left-[1284px] top-[23px] absolute bg-zinc-800 rounded-full'></div>
              <div data-size="48" className='w-8 h-8 left-[1296px] top-[36px] absolute overflow-hidden'>
                  <div className='w-6 h-6 left-[3.88px] top-[2.58px] absolute outline outline-2 outline-offset-[-1px] outline-slate-600'></div>
              </div>
              <div className='transform translate-x-1 transform translate-y-20  w-[1500px] h-[637px] bg-[#19181b] rounded-2xl'>
              <SideNav></SideNav>
              <Space1></Space1>
              </div>
            </div>
  );
}