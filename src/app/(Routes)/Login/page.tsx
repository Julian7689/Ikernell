'use client';
import Head from 'next/head';      
import { BorderBeam } from '@/components/magicui/border-beam';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Meteors } from "@/components/magicui/meteors";
import CardLogin from '@/app/components/CardLogin';

export default function Login() {
  return (
    <div className='bg-black min-h-screen font-inter '>
      <Meteors />
      <h2 className='text-6xl text-purple-500 neon-text font-semibold py-51 px-45 '>
        Welcome to back! 
      </h2>
      <div className='relative w-[300px] -mt-30 left-40'>
        <CardLogin />
      </div>
      <div className='w-170 h-170 bg-[#121010] rounded-md left-200 top-7 absolute border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]'>
        <img src="/undraw_building-a-website_1wrp%201.svg" className='mt-20 px-10 mt-20 px-10 w-[500px]  ' />
      </div>
    </div>
  );
}