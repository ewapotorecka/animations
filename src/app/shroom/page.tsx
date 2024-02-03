"use client";

import AnimatedText from "@/components/animatedText/AnimatedText";


export default function Shroom() {
  return (
   <div className="w-screen h-screen flex items-center justify-center">
    <AnimatedText text="Well, it is what it is" replay={true} delay={0.4} duration={0.5} />
   </div>
  );
}
