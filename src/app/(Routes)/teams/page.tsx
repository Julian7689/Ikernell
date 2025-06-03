'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { div } from 'motion/react-client';
import TeamsContent from '@/app/components/TeamsContent';

export default function TeamsPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    return(
        <div className=''>
         <TeamsContent />
        </div>
    );
}