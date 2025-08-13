import Frame from "@/components/common/frame";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/intro/")({
  component: Introduction,
});

function Introduction() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <Frame>
          <div className="absolute top-1/12 right-1/8">
            <BoxReveal boxColor={`#d97757`} duration={0.5}>
              <h1 className="mt-2 text-[70px] font-extrabold tracking-tight">
                Requirements
              </h1>
            </BoxReveal>
            <div className="pt-6 pl-4">
              <motion.p
                className="text-foreground text-2xl tracking-wide [word-spacing:0.3rem]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  ease: "easeOut",
                }}
              >
                Simulate a{" "}
                <motion.span
                  className="text-primary text-3xl font-bold"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.0,
                    ease: "easeOut",
                  }}
                >
                  Stock Trading
                </motion.span>{" "}
                app using
                <motion.ul
                  className="my-6 ml-6 list-disc space-y-1 text-lg font-normal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.2,
                    ease: "easeOut",
                    staggerChildren: 0.2,
                  }}
                >
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 1.4,
                    }}
                  >
                    Frontend :{" "}
                    <span className="text-positive text-xl font-bold">
                      React
                    </span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 1.6,
                    }}
                  >
                    Backend :{" "}
                    <span className="text-positive text-xl font-bold">
                      Spring Boot
                    </span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 1.8,
                    }}
                  >
                    Database :{" "}
                    <span className="text-positive text-xl font-bold">
                      MySQL
                    </span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 2.0,
                    }}
                  >
                    Container :{" "}
                    <span className="text-positive text-xl font-bold">
                      Docker
                    </span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 2.2,
                    }}
                  >
                    Live API :{" "}
                    <span className="text-positive text-xl font-bold">
                      market.neueda.com
                    </span>
                  </motion.li>
                </motion.ul>
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 2.4,
                    ease: "easeOut",
                  }}
                >
                  in a time-frame of{" "}
                  <motion.span
                    className="text-negative text-3xl font-bold"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 2.6,
                      ease: "easeOut",
                    }}
                  >
                    104 Man-hours
                  </motion.span>
                </motion.span>
              </motion.p>
            </div>
          </div>
          <motion.img
            src="/images/paper-rocket-2x.png"
            alt=""
            className="absolute bottom-0 left-0 max-h-[80%] -translate-x-[10%]"
            initial={{
              opacity: 0,
              y: -2000,
            }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 2,
                ease: "easeOut",
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
                delay: 0.3,
              },
            }}
          />
          <motion.img
            src="/images/money-coin.png"
            alt=""
            className="absolute bottom-0 left-0 max-h-[40%] translate-x-[125%] translate-y-[55%] rotate-90"
            initial={{
              opacity: 0,
              y: -2000,
            }}
            animate={{
              opacity: 1,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: {
                duration: 2,
                ease: "easeOut",
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
                delay: 0.2,
              },
            }}
          />
        </Frame>
      </div>
    </main>
  );
}
