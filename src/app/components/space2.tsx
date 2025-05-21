'use client';
import Head from 'next/head';
import { BorderBeam } from '@/components/magicui/border-beam';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion'; 
import { div } from 'motion/react-client';

export default function Space2() {
    return(
        <div className='transform translate-x-1  transform translate-y-20 w-[250px] h-[320px] bg-[#232325] rounded-2xl'>

        </div>
    )
}