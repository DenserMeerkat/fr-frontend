import Frame from "@/components/common/frame";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/conclusion/")({
  component: Conclusion,
});

function Conclusion() {
  return (
    <main className="flex flex-1 flex-col">
      <Frame>
        <motion.img
          src="/images/piggy-phone-4x.png"
          alt=""
          className="absolute top-1/2 right-1/24 max-h-[60%] -translate-y-1/2"
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
        <div className="absolute top-1/2 left-12 -translate-y-1/2">
          <BlurFade delay={0.25} inView>
            <h1 className="mt-2 mb-16 text-[110px] leading-[110px] font-extrabold tracking-tight">
              Thank You
            </h1>
          </BlurFade>
          <BoxReveal boxColor={`#d97757`} duration={0.5}>
            <div className="bg-background w-fit rounded-full border-2 px-8 py-1">
              <p className="text-muted-foreground">Open to Questions</p>
            </div>
          </BoxReveal>
        </div>
      </Frame>
    </main>
  );
}
