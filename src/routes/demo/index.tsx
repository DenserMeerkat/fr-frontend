import Frame from "@/components/common/frame";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLinkIcon } from "lucide-react";
import { motion } from "motion/react";

export const Route = createFileRoute("/demo/")({
  component: Demo,
});

function Demo() {
  return (
    <main className="flex flex-1 flex-col">
      <Frame>
        <motion.img
          src="/images/fold-graph-2x.png"
          alt=""
          className="absolute top-1/2 right-1/8 max-h-[60%] -translate-y-1/2"
          initial={{
            opacity: 0,
            y: -2000,
          }}
          animate={{
            opacity: 1,
            y: [0, -8, 0, 5, -5, 0],
            x: [5, -5, 5, 2, 0, 5],
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
        <div className="absolute top-1/2 left-1/10 -translate-y-1/2">
          <BoxReveal boxColor={`#d97757`} duration={0.5}>
            <h1 className="mt-2 text-[110px] leading-[110px] font-extrabold tracking-tight">
              Demo
            </h1>
          </BoxReveal>
          <BlurFade delay={0.25} inView>
            <div className="mt-6">
              <a
                href="https://fourreal.vercel.app"
                target="_blank"
                className="bg-background hover:text-primary flex w-fit items-center rounded-full border-2 px-8 py-1.5 text-xl transition-colors duration-300 hover:underline"
              >
                fourreal.vercel.app
                <ExternalLinkIcon className="ml-3 size-5" />
              </a>
            </div>
          </BlurFade>
        </div>
      </Frame>
    </main>
  );
}
