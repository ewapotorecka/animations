"use client";

import { Button } from "@nextui-org/react";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Plane from "../icons/plane";


const Nav = () => {
  const router = useRouter();
  return (
    <div className="flex  gap-2 p-4 w-full items-center justify-between">
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
