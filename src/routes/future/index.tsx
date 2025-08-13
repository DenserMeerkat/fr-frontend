import Frame from "@/components/common/frame";
import { BlurFade } from "@/components/magicui/blur-fade";
import { futureEnhancements } from "@/constants";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/future/")({
  component: Future,
});

function Future() {
  return (
    <main className="flex flex-1 flex-col">
      <Frame>
        <div className="absolute top-1/12 left-1/24 -translate-y-1/2">
          <BlurFade delay={0.25} inView>
            <h1 className="text-[70px] font-extrabold tracking-tight">
              Future Enhancements
            </h1>
          </BlurFade>
        </div>
        <motion.img
          src="/images/gear-money-2x.png"
          alt=""
          className="absolute right-0 bottom-0 max-h-[80%] translate-x-[25%]"
          initial={{
            opacity: 0,
            y: -2000,
          }}
          animate={{
            opacity: 1,
            y: [0, -15, 0, 5, -5, 0],
            x: [10, -5, 5, 2, 0, 5],
          }}
          transition={{
            opacity: {
              duration: 2,
              ease: "easeOut",
            },
            y: {
              duration: 10,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
              delay: 0.3,
            },
            x: {
              duration: 10,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
              delay: 0.3,
            },
          }}
        />
        <motion.img
          src="/images/money-coin.png"
          alt=""
          className="absolute right-0 bottom-0 max-h-[40%] -translate-x-[125%] translate-y-[55%] rotate-90"
          initial={{
            opacity: 0,
            y: -2000,
          }}
          animate={{
            opacity: 1,
            y: [0, -8, 0],
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
        <ul className="absolute top-1/2 left-1/24 flex -translate-y-1/2 flex-col gap-8">
          {futureEnhancements.map((enhancement, index) => {
            return (
              <motion.li
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.2,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.0 + index * 0.2,
                    ease: "easeOut",
                  }}
                >
                  {<enhancement.icon className="text-primary size-12" />}
                </motion.div>
                <motion.span
                  className="text-2xl tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.2 + index * 0.2,
                    ease: "easeOut",
                  }}
                >
                  {enhancement.content}
                </motion.span>
              </motion.li>
            );
          })}
        </ul>
      </Frame>
    </main>
  );
}
