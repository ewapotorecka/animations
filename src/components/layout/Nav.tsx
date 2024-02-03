"use client";

import { Navbar, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from "next/link";
import Rainbow from "../icons/rainbow";
import Mushroom from "../icons/mushroom";

import Pill from "../icons/pill";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <div className="flex gap-2 p-4 w-full items-center justify-center">
      <motion.div
        whileHover={{
          opacity: 0.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          isIconOnly
          aria-label="Like"
          className="bg-gradient-to-tr from-pink-500 to-[#E1F2FE] text-white shadow-lg w-60"
        >
          <div className="w-10 h-10">
            <Rainbow />
          </div>
        </Button>
      </motion.div>
      <motion.div
        whileHover={{
          opacity: 0.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          isIconOnly
          aria-label="Like"
          className="bg-gradient-to-tr from-[#CDC1FF] to-[#1E91D6] text-white shadow-lg w-60"
        >
          <div className="w-10 h-10">
            <Mushroom />
          </div>
        </Button>
      </motion.div>

      <motion.div
        whileHover={{
          opacity: 0.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          isIconOnly
          aria-label="Like"
          className="bg-gradient-to-tr from-[#B2B1CF] to-[#27FB6B]  shadow-lg w-60"
        >
          <div className="w-10 h-10">
            <Pill />
          </div>
        </Button>
      </motion.div>
    </div>
  );
};

export default Nav;