import { motion } from "motion/react";

type FloatingElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  floatDirection?: "y" | "x";
  floatDistance?: number;
  floatDuration?: number;
};

const FloatingElement = ({
  children,
  className,
  delay = 0,
  floatDirection = "y",
  floatDistance = 15,
  floatDuration = 2.5,
}: FloatingElementProps) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 50,
        [floatDirection]: 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        [floatDirection]: [0, -floatDistance, 0],
      }}
      transition={{
        opacity: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
        y:
          floatDirection === "y"
            ? {
                duration: floatDuration,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
                delay: delay + 0.8,
              }
            : {
                duration: 0.8,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
        x:
          floatDirection === "x"
            ? {
                duration: floatDuration,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
                delay: delay + 0.8,
              }
            : undefined,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
