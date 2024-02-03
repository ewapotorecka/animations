"use client";
import Image from "next/image";

import AnimatedText from "@/components/animatedText/AnimatedText";
import Unicorn from "../../../public/unicorn.png";

export default function Uni() {
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row items-center justify-center">
       <AnimatedText
        text="It is what it is"
        replay={true}
        delay={0.4}
        duration={0.5}
      />
      <Image src={Unicorn} alt="unicorn" width={400} height={400} />
     
    </div>
  );
}
