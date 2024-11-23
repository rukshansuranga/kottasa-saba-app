'use client'

import { useParamsStore } from '@/hooks/useParamsStore';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FcIdea } from "react-icons/fc";

export default function Logo() {
    const router = useRouter();
    const pathname = usePathname();

    function doReset() {
        if (pathname !== '/') router.push('/');
        reset();
    }

    const reset = useParamsStore(state => state.reset)

    return (
        <div onClick={doReset} className='flex items-center gap-2 text-3xl font-semibold text-green-600 cursor-pointer'>
            <FcIdea size={34} />
            <div>Kottasa Saba</div>
        </div>
    )
}