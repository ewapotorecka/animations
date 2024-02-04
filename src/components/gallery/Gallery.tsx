'use client'

import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import { Image } from "./image/Image";



interface Props {
  alt: string;
  category: string;
  title: string;
  titleWidth: number;
  photos: string[];
}

export function Gallery({ category, alt, title, titleWidth, photos }: Props) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    const isPresent = useIsPresent();
  
    return (
      <article className="flex">
   
        {photos.map((image, index) => (
          <Image
         src={image}
            index={index + 1}
            alt={alt}
          
            key={index}
          />
        ))}
        <motion.div className="progress" style={{ scaleX }} />
       
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
      </article>
    );
  }