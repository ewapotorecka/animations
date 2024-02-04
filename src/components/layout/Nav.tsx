"use client";

import { Button, Switch } from "@nextui-org/react";
import Image from "next/image";
import Moon from "../../../public/moon.png";
import Sun from "../../../public/sun.png";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Plane from "../icons/plane";
import { useEffect, useState } from "react";


const Nav = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [effect, setEffect] = useState('');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    const effects = ['rotate', 'flip'];
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    setEffect(randomEffect);
  };

  useEffect(() => {

    switch (effect) {
      case 'rotate':
        document.body.style.transform = 'rotate(180deg)';
        document.body.style.transition = 'transform 0.5s';
        break;
      case 'flip':
        document.body.style.transform = 'scaleX(-1)';
        document.body.style.transition = 'transform 0.5s';
        break;
      
        break;
      default:
        document.body.style.transform = 'none';
    }
  }, [isDarkMode, effect]);

  return (
    <div className="flex  gap-2 p-4 w-full items-center justify-between">
         <Switch
      defaultSelected
      onChange={toggleTheme}
      size="lg"
      color="warning"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
         <Image src={Sun} alt="sun"/>
        ) : (
          <Image src={Moon} alt="moon"/>
        )
      }
    />
  
      <motion.div
        whileHover={{
          opacity: 0.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          opacity: 0.1,
          transition: { duration: 0.2 },
        }}
      >
        <Button
          isIconOnly
          aria-label="Like"
          className="bg-gradient-to-tr from-pink-500 to-[#E1F2FE] text-white shadow-lg "
          onClick={() => router.push("/")}
        >
          <div className="w-10 h-10">
            <Plane/>
          </div>
        </Button>
      </motion.div>
      <motion.div
        whileHover={{
          opacity: 0.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          opacity: 0.1,
          transition: { duration: 0.2 },
        }}
      >
        <Button
          isIconOnly
          aria-label="Like"
          className="bg-gradient-to-tr from-[#CDC1FF] to-[#D63AF9] text-white shadow-lg "
          onClick={() => router.push("/not-today")}
        >
          <div className="w-8 h-8">
          <Plane/>
          </div>
        </Button>
      </motion.div>

      <motion.div
        whileHover={{
          opacity: 0.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          opacity: 0.1,
          transition: { duration: 0.2 },
        }}
      >
        <Button
          isIconOnly
          aria-label="Like"
          className="bg-gradient-to-tr from-[#5C95FF] to-[#B5D8CC]  shadow-lg "
          onClick={() => router.push("/parallax")}

        >
          <div className="w-10 h-10">
          <Plane/>
          </div>
        </Button>
      </motion.div>
      <motion.div
        whileHover={{
          opacity: 0.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          opacity: 0.1,
          transition: { duration: 0.2 },
        }}
      >
        <Button
          isIconOnly
          aria-label="Like"
          className="bg-gradient-to-tr from-[#B2B1CF] to-[#18435A]  shadow-lg "
        >
          <div className="w-12 h-12">
          <Plane/>
          </div>
        </Button>
      </motion.div>
      <motion.div
        whileHover={{
          opacity: 0.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          opacity: 0.1,
          transition: { duration: 0.2 },
        }}
      >
        <Button
          isIconOnly
          aria-label="Like"
          className="bg-gradient-to-tr from-[#B2B1CF] to-[#380036]  shadow-lg "
          onClick={() => router.push("/uni")}
        >
          <div className="w-16 h-16">
          <Plane/>
          </div>
        </Button>
      </motion.div>
    </div>
  );
};

export default Nav;
