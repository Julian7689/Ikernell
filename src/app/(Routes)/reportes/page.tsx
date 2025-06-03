'use client';
import ReportesContennt from '@/app/components/ReportesContent';    

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { div } from 'motion/react-client';

export default function TeamsPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    return(
        <div className=''>
            <ReportesContennt></ReportesContennt>

        </div>
    );
}