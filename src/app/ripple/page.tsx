"use client";

import AnimatedText from "@/components/animatedText/AnimatedText";

export default function Uni() {
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row items-center justify-center">
      <AnimatedText
        text="It is what it is"
        replay={true}
        delay={0.4}
        duration={0.5}
      />
    </div>
  );
}
