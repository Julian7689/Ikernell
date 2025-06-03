'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes'; 
import { div } from 'motion/react-client';
import { Globe } from 'lucide-react';

export default function TablerosContennt(){
    return(
        <div className='p-6 min-h-screen bg-gradient-to-br'>
            <div className=''>
             <motion.div 
                    className='backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/5 rounded-3xl p-8 border border-white/20'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className='flex items-center justify-between'>
                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-white/60 text-4xl font-light">Gestión de</span>
                                <span className="text-white text-4xl font-bold">Actividades</span>
                            </div>
                            <p className="text-white/80 text-xl mb-6">Administra Springs y flujos de trabajo</p>

                        </div>
                        <div className="hidden md:block">
                            <Globe className="w-32 h-32 text-white/20 animate-spin" style={{ animationDuration: '20s' }} />
                        </div>
                    </div>
                </motion.div>
                </div>
        </div>
    )
}