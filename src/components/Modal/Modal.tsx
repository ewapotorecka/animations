import React, { useEffect, useRef, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

interface CustomModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: (open: boolean) => void;
    text: string;
}

const SHAPES = ['square', 'triangle'];
const COLORS = ['#ABFF4F', '#FF007F', '#0A369D', '#0CCA4A', '#F21B3F', '#5DFDCB', '#6BBF59', '#A491D3', '#C5DCA0', '#E396DF', '#462255', '#FFA69E', '#ECD444', '#6E2594'];
const generateRandomColor = () => {
    // Select a random index from 0 to the length of the COLORS array - 1
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    // Return the color at the randomly selected index
    return COLORS[randomIndex];
};




export default function CustomModal({isOpen, onOpen, onOpenChange, text}: CustomModalProps) {
    const [isConfettiActive, setConfettiActive] = useState(false);
    const containerRef = useRef(null);

    const handleClick = () => {
        setConfettiActive(true);
        // Reset the confetti after a short delay
        setTimeout(() => {
            setConfettiActive(false);
        }, 400);
    };

    const generateConfetti = () => {
        const container = containerRef.current;    
        if (container) {
            for (let i = 0; i < 400; i++) {
                const confetti = document.createElement('div');
                const positionX = Math.random() * window.innerWidth;
                const positionY = Math.random() * window.innerHeight;
                const rotation = Math.random() * 360;
                const size = Math.floor(Math.random() * (20 - 5 + 1)) + 5;            // Set confetti styles
                confetti.style.left = `${positionX}px`;
                confetti.style.top = `${positionY}px`;
                confetti.style.transform = `rotate(${rotation}deg)`;
                confetti.className = 'confetti ' + SHAPES[Math.floor(Math.random() * 3)];
                confetti.style.width = `${size}px`
                confetti.style.height = `${size}px`
                confetti.style.backgroundColor = generateRandomColor(); 
                           // @ts-ignore
                container.appendChild(confetti);            
                // Remove confetti element after animation duration (4 seconds)
                setTimeout(() => {
                           // @ts-ignore

                    container.removeChild(confetti);
                }, 10000);
            }
        }
    };

    useEffect(() => {
        if (isConfettiActive) {
            generateConfetti();
        }
    }, [isConfettiActive]);
    
  return (
    <>
     
      <Modal className="h-1/2" id="confetti-container" ref={containerRef} size="2xl"  isOpen={isOpen} onOpenChange={onOpenChange} shadow="lg" isDismissable={false} hideCloseButton  motionProps={{
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
          }
        }}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-[#F61067]">{text}</ModalHeader>
         
              <ModalFooter className="flex flex-wrap">
                <Button className="bg-[#ECD444]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#820263]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#FFFFC7]" onPress={onClose}>
                  ok
                </Button>
                <Button className="bg-[#6E2594]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#004FFF]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#31AFD4]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#0A369D]" onPress={handleClick}>
                  ok
                </Button>
             
                <Button className="bg-[#0CCA4A]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#6E2594]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#E98A15]" onPress={onClose}>
                  ok
                </Button>
                <Button className="bg-[#89FC00]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#DC0073]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#04E762]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#690375]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#CB429F]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#2C0E37]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#FFFFC7]" onPress={onClose}>
                  ok
                </Button>
                <Button className="bg-[#6E2594]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#8E0045]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#770058]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#0A369D]" onPress={handleClick}>
                  ok
                </Button>
             
                <Button className="bg-[#0CCA4A]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#FF007F]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#FFFFC7]" onPress={onClose}>
                  ok
                </Button>
                <Button className="bg-[#6E2594]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#00F0B5]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#820263]" onPress={handleClick}>
                  ok
                </Button>
                <Button className="bg-[#FFFFC7]" onPress={handleClick}>
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
