'use client'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { div } from 'motion/react-client';

export default function SideNav() {

    return (
        <div className=' transform translate-x-2  transform translate-y-1 w-[185px] h-[620px] bg-[#262235] rounded-2xl'>
            <div className="w-28 transform translate-y-5 text-center justify-start text-zinc-500 text-base font-medium">GENERAL </div>
            <div>

            </div>
            <div className='w-23 transform translate-y-50 text-center justify-start text-zinc-500 text-base font-medium'>MORE</div>
        </div>
    )
}