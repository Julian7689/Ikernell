'use client';
import ChatsContennt from '@/app/components/ChatsConrtent';   

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { div } from 'motion/react-client';

export default function TeamsPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    return(
        <div className=''>
            <ChatsContennt></ChatsContennt>
        </div>
    );
}