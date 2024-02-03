"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-16">
        <motion.div
          animate={{ rotate: 1440, scale: 4 }}
          transition={{ ease: "easeOut", duration: 4 }}
          whileHover={{
            x: -200,
            transition: { duration: 0.2 },
          }}
          drag={true}
        >
          <h1 className="cursor-pointer text-4xl font-black bg-gradient-to-r from-[#F092DD] via-[#2D7DD2] to-[#BCE784] text-transparent bg-clip-text">
            E
          </h1>
        </motion.div>
        <motion.div
          animate={{ rotate: -1440, scale: 6 }}
          transition={{ ease: "easeOut", duration: 6 }}
          whileHover={{
            y: -200,
            transition: { duration: 0.4 },
          }}
          drag={true}
        >
          <h1 className="cursor-pointer text-4xl font-black bg-gradient-to-r from-[#F092DD] via-[#2D7DD2] to-[#BCE784] text-transparent bg-clip-text">
            N
          </h1>
        </motion.div>
        <motion.div
          animate={{ rotate: 1440, scale: 3 }}
          transition={{ ease: "easeOut", duration: 3 }}
          whileHover={{
            x: 40,
            y: 200,
            transition: { duration: 0.2 },
          }}
        >
          <h1 className="cursor-pointer text-4xl font-black bg-gradient-to-r from-[#F092DD] via-[#2D7DD2] to-[#BCE784] text-transparent bg-clip-text">
            J
          </h1>
        </motion.div>
        <motion.div
          animate={{ rotate: -1440, scale: 4 }}
          transition={{ ease: "easeOut", duration: 6 }}
          whileHover={{
            x: -140,
            y: 200,
            transition: { duration: 0.2 },
          }}
          drag={true}
        >
          <h1 className="cursor-pointer text-4xl font-black bg-gradient-to-r from-[#F092DD] via-[#2D7DD2] to-[#BCE784] text-transparent bg-clip-text">
            O
          </h1>
        </motion.div>
        <motion.div
          animate={{ rotate: 1440, scale: 1 }}
          transition={{ ease: "easeOut", duration: 6 }}
          whileHover={{
            x: 440,

            transition: { duration: 0.2 },
          }}
          drag={true}
        >
          <h1 className="cursor-pointer text-4xl font-black bg-gradient-to-r from-[#F092DD] via-[#2D7DD2] to-[#BCE784] text-transparent bg-clip-text">
            Y
          </h1>
        </motion.div>
      </div>
    </main>
  );
}
