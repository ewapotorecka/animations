'use client'

import DancingCat from '@/components/dancingCat/DancingCat'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-xl'>Well, this is awkward…</h1>
      <Link href="/" className='text-[8px]'>Return Home</Link>
<DancingCat/>

    </div>
  )
}