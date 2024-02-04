'use client'

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: string) {
  return useTransform(value, [0, 1], ["-" + distance, distance]);
}

interface Props {
  alt: string;

  index: number;

  src: string;
}

export function Image({ alt, src, index,  }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, "50vh");

  return (
    <section>
      <div ref={ref} >
        <img src={src} alt={alt} />
      </div>
      <motion.h2 style={{ y }}>{`#00${index}`}</motion.h2>
    </section>
  );
}
