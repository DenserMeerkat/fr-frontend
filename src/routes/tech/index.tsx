import Frame from "@/components/common/frame";
import { createFileRoute } from "@tanstack/react-router";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { techStack } from "@/constants";
import { BlurFade } from "@/components/magicui/blur-fade";
import { motion } from "motion/react";

export const Route = createFileRoute("/tech/")({
  component: Tech,
});

function Tech() {
  const categories = Object.entries(techStack);

  return (
    <main className="flex flex-1 flex-col">
      <Frame>
        <div className="absolute -top-2 w-full text-center">
          <BlurFade delay={0.25} inView>
            <h1 className="text-[60px] font-extrabold tracking-tight">
              Tech Stack
            </h1>
          </BlurFade>
        </div>
        <div className="mx-auto mt-24 grid max-h-[80%] w-full grid-cols-4 place-content-center px-16">
          <TooltipProvider>
            {categories.map(([category, technologies], index) => (
              <motion.div
                key={category}
                className={`flex flex-col items-center ${
                  index < categories.length - 1
                    ? "border-r-2 border-dashed"
                    : ""
                }`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.h2
                  className="mb-8 text-center text-xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.0 + index * 0.2,
                    ease: "easeOut",
                  }}
                >
                  {category}
                </motion.h2>
                <div className="flex flex-col gap-8">
                  {technologies.map((tech, techIndex) => (
                    <Tooltip key={tech.name}>
                      <TooltipTrigger asChild>
                        <motion.div
                          className="flex cursor-pointer items-center gap-4"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 1.2 + index * 0.2 + techIndex * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                        >
                          <motion.img
                            src={tech.src}
                            alt={tech.name}
                            className="size-20"
                            whileHover={{
                              rotateY: 5,
                              rotateX: 5,
                            }}
                            transition={{
                              duration: 0.2,
                              ease: "easeOut",
                            }}
                          />
                          <motion.span
                            className="font-mono font-semibold"
                            whileHover={{
                              scale: 1.1,
                              color: "#d97757",
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech.name}
                          </motion.span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{tech.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </motion.div>
            ))}
          </TooltipProvider>
        </div>
      </Frame>
    </main>
  );
}
