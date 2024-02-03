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
    "bg-[#09814A]",
    "bg-[#F90093]",
    "bg-[#8B80F9]",
    "bg-[#2AFC98]",
    "bg-[#340068]",
    "bg-[#FFD639]",
  ]);

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
              <ModalHeader className="flex flex-col gap-1 text-[#F61067]">
                {text}
              </ModalHeader>

              <ModalFooter className="flex flex-wrap">
                <Button className={colors[0]} onPress={handleClick}>
                  ok
                </Button>
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
