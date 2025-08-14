import React from "react";
import Frame from "@/components/common/frame";
import { challengesAndLearnings } from "@/constants";
import { createFileRoute } from "@tanstack/react-router";
import { IconBug, IconBulb } from "@tabler/icons-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { motion } from "motion/react";

export const Route = createFileRoute("/challenges/")({
  component: Challenges,
});

function Challenges() {
  return (
    <main className="flex flex-1 flex-col">
      <Frame>
        <motion.img
          src="/images/target-money-32x.png"
          alt=""
          className="absolute -top-4 -right-24 max-h-[40%]"
          initial={{ opacity: 0, y: -2000 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 2, ease: "easeOut" },
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
          className="absolute -right-16 bottom-36 max-h-[30%] rotate-45"
          initial={{ opacity: 0, y: -2000 }}
          animate={{ opacity: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 2, ease: "easeOut" },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
              delay: 0.2,
            },
          }}
        />
        <motion.img
          src="/images/money-coin.png"
          alt=""
          className="absolute -right-8 -bottom-16 max-h-[30%] rotate-90"
          initial={{ opacity: 0, y: -2000 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 2, ease: "easeOut" },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
              delay: 0.6,
            },
          }}
        />
        <div className="w-full pr-52 text-center">
          <BlurFade delay={0.5} inView>
            <h1 className="text-[60px] font-extrabold tracking-tight">
              Challenges <span className="px-12">&</span> Learnings
            </h1>
          </BlurFade>
        </div>
        <div className="mx-auto grid h-full w-full grid-cols-2 gap-x-8 gap-y-4 pt-8 pr-60 pb-24 pl-12 text-xl font-normal tracking-wide">
          {challengesAndLearnings.map((challenge, index) => (
            <React.Fragment key={challenge.challenge}>
              <motion.div
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.2,
                }}
              >
                <div>
                  <IconBug className="text-muted-foreground size-6" />
                </div>
                <p>{challenge.challenge}</p>
              </motion.div>
              <motion.div
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.2,
                }}
              >
                <div>
                  <IconBulb className="text-primary size-6" />
                </div>
                <p>{challenge.learning}</p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </Frame>
    </main>
  );
}
