import Frame from "@/components/common/frame";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { team } from "@/constants";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/team/")({
  component: Team,
});

export default function Team() {
  return (
    <main className="flex flex-1 flex-col">
      <Frame>
        <div className="absolute top-1/8 left-1/24 -translate-y-1/2">
          <BoxReveal boxColor={`#d97757`} duration={0.5}>
            <h1 className="mt-2 text-[70px] font-extrabold tracking-tight">
              Team Members
            </h1>
          </BoxReveal>
        </div>

        <motion.img
          src="/images/money-coin.png"
          alt=""
          className="absolute right-0 max-h-[40%] translate-x-[50%] rotate-45"
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
          src="/images/globe-money-4x.png"
          alt=""
          className="absolute right-0 bottom-0 max-h-[80%] translate-x-[25%] translate-y-[10%]"
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
          className="absolute right-0 bottom-0 max-h-[40%] -translate-x-[125%] translate-y-[55%] rotate-90"
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
              delay: 0.6,
            },
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/24 flex -translate-y-1/2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {team.map((member, index) => {
            return (
              <motion.div
                key={member.initials}
                className="group cursor-pointer space-y-4"
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1.2 + index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.div
                  whileHover={{
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                >
                  <Avatar className="size-36 rounded-lg shadow-xl transition-shadow duration-300 group-hover:shadow-2xl">
                    <AvatarImage src={member.src} alt={member.name} />
                    <AvatarFallback className="rounded-md text-xs">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center justify-between space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.4 + index * 0.2,
                    ease: "easeOut",
                  }}
                >
                  <motion.p
                    className="text-primary font-semibold"
                    whileHover={{
                      scale: 1.1,
                      color: "#d97757",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {member.name}
                  </motion.p>
                  <motion.p
                    className="text-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 + index * 0.2 }}
                  >
                    {member.universiity}
                  </motion.p>
                  <motion.p
                    className="text-muted-foreground font-mono"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.8 + index * 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    [{member.domain}]
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </Frame>
    </main>
  );
}
