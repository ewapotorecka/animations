'use client'
import ParallaxText from "@/components/parallax/Parallax";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


const vertical = "2/3";
const horizontal = "3/2";

export const londonPhotosMetadata = [
  { aspectRatio: horizontal },
  { aspectRatio: vertical },
  { aspectRatio: horizontal },
  { aspectRatio: vertical },
  { aspectRatio: vertical },
  { aspectRatio: vertical },
  { aspectRatio: horizontal },
  { aspectRatio: vertical },
  { aspectRatio: horizontal }
];



export default function Parallax() {
const router = useRouter();
  return (
    <div id="want-more" className="parallax  w-screen px-8 flex flex-col gap-32">
<ParallaxText baseVelocity={-2}>In the realm of screens where pixels play,</ParallaxText>
      <ParallaxText baseVelocity={2}>Parallax whispers, leading eyes astray.</ParallaxText>
      <ParallaxText baseVelocity={-2}>Foreground hastens in a fleeting chase,</ParallaxText>
      <ParallaxText baseVelocity={2}>While backgrounds meander with grace.</ParallaxText>
      <div className="h-8"/>
      <ParallaxText baseVelocity={-4}>Scrolling gently, a world unfurls,</ParallaxText>
      <ParallaxText baseVelocity={4}>Mountains and valleys, in depth, swirl.</ParallaxText>
      <ParallaxText baseVelocity={-4}>A digital canvas, alive and profound,</ParallaxText>
      <ParallaxText baseVelocity={4}>Where flatness recedes, dimensions are found.</ParallaxText>
      <div className="h-8"/>
      <ParallaxText baseVelocity={-6}>So heed the magic, as you wander and gaze,</ParallaxText>
      <ParallaxText baseVelocity={6}>Through parallax realms, in a luminous maze.</ParallaxText>
      <ParallaxText baseVelocity={-6}>A story in layers, subtly composed,</ParallaxText>
      <ParallaxText baseVelocity={6}>In scrolls and shadows, depth is exposed.</ParallaxText>
      <div className="h-32"/>
<motion.div whileInView={{scale: 0.2}}  transition={{  duration: 4 }}>


     <Button className="w-fit" onClick={()=>router.push('/parallax/#want-more')}>Discover more...</Button>
     </motion.div>
     <div className="h-screen"/>

      
     <div className="h-8"/>
      <div className="h-8"/>
      <div className="h-8"/>
      <div className="h-8"/>
     {/* <Button onClick={()=>router.push('/parallax/gallery')}>Discover more...</Button> */}
    </div>)
}

