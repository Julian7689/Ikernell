'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Filter, Globe, Search } from 'lucide-react';
import { div, s } from 'motion/react-client';


export default function BarBusqueda() {
    const [searchTerm, setSearchTerm] = useState('');

    return(
        <div className='flex flex-col sm:flex-row gap-4 mb-6'>
        <div className='relative flex-1'>
                <Search className="absolute left-13 translate-y-11 transform -translate-y-1/2 text-gray-400" size={30} />
                <input type="text" 
                    placeholder='Buscar proyectos'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='w-250 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 translate-y-7 translate-x-10 '
                />
        </div>
            <button className='flex items-center space-x-4 px-4 py-2  bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 group rounded-md  -translate-x-12 translate-y-7 '>
                 <Filter size={20} />
            <span>Filtros</span>
            </button>
        </div>
    )
}