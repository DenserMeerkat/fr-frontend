import FloatingElement from "@/components/common/floating";
import Frame from "@/components/common/frame";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  component: Home,
});

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Frame>
        <motion.img
          src="/images/coin-graph.png"
          alt=""
          className="absolute top-1/2 right-1/8 max-h-[70%] -translate-y-1/2"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            y: [0, -15, 0],
            x: [0, 5, -5, 0],
          }}
          transition={{
            opacity: {
              duration: 2,
              ease: "easeOut",
            },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
              delay: 0.6,
            },
            x: {
              duration: 4,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
              delay: 0.6,
            },
          }}
        />
        <div className="absolute top-1/2 left-1/8 -translate-y-1/2">
          <BoxReveal boxColor={`#d97757`} duration={0.5}>
            <span className="text-foreground pl-2 text-xl font-medium tracking-wide">
              Stock Trading App
            </span>
          </BoxReveal>
          <BlurFade delay={0.25} inView>
            <h1 className="mt-2 text-[120px] leading-[120px] font-extrabold tracking-tight">
              <span>Four</span>
              <br />
              <span>Real</span>
            </h1>
          </BlurFade>
          <BoxReveal boxColor={`#d97757`} duration={0.5}>
            <div className="bg-background mt-6 w-fit rounded-full border-2 px-8 py-1">
              <p className="text-muted-foreground">Ian Jukes (Product Owner)</p>
            </div>
          </BoxReveal>
        </div>
      </Frame>
    </main>
  );
}
