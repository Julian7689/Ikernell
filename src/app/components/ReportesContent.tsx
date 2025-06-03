'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes'; 
import { div } from 'motion/react-client';
import { Globe, Plus } from 'lucide-react';

export default function ReportesContennt(){
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
                                <span className="text-white text-4xl font-bold">Reportes</span>
                            </div>
                             <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 translate-y-5">
                                <Plus size={20} />
                                <span>Crear un nuevo Reporte</span>
                            </button>
                        </div>
                        <div className="hidden md:block">
                            <Globe className="marge-y-w-32 h-32 text-white/20 animate-spin" style={{ animationDuration: '20s' }} />
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                className='p-6 backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/5 rounded-3xl border border-white/20'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                
                                <h2>Hola </h2>
                  
                </motion.div>

                </div>
        </div>
    )
}