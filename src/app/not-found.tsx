'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'


const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/dancingCat/DancingCat'),
  { ssr: false }
)


// import DancingCat from '@/components/dancingCat/DancingCat'
 
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-xl'>Well, this is awkward…</h1>
      <Link href="/" className='text-[8px]'>Return Home</Link>
<DynamicComponentWithNoSSR/>

    </div>
  )
}