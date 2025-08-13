import Frame from "@/components/common/frame";
import { ReusableRadialChart } from "@/components/common/radial-chart";
import { BlurFade } from "@/components/magicui/blur-fade";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/test/")({
  component: Test,
});

function Test() {
  return (
    <main className="flex flex-1 flex-col">
      <Frame>
        <motion.img
          src="/images/lens-graph-4x.png"
          alt=""
          className="absolute top-4 -left-12 max-h-[30%] rotate-60"
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
        <motion.img
          src="/images/money-shield-2x.png"
          alt=""
          className="absolute -right-4 -bottom-8 max-h-[40%]"
          initial={{
            opacity: 0,
            y: -2000,
          }}
          animate={{
            opacity: 1,
            y: [0, -15, 0],
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
              delay: 0.5,
            },
          }}
        />
        <div className="w-full text-center">
          <BlurFade delay={0.25} inView>
            <h1 className="text-[80px] font-extrabold tracking-tight">
              Quality <span className="px-8">&</span> Testing
            </h1>
          </BlurFade>
        </div>
        <div className="absolute top-2/5 left-7/9 grid w-120 -translate-x-2/3 -translate-y-1/2 grid-cols-3">
          <ReusableRadialChart
            value={95}
            maxValue={100}
            color="var(--positive-color)"
            label="%"
            footerText="Service Layer"
            subText="(JUnit, Mockito)"
          />
          <ReusableRadialChart
            value={100}
            maxValue={100}
            label="%"
            color="var(--positive-color)"
            footerText="Controller Layer"
            subText="(JUnit, Mockito)"
          />
          <ReusableRadialChart
            value={100}
            maxValue={100}
            label="%"
            color="var(--positive-color)"
            footerText="Model Layer"
            subText="(JUnit, Mockito)"
          />
        </div>
        <div className="absolute bottom-12 left-16 grid w-120 grid-cols-3">
          <ReusableRadialChart
            value={94}
            maxValue={100}
            color="var(--positive-color)"
            label="%"
            footerText="Performance"
            subText="(Lighthouse)"
          />
          <ReusableRadialChart
            value={97}
            maxValue={100}
            label="%"
            color="var(--positive-color)"
            footerText="Accessibility"
            subText="(Lighthouse)"
          />
          <ReusableRadialChart
            value={100}
            maxValue={100}
            label="%"
            color="var(--positive-color)"
            footerText="Best Practices"
            subText="(Lighthouse)"
          />
        </div>
      </Frame>
    </main>
  );
}
