'use client';
import Head from 'next/head';
import { BorderBeam } from '@/components/magicui/border-beam';     
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { div } from 'motion/react-client';
import SideNav from '@/app/components/SideNav';
import Space2 from '@/app/components/space2';
import Space3 from '@/app/components/space3';
import Space4 from '@/app/components/space4';
import space5 from '@/app/components/space5';
import space6 from '@/app/components/space6';
import space7 from '@/app/components/space7';

export default function Space1() {

    return(
        <div className=' transform translate-x-50  transform -translate-y-154 w-[1295px] h-[630px] bg-[#262235] rounded-2xl'>
            <Space2>

            </Space2>
            <Space3>

            </Space3>
            <Space4>
            </Space4>
          
        </div>
    )
}