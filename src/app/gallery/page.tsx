'use client'

import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import One from '../../../public/images/1.jpg';
import Two from '../../../public/images/2.jpg';
import Three from '../../../public/images/3.jpg';

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const [y, setY] = useState(0);
  const [opacity, setOpacity] = useState(1-scrollYProgress.get()+0.1);



  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => {
      setY(v);   
      setOpacity(1-scrollYProgress.get()+0.1)
    });

    return unsubscribe;
  }, [scrollYProgress]);



  const textParallax = {
    transform: `translateY(-${y * 100}px)`,
  };
  const textParallax1 = {
    transform: `translateY(-${y * 400}px)`,
  }
  const textParallax2 = {
    transform: `translateY(${y * 400}px)`,
  }
  const textParallax3 = {
    transform: `translateY(-${y * 200}px)`,
  }
  const textParallax4 = {
    transform: `translateY(${y * 100}px)`,
  }

  return (
    <div className="h-[150%] flex gap-8 items-center p-8 pb-[10rem]">
      <motion.div style={{ ...textParallax, opacity: scrollYProgress.get() + 0.1 }} className="w-2/5 h-full flex flex-col items-center text-xl gap-8" >
      <motion.div style={{ ...textParallax3 }}><Image src={Two} alt="two"  objectFit='cover' className='rounded'/></motion.div>
      <Image src={Three} alt="three"  objectFit='cover' className='rounded'/>
     
      </motion.div>
      <div className="w-3/5 flex flex-col gap-8">
        <motion.div style={{ ...textParallax2, opacity }}><Image src={One} alt="one"  objectFit='cover' className='rounded'/></motion.div>
      </div>
    </div>
  );
}
