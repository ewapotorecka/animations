import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { Cute_Font, Rubik_Scribble} from "next/font/google";
import { motion } from "framer-motion";

const cute = Cute_Font({ weight: ["400"], subsets: ["latin"]});
const rubik = Rubik_Scribble({ weight: ["400"], subsets: ["latin"]});




interface CustomModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  text: string;
}

export default function CustomModal({
  isOpen,
  onOpenChange,
  text,
}: CustomModalProps) {
  const [isConfettiActive, setConfettiActive] = useState(false);
  const { width, height } = useWindowSize();
  const [colors, setColors] = useState([
    "border-2 border-[#09814A] text-lg bg-transparent",
    "border-2 border-[#F90093] text-xs bg-transparent",
    "border-2 border-[#8B80F9] text-base bg-transparent",
    "border-2 border-[#2AFC98] text-xl bg-transparent",
    "border-2 border-[#340068] text-xs bg-transparent",
    "border-2 border-[#FFD639] text-xl bg-transparent",
  ]);

  const glowVariants = {
    initial: {
      opacity: 0
    },
    hover: {
      opacity: 1
    }
  }

  const shuffleColors = () => {
    let shuffledColors = [...colors];
    for (let i = shuffledColors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledColors[i], shuffledColors[j]] = [
        shuffledColors[j],
        shuffledColors[i],
      ];
    }
    setColors(shuffledColors);
  };

  const handleClick = () => {
    setConfettiActive(true);
    shuffleColors();
  };

  return (
    <>
      <Modal
        id="confetti-container"
        size="xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        shadow="lg"
        isDismissable={false}
        className={cute.className}
        hideCloseButton
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 2,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 4,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        {isConfettiActive && <Confetti width={width} height={height} />}

        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black text-center">
                {text}
              </ModalHeader>

              <ModalFooter className="flex flex-wrap">
                <motion.div variants={glowVariants}>
                <Button className={colors[0]} onPress={handleClick}>
                  
                  ok
                </Button>
                </motion.div>
                <Button className={colors[1]} onPress={onClose}>
                  ok
                </Button>
                <Button className={colors[2]} onPress={handleClick}>
                  ok
                </Button>
                <Button className={colors[3]} onPress={handleClick}>
                  ok
                </Button>
                <Button className={colors[4]} onPress={handleClick}>
                  ok
                </Button>
                <Button className={colors[5]} onPress={handleClick}>
                  ok
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
